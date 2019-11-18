import React from 'react'
import './index.css'
import { NavBar, SearchBar } from "antd-mobile";

import swiper from '../../assets/images/banner.jpg'
import icon1 from '../../assets/images/ih1.png'
import icon2 from '../../assets/images/ih2.png'
import icon3 from '../../assets/images/ih3.png'
import icon4 from '../../assets/images/ih4.png'

class Index extends React.Component {
    renderTabList = () => {
        return (
            <div class="tab-box">
                <div class="tab">
                    <div class="radiu"><img src={icon1} /></div>
                    <div class="txt">自选股</div>
                </div>
                <div class="tab">
                    <div class="radiu">
                        <img src={icon2} />
                    </div>
                    <div class="txt">上证指数</div>
                </div>
                <div class="tab">
                    <div class="radiu">
                        <img src={icon3} />
                    </div>
                    <div class="txt">沪深排行</div>
                </div>
                <div class="tab">
                    <div class="radiu"><img src={icon4} /></div>
                    <div class="txt">委托交易</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    onLeftClick={() => {}}
                >首页</NavBar>
                <SearchBar placeholder="输入代码/名称/拼音" />
                <img className="picture" src={swiper} />

            </div>
        )
    }
}

export default Index
