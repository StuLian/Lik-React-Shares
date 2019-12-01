import React from 'react'
import './sharesDetail.less'
import { NavBar, Icon, Tabs } from "antd-mobile"

import upPng from '../../assets/images/up.png' 
import downPng from '../../assets/images/down.png'

import BuyWhichCount from '../Components/buyWhichCount.js'

const informationData = {
    buyFive: "15",
    buyFivePri: "15.86",
    buyFour: "13",
    buyFourPri: "15.87",
    buyOne: "61488",
    buyOnePri: "15.90",
    buyThree: "29",
    buyThreePri: "15.88",
    buyTwo: "409",
    buyTwoPri: "15.89",
    competitivePri: "15.90",
    date: "2019-11-29",
    gid: "sz300808",
    increPer: "44.02",
    increase: "4.86",
    name: "N久量",
    nowPri: "15.90",
    reservePri: "0.00",
    sellFive: "0",
    sellFivePri: "0.00",
    sellFour: "0",
    sellFourPri: "0.00",
    sellOne: "0",
    sellOnePri: "0.00",
    sellThree: "0",
    sellThreePri: "0.00",
    sellTwo: "0",
    sellTwoPri: "0.00",
    time: "15:00:03",
    todayMax: "15.90",
    todayMin: "13.25",
    todayStartPri: "13.25",
    traAmount: "5161900",
    traNumber: "3374",
    yestodEndPri: "11.04"
}

class SharesDetail extends React.Component {
    sharesInfo = () => {
        return (
            <div className="content-info-only">
                <h1 className={informationData.increase > 0 ? "titles up" : "titles down"}>
                    { informationData.nowPri }
                    <img className="UDIcon" src={informationData.increase > 0 ? upPng : downPng}/>
                    <span className="num num1">{ informationData.increase }</span>
                    <span className="num num2">{ informationData.increPer }%</span>
                    <span className="choose">加入自选股</span>
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

        const klineData = {
            minurl: "http://image.sinajs.cn/newchart/min/n/sz300808.gif?1575104381",
            dayurl: "http://image.sinajs.cn/newchart/daily/n/sz300808.gif?1575104381",
            weekurl: "http://image.sinajs.cn/newchart/weekly/n/sz300808.gif?1575104381",
            monthurl: "http://image.sinajs.cn/newchart/monthly/n/sz300808.gif?1575104381"
        }

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
                    <BuyWhichCount informationData={informationData}/>
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
