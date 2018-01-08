import React, { Component } from 'react';
import {connect} from 'react-redux'
import Cookies from 'universal-cookie';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from  '../views/Dashboard/Dashboard';


class App extends Component{


    render() {
        if(this.props.user_email){
            return(
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <Dashboard/>
                    </div>
                </div>
            )
        }
        return(
            <div className="container-fluid">
                <div className="row">
                </div>
            </div>
        )
    }
}

App = connect(function (state) {
    return {...state}
})(App);

export default App;