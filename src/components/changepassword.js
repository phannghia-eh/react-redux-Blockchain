import React, { Component } from 'react';
import {connect} from 'react-redux'
import Config from '../config';
import  $ from "jquery";

class Changepassword extends Component{

    componentWillMount(){
        console.log(this.props.code)
    }

    changepassword() {
        if (this.refs.newpassword.value === "") {
            alert("New password field can not empty");
            return;
        }
        if(this.refs.confirmpassword.value === ""){
            alert("Ret-type new password field can not empty")
            return
        }

        if (this.refs.newpassword.value !== this.refs.confirmpassword.value) {
            alert("Password different");
            return;
        }

        let changePasswordURL = Config.url_auth + "changepassword";
            changePasswordURL = Config.url_auth + "changepassword/" + this.props.code;

        let data = {
            password: this.refs.newpassword.value
        }
        console.log(changePasswordURL)
        $.post(changePasswordURL, data, (res, err) => {
            if(res.success)
                alert(res.message)
            else
                alert(res.message)
        })
    }
    render(){
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
                                <p className="form-signin-header-description ">Change your password</p>
                                <div className="form-signin-header-border"/>
                                <div className="form-group">
                                    <label >New Password</label>
                                    <input type="password" className="form-control" id="newpassword" ref="newpassword"  placeholder="New Password" required=""/>
                                </div>
                                <div className="form-group">
                                    <label >Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmpassword"  ref="confirmpassword"  placeholder="Confirm Password" required=""/>
                                </div>
                                <button className="btn btn-lg btn-success btn-block" type="button" onClick={() => this.changepassword()}>Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Changepassword = connect(function (state) {
    return {...state}
})(Changepassword);

export default Changepassword;