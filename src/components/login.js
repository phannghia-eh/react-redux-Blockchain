import React, { Component } from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component{



    l





    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">

                        <div className = "col-md-3"></div>
                        <div className = "col-md-6">
                            <form className="form-signin">
                                <div className="row">
                                    <div className = "col-md-8">
                                        <span className="form-signin-header-title">Welcome Back</span>
                                    </div>
                                    <div className = "col-md-4 text-right">
                                        <span>or </span>
                                        <a href="/register">Register</a>
                                    </div>

                                </div>
                                <p className="form-signin-header-description ">Sign in to your wallet below</p>
                                <div className="form-signin-header-border"/>
                                <div className="form-group">
                                    <label className="lable-email">Email</label>
                                    <input type="text" className="form-control" ref="email" placeholder="Email Address" required="" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" ref="password" placeholder="Password" required=""/>
                                </div>
                                <a href="/forgotpassword">Forgot Password</a>
                                <button className="btn btn-lg btn-success btn-block" type="button" onClick={() => this.login()}>Login</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}

Login = connect(function (state) {
    return {...state}
})(Login);

export default Login;