import React from "react";
import 'antd-mobile/dist/antd-mobile.css';
import './home.css'
import Index from "../Index/index.js";
import Shares from "../Shares/shares.js";
import Mine from "../Mine/mine.js";
import { TabBar } from "antd-mobile";
import { tabbardata } from "./tabbar.json";

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
    var tabBar = tabbardata.map(item => {
        return (
            <TabBar.Item
                title={item.title}
                key={item.key}
                icon={<img src={item.iconUrl}></img>}
                selectedIcon={<img src={item.iconUrlSel}></img>}
                selected={props.selectedTab === item.key}
            >
                <RenderComponent
                    path={item.path}
                />
            </TabBar.Item>
        )
    })
    return tabBar
}

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedTab: 'index'
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
                    <RenderTabbar selectedTab={this.state.selectedTab}/>
                </TabBar>
            </div>
        );
    }
}

export default Home;
