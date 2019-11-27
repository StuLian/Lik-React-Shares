import React from 'react'
import './search.less'
import { NavBar, Icon, SearchBar } from "antd-mobile"

class Search extends React.Component {
    componentDidMount() {
        this.autoFocus.focus()
    }

    handleChange = () => {

    }

    sharesList = () => {
        const list = Array.from(new Array(10)).map((item,index) => (
            {
                changepercent: index,
                name: '市北高新',
                code: 600604,
                trade: 11.05
            }
        ))

        return (
            <ul className="searchList">
                {list.map((item,index) => {
                    return (
                        <li
                            className="listItem"
                            key={index}
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
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >搜索页</NavBar>
                <SearchBar placeholder="输入代码/名称/拼音" onChange={this.handleChange()} ref={ref => this.autoFocus = ref} onCancel={ () => { this.props.history.goBack() } } />
                {this.sharesList()}
            </div>
        )
    }
}

export default Search
