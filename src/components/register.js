import React, { Component } from 'react';
import {connect} from 'react-redux'
import Config from '../config';
import  $ from "jquery";

class Register extends Component{


    register() {
        if (this.refs.email.value === "" || this.refs.newpassword.value === "" || this.refs.confirmpassword.value === "") {
            alert("Không được có giá trị rỗng");
            return;
        }

        if (this.refs.newpassword.value !== this.refs.confirmpassword.value) {
            alert("Password khác nhau");
            return;
        }

        let urlAuth = Config.url_auth + "register";

        let data = {
            username: this.refs.email.value,
            password: this.refs.newpassword.value,


        };


        $.post(urlAuth, data, function (resauth) {
            console.log(data);
            if (resauth.success === 1) {
                // window.location.assign("/");
                alert("Please check mail!");
            }
            else {
                alert("Register Error");
            }

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
                                        <span className="form-signin-header-title">Create your Wallet</span>
                                    </div>
                                    <div className = "col-md-4 text-right">
                                        <span>or </span>
                                        <a href="/login">Login</a>
                                    </div>
                                </div>
                                <p className="form-signin-header-description ">Sign up for a free wallet below</p>
                                <div className="form-signin-header-border"/>
                                <div className="form-group">
                                    <label className="lable-email">Email</label>
                                    <input type="text" className="form-control" ref="email" placeholder="Email" required="" />
                                </div>
                                <div className="form-group">
                                    <label >New Password</label>
                                    <input type="password" className="form-control" ref="newpassword"  placeholder="New Password" required=""/>
                                </div>
                                <div className="form-group">
                                    <label >Confirm Password</label>
                                    <input type="password" className="form-control" ref="confirmpassword"  placeholder="Confirm Password" required=""/>
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