import React from 'react'
import Home from './pages/Home/home.js'
import Auth from './pages/Auth/auth.js'
import Search from './pages/Search/search.js'
import Sign from './pages/Sign/sign.js'
import Record from './pages/Record/record.js'
import Entrust from './pages/Entrust/entrust.js'
import History from './pages/History/history.js'
import SharesDetail from './pages/SharesDetail/sharesDetail.js'
import Buy from './pages/Buy/buy.js'
import Sell from './pages/Sell/sell.js'
import {  BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

const apitoken = localStorage.getItem('shares_token')

function IsLogin() {
    if(!apitoken){
        return (
            <Redirect exact from="/" to="/auth" />
        )
    }else{
        return (
            <Redirect exact from="/" to="/home" />
        )
    }
}

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/auth" component={Auth}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Route path="/sign" component={Sign}></Route>
                    <Route path="/record" component={Record}></Route>
                    <Route path="/entrust" component={Entrust}></Route>
                    <Route path="/history" component={History}></Route>
                    <Route path="/sharesDetail" component={SharesDetail}></Route>
                    <Route path="/buy" component={Buy}></Route>
                    <Route path="/sell" component={Sell}></Route>
                    <IsLogin/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
