import React from 'react'
import './record.less'
import { NavBar, Icon } from "antd-mobile"
import { record } from './api.js'

import icon1 from '../../assets/images/icon3.png'
import icon2 from '../../assets/images/icon.png'
import icon3 from '../../assets/images/icon1.png'
import icon4 from '../../assets/images/icon2.png'

class Record extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            info: {}
        }
    }

    componentDidMount(){
        this.getRecord()
    }

    async getRecord(){
        let data = await record();
        this.setState({
            info: data
        })
    }

    render() {
        const info = this.state.info;
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >资产</NavBar>
                <div className="content-wallet">
                    <div className="infos">
                        <div className="info-name">浮动盈亏</div>
                        <div className="info-count">{info.profit_and_loss}</div>
                    </div>
                    <div className="tab-box">
                        <div className="tab tab1">
                            <div className="icon"><img className="tab4" src={icon1} /></div>
                            <div className="con">
                                <div className="con-one">总资产</div>
                                <div className="con-two">{info.total_money}</div>
                            </div>
                        </div>
                        <div className="tab tab2">
                            <div className="icon"><img className="tab4" src={icon2} /></div>
                            <div className="con">
                                <div className="con-one">市值</div>
                                <div className="con-two">{info.market_money}</div>
                            </div>
                        </div>
                        <div className="tab tab3">
                            <div className="icon"><img className="tab4" src={icon3} /></div>
                            <div className="con">
                                <div className="con-one">可用</div>
                                <div className="con-two">{info.available_money}</div>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="icon"><img className="tab4" src={icon4} /></div>
                            <div className="con">
                                <div className="con-one">可取</div>
                                <div className="con-two">{info.advisable_money}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Record
