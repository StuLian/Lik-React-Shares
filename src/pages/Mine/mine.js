import React from 'react'
import './mine.less'
import { NavBar, Grid } from "antd-mobile"
import { withRouter } from 'react-router-dom'

import signPng from '../../assets/images/sign.png'
import ih1 from '../../assets/images/ih1.png'
import im1 from '../../assets/images/im1.png'
import im2 from '../../assets/images/im2.png'
import im3 from '../../assets/images/im3.png'
import im4 from '../../assets/images/im4.png'
import im5 from '../../assets/images/im5.png'
import im6 from '../../assets/images/im6.png'

class Mine extends React.Component {
    renderGrid = () => {
        const data = [
            {
                icon: im1,
                text: '资产',
                path: '/record'
            },
            {
                icon: im2,
                text: '买入',
                path: '/search'
            },
            {
                icon: im3,
                text: '卖出',
                path: '/search'
            },
            {
                icon: im4,
                text: '委托',
                path: '/entrust'
            },
            {
                icon: im5,
                text: '撤单',
                path: '/entrust'
            },
            {
                icon: im6,
                text: '历史',
                path: '/history'
            }
        ]
        return (<Grid data={data} columnNum={3} onClick={ (el) => { this.props.history.push(el.path) } } />)
    }

    renderStore = () => {
        const list = Array.from(new Array(5)).map((item,index) => (
            {
                name: '神州泰安',
                total_money: 10000,
                pricechange: index,
                changepercent: 600624,
                surplus_number: 5689,
                usable_number: 7854,
                price: 111,
                trade: 222
            }
        ))
        return (
            <div className="list-box1">
                {list.map((item,index) => {
                    return (
                        <div
                            className="list1"
                            key={index}
                        >
                            <div className="list-name">
                                <span className="market-name">
                                    { item.name }
                                </span>
                                <span className="code">{ item.total_money }</span>
                            </div>
                            <div
                                className={Number(item.pricechange) > 0 ? 'list-name col-re' : 'list-name col-gre'}
                            >
                                <span className="market-name">{ item.pricechange }</span>
                                <span className="code">{ item.changepercent }</span>
                            </div>
                            <div className="list-name">
                                <span className="market-name">{ item.surplus_number }</span>
                                <span className="code">{ item.usable_number }</span>
                            </div>
                            <div className="list-name">
                                <span className="market-name">{ item.price }</span>
                                <span className="code">{ item.trade }</span>
                            </div>
                        </div>
                    )
                })}
                <div className="trade">交易事项</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                >我的</NavBar>
                <div className="info">
                    <img className="no-class" src={signPng} onClick={ () => { this.props.history.push('/sign') } }/>
                    <div className="head-img">
                        <img src={ih1} />
                    </div>
                    <div className="username">小肉猪</div>
                    <div className="wallet">我的资产：100元</div>
                </div>
                {this.renderGrid()}
                <div className="title1"><div className="title-left">持仓</div></div>
                <div className="list-title1">
                    <div className="con">市值</div>
                    <div className="con">盈亏</div>
                    <div className="con">持仓/可用</div>
                    <div className="con">成本/现价</div>
                </div>
                {this.renderStore()}
            </div>
        )
    }
}

export default withRouter(Mine)
