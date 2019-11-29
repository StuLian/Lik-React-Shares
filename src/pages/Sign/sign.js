import React from 'react'
import './sign.less'
import { NavBar, Icon } from "antd-mobile"

class Sign extends React.Component {
    render(){
        const info = {
            nickname: '小小猪',
            username: 13804691954
        }
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >设置</NavBar>
                <div className="content-sign">
                    <div className="upd-box">
                        <div className="upd">
                            <div className="upd-left">用户名</div>
                            <div className="upd-right">{info.nickname}</div>
                        </div>
                        <div className="upd">
                            <div className="upd-left">手机号</div>
                            <div className="upd-right">{info.username}</div>
                        </div>
                        {/* <div className="upd">
                            <div className="upd-left">登录密码</div>
                            <div className="upd-right">修改密码</div>
                        </div> */}
                    </div>
                    <div className="log-out">退出登录</div>
                </div>
            </div>
        )
    }
}

export default Sign
