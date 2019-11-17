import React from "react";
import 'antd-mobile/dist/antd-mobile.css';
import './home.css'
import '../../assets/fonts/iconfont.css'
import Index from "../Index/index.js";
import Shares from "../Shares/shares.js";
import Mine from "../Mine/mine.js";
import { TabBar } from "antd-mobile";

import homePng from '../../assets/images/home.png'
import homePng1 from '../../assets/images/home1.png'
import market from '../../assets/images/market.png'
import market1 from '../../assets/images/market1.png'
import mine from '../../assets/images/mine.png'
import mine1 from '../../assets/images/mine1.png'

const tabbardata =  [
    {
        "title": "首页",
        "key": "index",
        "iconUrl": "icon-ind",
        // "iconUrl": homePng,
        // "iconUrlSel": homePng1,
        "path": "/home"
    },
    {
        "title": "行情",
        "key": "shares",
        "iconUrl": "icon-findHouse",
        // "iconUrl": market,
        // "iconUrlSel": market1,
        "path": "/home/shares"
    },
    {
        "title": "我的",
        "key": "mine",
        "iconUrl": "icon-my", 
        // "iconUrl": mine,
        // "iconUrlSel": mine1,
        "path": "/home/mine"
    }
]

function RenderComponent(props) {
    switch(props.path){
        case '/home':
            return <Index />
        case '/home/shares':
            return <Shares />
        case '/home/mine':
            return <Mine />
        default:
            return null
    }
}

function RenderTabbar(props) {
    return tabbardata.map(item => {
        return (
            <TabBar.Item
                title={item.title}
                key={item.key}
                icon={<i className={`iconfont ${item.iconUrl}`} />}
                selectedIcon={<i className={`iconfont ${item.iconUrl}`} />}
                selected={props.selectTab === item.path}
            >
                <RenderComponent
                    path={item.path}
                />
            </TabBar.Item>
        )
    })
}

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedTab: this.props.location.pathname
        }
    }

    render() {
        return (
            <div className="tabbar">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <RenderTabbar selectTab={this.state.selectedTab}/>
                </TabBar>
            </div>
        );
    }
}

export default Home
