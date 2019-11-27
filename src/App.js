import React from 'react';
import Home from './pages/Home/home.js'
import Auth from './pages/Auth/auth.js'
import Search from './pages/Search/search.js'
import Record from './pages/Record/record.js'
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
                    <Route path="/record" component={Record}></Route>
                    <IsLogin/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
