import React, { Component } from 'react';
import {connect} from 'react-redux';
import  UtilsUser from '../redux/Utils/utils_user'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Header extends  Component{


    constructor(props) {
        super(props);
        UtilsUser.updateuser(this.props.dispatch);

    }


    logOut() {
        cookies.remove('token');
        UtilsUser.updateuser(this.props.dispatch);
    }

    render() {
        var showbutton;
        if (!this.props.user_email) {
            showbutton = (
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            )
        } else {

            showbutton = (
                <ul className="nav navbar-nav navbar-right">
                    <li><a>{this.props.user_email}</a></li>
                    <li><a href="/" onClick={this.logOut}>Log out</a></li>
                </ul>
            )
        }


        return (
            <div >
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Wallet</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li id="navbar-home"><a href="/">Home<span className="sr-only">(current)</span></a></li>

                            </ul>
                            {showbutton}

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Header = connect(function (state) {
    return {...state}
})(Header);

export default Header;