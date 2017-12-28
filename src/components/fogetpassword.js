import React, { Component } from 'react';
import {connect} from 'react-redux'
import Config from '../config';
import  $ from "jquery";

class Register extends Component{


    forgotpassword() {


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
                                        <span className="form-signin-header-title">Recover password</span>
                                    </div>
                                    <div className = "col-md-4 text-right">
                                    </div>
                                </div>
                                <p className="form-signin-header-description ">Recover password by email</p>
                                <div className="form-signin-header-border"/>
                                <div className="form-group">
                                    <label className="lable-email">Email</label>
                                    <input type="text" className="form-control"  id="email" ref="email" placeholder="Email" required="" />
                                </div>

                                <button className="btn btn-lg btn-success btn-block" type="button" onClick={() => this.forgotpassword()}>Submit</button>
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