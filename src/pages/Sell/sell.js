import React from 'react'
import './sell.less'
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

class Sell extends React.Component {
    render(){
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >卖出</NavBar>
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
                        placeholder="输入可卖出股数"
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >卖出数量</InputItem>
                    <div className="add-list">
                        <span className="add-list-left">可卖出股数：100股</span>
                        <span className="add-list-right">市值股数：100股</span>
                    </div>
                    <InputItem
                        type='money'
                        placeholder=""
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >卖出金额</InputItem>
                </List>
                <div class="confirms">卖出</div>
            </div>
        )
    }
}

export default Sell
