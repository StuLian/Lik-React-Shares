import React from 'react'
import './index.less'
import { NavBar, SearchBar } from "antd-mobile"
import { withRouter } from 'react-router-dom'

import swiper from '../../assets/images/banner.jpg'
import icon1 from '../../assets/images/ih1.png'
import icon2 from '../../assets/images/ih2.png'
import icon3 from '../../assets/images/ih3.png'
import icon4 from '../../assets/images/ih4.png'

class Index extends React.Component {
    constructor(props){
        super(props)
    }

    renderTabList = () => {
        const list = [
            {
                icon: icon1,
                name: '自选股'
            },
            {
                icon: icon2,
                name: '上证指数'
            },
            {
                icon: icon3,
                name: '沪深排行'
            },
            {
                icon: icon4,
                name: '委托交易'
            }
        ]
        return (
            <div className="tab-box">
                {list.map((item,index) => { 
                    return (
                        <div className="tab" key={index}>
                            <div className="radiu"><img src={item.icon} /></div>
                            <div className="txt">{item.name}</div>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderSharesInfo = () => {
        const list = [
            {
                name: '上证指数',
                nowpri: 2020.98,
                increase: 13.87,
                increPer: -0.44
            },
            {
                name: '深圳成指',
                nowpri: 2020.98,
                increase: -13.87,
                increPer: -0.44
            },
            {
                name: '创业板指',
                nowpri: 2020.98,
                increase: 13.87,
                increPer: -0.44
            },
            {
                name: '中心指数',
                nowpri: 2020.98,
                increase: -13.87,
                increPer: -0.44
            }
        ]
        return (
            <div className="data-box">
                {list.map((item,index) => {
                    return (
                        <div
                            className={item.increase > 0 ? 'data up' : 'data down'}
                            key={index}
                        >
                            <p className="col-bla">{ item.name }</p>
                            <p className="col-re">{ item.nowpri }</p>
                            <p className="col-gre">{ item.increase }&emsp;{ item.increPer }%</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderNewsList = () => {
        const list = [
            {
                title: '科创板征求意见今日结束',
                company: '证券时报网',
                update_time: '2019-11-17 23:59:59'
            },
            {
                title: '科创板征求意见今日结束',
                company: '证券时报网',
                update_time: '2019-11-17 23:59:59'
            },
            {
                title: '科创板征求意见今日结束',
                company: '证券时报网',
                update_time: '2019-11-17 23:59:59'
            },
            {
                title: '科创板征求意见今日结束',
                company: '证券时报网',
                update_time: '2019-11-17 23:59:59'
            },
            {
                title: '科创板征求意见今日结束',
                company: '证券时报网',
                update_time: '2019-11-17 23:59:59'
            }
        ]
        return (
            <div className="news">
                {list.map((item,index) => {
                    return (
                        <div className="list" key={index}>
                            <div className="list-title">{item.title}</div>
                            <div className="list-tab">
                                <span className="company">{item.company}</span>
                                <span className="time">{item.update_time}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                >首页</NavBar>
                <SearchBar placeholder="输入代码/名称/拼音" onFocus={
                    () => {
                        this.props.history.push('/search')
                    }
                } />
                <img className="picture" src={swiper} />
                {/* {this.renderTabList()} */}
                {this.renderSharesInfo()}
                <div className="title">资讯</div>
                {this.renderNewsList()}
            </div>
        )
    }
}

export default withRouter(Index)
