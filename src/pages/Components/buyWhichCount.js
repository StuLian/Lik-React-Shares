import React from 'react'

class BuyWhichCount extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="content-infos">
                <ul className="buyList">
                    <li className="buyItem down">
                        <div className="titles">买一</div>
                        <div className="value">{this.props.informationData.buyOnePri}</div>
                        <div className="num">{this.props.informationData.buyOne}</div>
                    </li>
                    <li className="buyItem down">
                        <div className="titles">买二</div>
                        <div className="value">{this.props.informationData.buyTwoPri}</div>
                        <div className="num">{this.props.informationData.buyTwo}</div>
                    </li>
                    <li className="buyItem down">
                        <div className="titles">买三</div>
                        <div className="value">{this.props.informationData.buyThreePri}</div>
                        <div className="num">{this.props.informationData.buyThree}</div>
                    </li>
                    <li className="buyItem down">
                        <div className="titles">买四</div>
                        <div className="value">{this.props.informationData.buyFourPri}</div>
                        <div className="num">{this.props.informationData.buyFour}</div>
                    </li>
                    <li className="buyItem down">
                        <div className="titles">买五</div>
                        <div className="value">{this.props.informationData.buyFivePri}</div>
                        <div className="num">{this.props.informationData.buyFive}</div>
                    </li>
                </ul>
                <ul className="sellList">
                    <li className="buyItem down">
                        <div className="titles">卖一</div>
                        <div className="value">{this.props.informationData.sellOnePri}</div>
                        <div className="num">{this.props.informationData.sellOne}</div>
                    </li>
                    <li className="sellItem down">
                        <div className="titles">卖二</div>
                        <div className="value">{this.props.informationData.sellTwoPri}</div>
                        <div className="num">{this.props.informationData.sellTwo}</div>
                    </li>
                    <li className="sellItem down">
                        <div className="titles">卖三</div>
                        <div className="value">{this.props.informationData.sellThreePri}</div>
                        <div className="num">{this.props.informationData.sellThree}</div>
                    </li>
                    <li className="sellItem down">
                        <div className="titles">卖四</div>
                        <div className="value">{this.props.informationData.sellFourPri}</div>
                        <div className="num">{this.props.informationData.sellFour}</div>
                    </li>
                    <li className="sellItem down">
                        <div className="titles">卖五</div>
                        <div className="value">{this.props.informationData.sellFivePri}</div>
                        <div className="num">{this.props.informationData.sellFive}</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default BuyWhichCount
