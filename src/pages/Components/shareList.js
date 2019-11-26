import React from 'react'

class ShareList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <ul className="rankList">
                {this.props.list.map((item,index) => {
                    return (
                        <li
                            className={item.changepercent > 0 ? 'listItem up' : 'listItem down'}
                            key={index}
                        >
                            <div className="nameBox">
                                <div className="name">{ item.name }</div>
                                <div className="code">{ item.code }</div>
                            </div>
                            <div className="value">{ item.trade }</div>
                            <div className="chg">{ item.changepercent }%</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ShareList
