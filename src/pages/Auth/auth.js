import React from 'react'
import './auth.less'
import { NavBar, Tabs } from "antd-mobile"

class Auth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isAgreeText: true,
            authTitle: '登录'
        }
    }

    login = () => {
        return (
            <ul>
                <li>
                    <span className="bg1">手机号</span>
                    <input type="number" placeholder="请输入手机号" />
                </li>
                <li>
                    <span className="bg3">密码</span>
                    <input type="password" placeholder="请输入密码" />
                </li>
            </ul>
        )
    }

    register = () => {
        return (
            <ul>
                <li>
                    <span className="bg1">用户名</span>
                    <input type="text" placeholder="请输入用户名" />
                </li>
                <li>
                    <span className="bg1">身份证号</span>
                    <input type="text" placeholder="请输入身份证号" />
                </li>
                <li>
                    <span className="bg1">手机号</span>
                    <input type="number" placeholder="请输入手机号" />
                </li>
                <li>
                    <span className="bg3">密码</span>
                    <input type="password" placeholder="请输入密码" />
                </li>
                <li>
                    <span className="bg3">确认密码</span>
                    <input type="password" placeholder="请确认密码" />
                </li>
                <li>
                    <span className="bg2">机构代码</span>
                    <input type="text" placeholder="请输入机构代码" />
                </li>
                <li>
                    <span className="bg2">验证码</span>
                    <input type="number" placeholder="请输入手机验证码" />
                    <div className="sendCode">获取验证码</div>
                </li>
                <li>
                    <span className="bg3">密码</span>
                    <input type="password" placeholder="请输入密码" />
                </li>
            </ul>
        )
    }

    render(){
        const tabs = [
            { title: '登录' },
            { title: '注册' }
        ];

        return (
            <div>
                <NavBar
                    mode="light"
                >授权</NavBar>
                <div className="borderT">
                    <Tabs tabs={tabs} initialPage={0} tabBarActiveTextColor="red" onChange={tab => {
                        this.setState({
                            authTitle: tab.title
                        })
                    }}>
                        <div className="content">
                            {this.login()}
                        </div>
                        <div className="content">
                            {this.register()}
                        </div>
                    </Tabs>
                </div>
                <div className="read">
                    <div 
                        onClick={
                            () => {
                                this.setState({
                                    isAgreeText: !this.state.isAgreeText
                                })
                            }
                        }
                    >
                        <input 
                            type="checkBox" 
                            checked={this.state.isAgreeText}
                            readOnly
                        />
                        <label></label>
                    </div>
                    <span>同意</span>
                    <span className="addcolor">《用户协议》</span> 
                    <span className="addClass">找回密码?</span>
                </div>
                <div className="login">{this.state.authTitle}</div>
            </div>
        )
    }
}

export default Auth
