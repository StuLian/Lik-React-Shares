import React from 'react'
import './history.less'
import { NavBar, Icon } from "antd-mobile"

class History extends React.Component {
    render(){
        const list = Array.from(new Array(10)).map((item,index) => (
            {
                name: '市北高新',
                gp_code: 600604,
                trade_number: index,
                price: 100.00,
                sell_price: 200.00,
                pricechange: 10 + index,
                changepercent: index
            }
        ))

        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >历史</NavBar>
                <div className="content-history">
                    <div className="list-title">
                        <div className="con">股票代码</div>
                        <div className="con">盈亏</div>
                        <div className="con">交易数量</div>
                        <div className="con">成本/成交价</div>
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
                                        <div className="list-name">
                                            <span className="market-name">{ item.pricechange }</span>
                                            <span className="code">{ item.changepercent }</span>
                                        </div>
                                        <div className="list-name">
                                            {item.trade_number}
                                        </div>
                                        <div className="list-name">
                                            <span className="market-name">{ item.price }</span>
                                            <span className="code">{ item.sell_price }</span>
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

export default History
