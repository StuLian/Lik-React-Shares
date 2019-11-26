import React from 'react'
import './shares.less'
import { NavBar, SearchBar, Tabs } from "antd-mobile";
import ShareList from '../Components/shareList.js'

class Shares extends React.Component {
    zxList = () => {
        const list = Array.from(new Array(5)).map((item,index) => (
            {
                changepercent: index,
                name: '神州泰岳',
                code: 600604,
                trade: 11.05
            }
        ))

        return ( <ShareList list={list} /> )
    }

    hsList = () => {
        const list = Array.from(new Array(10)).map((item,index) => (
            {
                changepercent: index,
                name: '市北高新',
                code: 600604,
                trade: 11.05
            }
        ))

        return ( <ShareList list={list} /> )
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
                    <Tabs tabs={tabs} initialPage={0} tabBarActiveTextColor="red" animated={false}>
                        <div className="sharesList">
                            <h1 className="title">
                                <div className="title1">名称代码</div>
                                <div className="title2">最新价</div>
                                <div className="title3">振幅</div>
                            </h1>
                            {this.zxList()}
                        </div>
                        <div className="sharesList">
                            <h1 className="title">
                                <div className="title1">名称代码</div>
                                <div className="title2">最新价</div>
                                <div className="title3">振幅</div>
                            </h1>
                            {this.hsList()}
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Shares
