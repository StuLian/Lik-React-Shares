import React from 'react'
import './auth.less'
import { NavBar, Tabs, Toast } from "antd-mobile"
import { loginApi, registerApi } from './api.js'

class Auth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isAgreeText: true,
            authTitle: '登录',
            passwordSure: '', // 确认的密码
            loginData: {
                username: '',
                password: ''
            },
            registerData: {
                nickname: '',
                username: '',
                password: '',
                id_card: '',
                group: '',
                mobile_verify_code: ''
            }
        }
    }

    login = () => {
        return (
            <ul>
                <li>
                    <span className="bg1">手机号</span>
                    <input type="number" name="username" onChange={(e) => { this.inputChange(e) }} placeholder="请输入手机号" />
                </li>
                <li>
                    <span className="bg3">密码</span>
                    <input type="password" name="password" onChange={(e) => { this.inputChange(e) }} placeholder="请输入密码" />
                </li>
            </ul>
        )
    }

    register = () => {
        return (
            <ul>
                <li>
                    <span className="bg1">用户名</span>
                    <input type="text" name="nickname" onChange={(e) => { this.inputChange(e) }} placeholder="请输入用户名" />
                </li>
                <li>
                    <span className="bg1">身份证号</span>
                    <input type="text" name="id_card" onChange={(e) => { this.inputChange(e) }} placeholder="请输入身份证号" />
                </li>
                <li>
                    <span className="bg1">手机号</span>
                    <input type="number" name="username" onChange={(e) => { this.inputChange(e) }} placeholder="请输入手机号" />
                </li>
                <li>
                    <span className="bg3">密码</span>
                    <input type="password" name="password" onChange={(e) => { this.inputChange(e) }} placeholder="请输入密码" />
                </li>
                <li>
                    <span className="bg3">确认密码</span>
                    <input type="password" name="passwordSure" onChange={(e) => { this.passwordSureChange(e) }} placeholder="请确认密码" />
                </li>
                <li>
                    <span className="bg2">机构代码</span>
                    <input type="text" name="group" onChange={(e) => { this.inputChange(e) }} placeholder="请输入机构代码" />
                </li>
                <li>
                    <span className="bg2">验证码</span>
                    <input type="number" name="mobile_verify_code" onChange={(e) => { this.inputChange(e) }} placeholder="请输入手机验证码" />
                    <div className="sendCode">获取验证码</div>
                </li>
            </ul>
        )
    }

    inputChange(e) {
        e.persist();
        let key = e.target.name;
        let value = e.target.value;
        let obj = this.state.authTitle === '登录' ? this.state.loginData : this.state.registerData;
        let data = Object.assign({},obj,{[key]: value})
        if(this.state.authTitle === '登录'){
            this.setState({
                loginData: data
            })
        }else if(this.state.authTitle === '注册'){
            this.setState({
                registerData: data
            })
        }
        
    }

    passwordSureChange(e) {
        e.persist();
        this.setState({
            passwordSure: e.target.value
        })
    }

    authHandle(status) {
        if(status === '登录'){
            this.loginLogic();
        }else if(status === '注册'){
            this.registerLogic();
        }
    }

    async loginLogic(){
        if(!this.state.loginData.username){
            Toast.info('请输入手机号')
            return
        }
        if(!this.state.loginData.password){
            Toast.info('请输入密码')
            return
        }
        let data = await loginApi(this.state.loginData);    
        window.localStorage.setItem('shares_token',data.access_token);
        this.props.history.push('/home');
    }

    async registerLogic(){
        if(!this.state.registerData.nickname){
            Toast.info('请输入用户名')
            return
        }
        if(!this.state.registerData.id_card){
            Toast.info('请输入身份证号')
            return
        }
        if(!this.state.registerData.username){
            Toast.info('请输入手机号')
            return
        }
        if(!this.state.registerData.password){
            Toast.info('请输入密码')
            return
        }
        if(!this.state.passwordSure){
            Toast.info('请再次确认密码')
            return
        }
        if(this.state.registerData.password !== this.state.passwordSure){
            Toast.info('两次密码输入不一致，请重新输入')
            this.setState({
                passwordSure: ''
            })
            return
        }
        if(!this.state.registerData.group){
            Toast.info('请输入机构代码')
            return
        }
        if(!this.state.registerData.mobile_verify_code){
            Toast.info('请输入验证码')
            return
        }
        let regTel = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        let regIdentity = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(!regTel.test(this.state.registerData.username)){
            this.$toast("手机号格式不正确");
            return;
        }
        if (!regIdentity.test(this.state.registerData.id_card)) {
            this.$toast("请输入合法身份证号码");
            return;
        }
        let data = await registerApi(this.state.registerData);
        window.localStorage.setItem('shares_token',data.access_token);
        this.props.history.push('/home');
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
                    {/* <span className="addClass">找回密码?</span> */}
                </div>
                <div className="login" onClick={() => {this.authHandle(this.state.authTitle)}}>{this.state.authTitle}</div>
            </div>
        )
    }
}

export default Auth
