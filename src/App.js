import React from 'react';
import Home from './pages/Home/home.js'
import {  BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={Home}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
