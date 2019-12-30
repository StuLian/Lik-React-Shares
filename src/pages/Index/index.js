import React from 'react'
import './index.less'
import { NavBar, SearchBar } from "antd-mobile"
import { withRouter } from 'react-router-dom'
import { sharesInfo, newsList } from './api.js'

import swiper from '../../assets/images/banner.jpg'
import icon1 from '../../assets/images/ih1.png'
import icon2 from '../../assets/images/ih2.png'
import icon3 from '../../assets/images/ih3.png'
import icon4 from '../../assets/images/ih4.png'

var timer;

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sharesInfoList: [],
            news: []
        }
    }

    componentDidMount(){
        // timer = setInterval(() => { this.getSharesInfoList() },5000)
        this.getSharesInfoList()
        this.getNewsList()
    }

    componentWillUnmount(){
        clearInterval(timer);
    }

    async getSharesInfoList() {
        let data = await sharesInfo();
        data.lists.forEach((item,index) => {
            item.increase = item.increase.split('%')[0]
        })
        this.setState({
            sharesInfoList: data.lists
        })
    }

    async getNewsList() {
        let params = {
            page: 1,
            num: 5
        }
        let data = await newsList(params);
        this.setState({
            news: data.lists
        })
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
        const list = this.state.sharesInfoList;
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
                            <p className="col-gre">{ item.increase }%&emsp;{ item.increPer }</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderNewsList = () => {
        const list = this.state.news;
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
