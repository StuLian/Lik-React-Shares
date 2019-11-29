import React from 'react'
import './entrust.less'
import { NavBar, Icon } from "antd-mobile"

class Entrust extends React.Component {
    render(){
        const list = Array.from(new Array(10)).map((item,index) => (
            {
                name: '市北高新',
                gp_code: 600604,
                trade_type: index,
                price: 100.00,
                surplus_number: 10 + index,
                trade_id: index
            }
        ))

        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >委托/撤单</NavBar>
                <div className="content-entrust">
                    <div className="list-title">
                        <div className="con">名称代码</div>
                        <div className="con">类型</div>
                        <div className="con">委托价</div>
                        <div className="con">股数</div>
                        <div className="con">操作</div>
                    </div>
                    <div className="list-box">
                        {
                            list.map((item,index) => {
                                return (
                                    <div className="list" key={index}>
                                        <div className="list-name">
                                            <span className="market-name">{ item.name }</span>
                                            <span className="code">{ item.gp_code }</span>
                                        </div>
                                        <div className="list-name">{ item.trade_type == 1 ? '买入' : '卖出' }</div>
                                        <div className="list-name">{ item.price }</div>
                                        <div className="list-name">
                                            <span>{ item.surplus_number }</span>
                                        </div>
                                        <div className="list-name">
                                            <span className="opration">撤销</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Entrust
