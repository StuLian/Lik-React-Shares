import React from "react";
import './home.css'
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
        "iconUrl": homePng,
        "iconUrlSel": homePng1,
        "path": "/home"
    },
    {
        "title": "行情",
        "key": "shares",
        "iconUrl": market,
        "iconUrlSel": market1,
        "path": "/home/shares"
    },
    {
        "title": "我的",
        "key": "mine",
        "iconUrl": mine,
        "iconUrlSel": mine1,
        "path": "/home/mine"
    }
]

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedTab: this.props.location.pathname
        }
    }

    renderComponent = (path) => {
        switch(path){
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

    renderTabbar = () => {
        return tabbardata.map(item => {
            return (
                <TabBar.Item
                    title={item.title}
                    key={item.key}
                    icon={<img className='icon' src={item.iconUrl} />}
                    selectedIcon={<img className='icon' src={item.iconUrlSel} />}
                    selected={this.state.selectedTab === item.path}
                    onPress={() => {
                        this.props.history.push(item.path)
                        this.setState({
                            selectedTab: item.path
                        })
                    }}
                >
                    {this.renderComponent(item.path)}
                </TabBar.Item>
            )
        })
    }

    render() {
        return (
            <div className="tabbar">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="red" 
                    barTintColor="white"
                >
                    {this.renderTabbar()}
                </TabBar>
            </div>
        );
    }
}

export default Home
