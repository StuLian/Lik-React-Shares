import React from 'react'
import './shares.less'
import { NavBar, SearchBar, Tabs } from "antd-mobile";

class Shares extends React.Component {
    zxList = () => {
        const list = []
    }

    hsList = () => {

    }

    render() {
        const tabs = [
            { title: '自选' },
            { title: '沪深' }
        ];
        return (
            <div>
                <NavBar
                    mode="light"
                    onLeftClick={() => {}}
                >行情</NavBar>
                <SearchBar placeholder="输入代码/名称/拼音" />
                <div>
                    <Tabs tabs={tabs} initialPage={0} tabBarActiveTextColor="red">
                        <div className="sharesList">
                            <h1 className="title">
                                <div className="title1">名称代码</div>
                                <div className="title2">最新价</div>
                                <div className="title3">振幅</div>
                            </h1>
                        </div>
                        <div className="sharesList">
                            <h1 className="title">
                                <div className="title1">名称代码</div>
                                <div className="title2">最新价</div>
                                <div className="title3">振幅</div>
                            </h1>
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Shares
