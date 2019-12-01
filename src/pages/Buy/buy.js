import React from 'react'
import './buy.less'
import { NavBar, Icon, List, InputItem } from "antd-mobile"

import BuyWhichCount from '../Components/buyWhichCount.js'

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

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

class Buy extends React.Component {
    specialInput = () => {
        return (
            <div className="tabsName">
                <span className="namesTab">数量匹配</span>
                <span className="value">
                    <label
                        for="x5"
                        className="count active"
                        style={{left: '.15rem'}}
                    >
                        <input
                            type="radio"
                            name="count"
                            className="radio"
                            value="5"
                            id="x5"
                        />
                        5倍
                    </label>
                    <label
                        for="x8"
                        className="count"
                        style={{left: '1.4rem'}}
                    >
                        <input
                            type="radio"
                            name="count"
                            className="radio"
                            value="8"
                            id="x8"
                        />
                        8倍
                    </label>
                    <label
                        for="x12"
                        className="count"
                        style={{left: '2.65rem'}}
                    >
                        <input
                            type="radio"
                            name="count"
                            className="radio"
                            value="12"
                            id="x12"
                        />
                        12倍
                    </label>
                    <span className="count-name" style={{top: '.1rem'}}>1股</span>
				    <span className="count-code" style={{bottom: '.1rem'}}>市值1元</span>
                </span>
            </div>
        )
    }

    render(){
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >买入</NavBar>
                <List>
                    <InputItem
                        type='money'
                        placeholder=""
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >证劵代码</InputItem>
                    <InputItem
                        type='money'
                        placeholder=""
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >委托类型</InputItem>
                    <InputItem
                        type='money'
                        placeholder=""
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >委托价格</InputItem>
                    <BuyWhichCount informationData={informationData}/>
                    <InputItem
                        type='money'
                        placeholder=""
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >买入数量</InputItem>
                    <InputItem
                        type='money'
                        placeholder=""
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >买入资金</InputItem>
                    {this.specialInput()}
                    <InputItem
                        type='money'
                        placeholder=""
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >建仓费</InputItem>
                    <InputItem
                        type='money'
                        placeholder=""
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >递延费</InputItem>
                </List>
                <div className="buttonBox">
                    <div className="count">
                        还需支付
                        <span className="money">￥100</span>
                    </div>
                    <div className="confirm">马上创建</div>
                </div>
            </div>
        )
    }
}

export default Buy
