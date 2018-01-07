import React, { Component } from 'react';
import {connect} from 'react-redux'
import Config from '../config';
import  $ from "jquery";

class ForgotPassword extends Component{
    forgotpassword() {
        let forgotPasswordURL = Config.url_auth + "forgot";
        if(this.refs.email.value === ''){
            alert("Empty email field!")
            return;
        }
        else {
            forgotPasswordURL = Config.url_auth + "forgot/" + this.refs.email.value;
        }
        $.get(forgotPasswordURL, (res, err) => {
            if(res.success)
                alert(res.message)
            else
                alert(res.message)
        })
    }

    render() {
        return(
            <div className="container">
                <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                <div className="row">
                    <div className="col-md-12 ">

                        <div className = "col-md-3"></div>
                        <div className = "col-md-6">
                            <form className="form-signin">
                                <div className="row">
                                    <div className = "col-md-8">
                                        <span className="form-signin-header-title">Reset Password</span>
                                    </div>
                                </div>
                                <p className="form-signin-header-description ">Fill an email to recieve an re-password email</p>
                                <div className="form-signin-header-border"/>
                                <div className="form-group">
                                    <label className="lable-email">Email</label>
                                    <input type="text" className="form-control"  id="email" ref="email" placeholder="Email" required="" />
                                </div>
                                <button className="btn btn-lg btn-success btn-block" type="button" onClick={() => this.forgotpassword()}>Send Email</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ForgotPassword = connect(function (state) {
    return {...state}
})(ForgotPassword);

export default ForgotPassword;