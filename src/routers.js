import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import ForgotPassword from './components/fogetpassword'
import ChangePassword from './components/changepassword'
import App from  './containers/App'


import {connect} from 'react-redux'

class Router extends Component {
    render() {

        return (
            <main>
                <Switch>
                    <Route exact path='/' render={(props) => <App/>}/>
                    <Route path='/login' render={(props) => <Login  />}/>
                    <Route exact path='/register' render={(props) => <Register />}/>
                    <Route exact path='/forgotpassword' render={(props) => <ForgotPassword />}/>
                    <Route path='/auth/changepassword/:code?' render={props => <ChangePassword code = {props.match.params.code}/>}/>
               </Switch>
            </main>
        )
    }
}


Router = connect(function (state) {
    return {...state}
})(Router);
export default Router