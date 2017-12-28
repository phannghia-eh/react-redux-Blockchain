import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'


import {connect} from 'react-redux'

class Router extends Component {
    render() {

        return (
            <main>
                <Switch>
                    <Route exact path='/' render={(props) => <Home  />}/>
                    <Route path='/login' render={(props) => <Login  />}/>
                    <Route exact path='/register' render={(props) => <Register />}/>
               </Switch>
            </main>
        )
    }
}


Router = connect(function (state) {
    return {...state}
})(Router);
export default Router