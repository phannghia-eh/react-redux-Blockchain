import React, { Component } from 'react';
import {connect} from 'react-redux'

class Register extends Component{

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div class="col-md-12 ">

                        <div className = "col-md-3"></div>
                        <div className = "col-md-6">
                            <form className="form-signin">
                                <div className="row">
                                    <div className = "col-md-8">
                                        <span className="form-signin-header-title">Create your Wallet</span>
                                    </div>
                                    <div className = "col-md-4 text-right">
                                        <span>or </span>
                                        <a href="/login ">Login</a>
                                    </div>

                                </div>
                                <p className="form-signin-header-description ">Sign up for a free wallet below</p>
                                <div className="form-signin-header-border"/>
                                <div className="form-group">
                                    <label className="lable-email">Email</label>
                                    <input type="text" className="form-control" ref="username" placeholder="Email" required="" />
                                </div>
                                <div className="form-group">
                                    <label >New Password</label>
                                    <input type="password" className="form-control" ref="password1"  placeholder="New Password" required=""/>
                                </div>
                                <div className="form-group">
                                    <label >Confirm Password</label>
                                    <input type="password" className="form-control" ref="password2"  placeholder="Confirm Password" required=""/>
                                </div>

                                <button className="btn btn-lg btn-success btn-block" type="button" onClick={() => this.register()}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

Register = connect(function (state) {
    return {...state}
})(Register);

export default Register;