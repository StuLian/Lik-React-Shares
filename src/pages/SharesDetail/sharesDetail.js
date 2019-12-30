import React from 'react'
import './sharesDetail.less'
import { NavBar, Icon, Tabs } from "antd-mobile"

import { sharesInfo } from './api.js'

import upPng from '../../assets/images/up.png' 
import downPng from '../../assets/images/down.png'

import BuyWhichCount from '../Components/buyWhichCount.js'

class SharesDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            informationData: {},
            gopicture: {},
            addZS: 0,
        }
    }

    componentDidMount(){
        let params = {
            gp_code: this.props.location.state.code
        }
        this.getSharesInfo(params)
    }

    async getSharesInfo(params){
        let data = await sharesInfo(params);
        this.setState({
            informationData: data.data,
            gopicture: data.gopicture,
            addZS: data.is_added
        })
    }

    sharesInfo = () => {
        const informationData = this.state.informationData;
        return (
            <div className="content-info-only">
                <h1 className={informationData.increase > 0 ? "titles up" : "titles down"}>
                    { informationData.nowPri }
                    <img className="UDIcon" src={informationData.increase > 0 ? upPng : downPng}/>
                    <span className="num num1">{ informationData.increase }%</span>
                    <span className="num num2">{ informationData.increPer }%</span>
                    <span className="choose">{this.state.addZS == 1 ? '移出自选股' : (this.state.addZS == 2 ? '加入自选股' : '')}</span>
                </h1>
                <h3 className="subTitle">交易时间:09:30-11:30 13:00-15:00</h3>
                <ul className="list">
                    <li className="listItem">
                        <span className="txt">今开</span>
                        <span className={informationData.increase > 0 ? "num up" : "num down"}>
                            { informationData.todayStartPri }
                        </span>
                    </li>
                    <li className="listItem">
                        <span className="txt">昨收</span>
                        <span className="num">{ informationData.yestodEndPri }</span>
                    </li>
                    <li className="listItem">
                        <span className="txt">最高</span>
                        <span className={informationData.increase > 0 ? "num up" : "num down"}>
                            { informationData.todayMax }
                        </span>
                    </li>
                    <li className="listItem">
                        <span className="txt">最低</span>
                        <span className={informationData.increase > 0 ? "num up" : "num down"}>
                            { informationData.todayMin }
                        </span>
                    </li>
                    <li className="listItem">
                        <span className="txt">振幅</span>
                        <span className="num">{ informationData.increPer }%</span>
                    </li>
                    <li className="listItem">
                        <span className="txt">成交量</span>
                        <span className="num">{ informationData.traNumber }</span>
                    </li>
                    <li className="listItem">
                        <span className="txt">成交额</span>
                        <span className="num">{ informationData.traAmount }</span>
                    </li>
                </ul>
            </div>
        )
    }

    render(){
        const tabs = [
            { title: '分时' },
            { title: '日时' },
            { title: '周时' },
            { title: '月时' }
        ];

        const klineData = this.state.gopicture;

        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >股票详情</NavBar>
                <div className="contentBox">
                    {this.sharesInfo()}
                    <div className="slide-tb">
                        <Tabs tabs={tabs} initialPage={0} tabBarActiveTextColor="red">
                            <img src={klineData.minurl}/>
                            <img src={klineData.dayurl}/>
                            <img src={klineData.weekurl}/>
                            <img src={klineData.monthurl}/>
                        </Tabs>
                    </div>
                    <BuyWhichCount informationData={this.state.informationData}/>
                    <div className="bottomBox">
                        <div className="buy" onClick={ () => {this.props.history.push('/buy')} }>买入</div>
                        <div className="sell" onClick={ () => {this.props.history.push('/sell')} }>卖出</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SharesDetail
