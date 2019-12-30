import React from 'react'
import './search.less'
import { NavBar, Icon, SearchBar } from "antd-mobile"
import { hsShares } from '../Shares/api.js'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hsSharesList: [],
            searchTxt: ''
        }
    }

    componentDidMount() {
        this.autoFocus.focus()
        this.getHsList()
    }

    async getHsList(){
        let params = {
            keywords: this.state.searchTxt,
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

    handleChange = (v) => {
        this.setState({
            searchTxt: v
        })
        this.getHsList()
    }

    sharesList = () => {
        const list = this.state.hsSharesList;
        return (
            <ul className="searchList">
                {list.map((item,index) => {
                    return (
                        <li
                            className="listItem"
                            key={index}
                            onClick={ () => { this.props.history.push('/sharesDetail',{code: item.gp_code}) } }
                        >
                            <div className="nameBox">
                                <div className="name">{item.name}</div>
                                <div className="code">{item.code}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

    render(){
        const { searchTxt } = this.state

        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >搜索页</NavBar>
                <SearchBar value={searchTxt} placeholder="输入代码/名称/拼音" onChange={this.handleChange} ref={ref => this.autoFocus = ref} onCancel={ () => { this.props.history.goBack() } } />
                {this.sharesList()}
            </div>
        )
    }
}

export default Search
