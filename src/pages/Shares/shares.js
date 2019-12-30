import React from 'react'
import './shares.less'
import { NavBar, SearchBar, Tabs } from "antd-mobile"
import { withRouter } from 'react-router-dom'
import ShareList from '../Components/shareList.js'
import { zxShares, hsShares } from './api.js'

class Shares extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            zxSharesList: [],
            hsSharesList: []
        }
    }

    componentDidMount(){
        this.getZxList()
        this.getHsList();
    }

    async getZxList(){
        let params = {
            page: 1,
            num: 10
        }
        let data = await zxShares(params);
        data.lists.forEach((item,index) => {
            item.changepercent = item.changepercent.split('%')[0]
        })
        this.setState({
            zxSharesList: data.lists
        })
    }

    async getHsList(){
        let params = {
            page: 1,
            num: 10
        }
        let data = await hsShares(params);
        data.lists.forEach((item,index) => {
            item.changepercent = item.changepercent.split('%')[0]
        })
        this.setState({
            hsSharesList: data.lists
        })
    }

    zxList = () => {
        const list = this.state.zxSharesList;
        return ( <ShareList list={list} history={this.props.history} /> )
    }

    hsList = () => {
        const list = this.state.hsSharesList;
        return ( <ShareList list={list} history={this.props.history} /> )
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
                >行情</NavBar>
                <SearchBar placeholder="输入代码/名称/拼音" onFocus={
                    () => {
                        this.props.history.push('/search')
                    }
                } />
                <div>
                    <Tabs tabs={tabs} initialPage={0} tabBarActiveTextColor="red" animated={false}>
                        <div className="sharesList">
                            <h1 className="title-spec">
                                <div className="titleone">名称代码</div>
                                <div className="title2">最新价</div>
                                <div className="title3">振幅</div>
                            </h1>
                            {this.zxList()}
                        </div>
                        <div className="sharesList">
                            <h1 className="title-spec">
                                <div className="titleone">名称代码</div>
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

export default withRouter(Shares)
