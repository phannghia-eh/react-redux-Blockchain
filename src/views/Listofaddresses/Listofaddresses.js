import React, { Component } from 'react';
import {connect} from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar';
import '../Listofaddresses/Listofaddresses.css';


class Listofaddresses extends Component{


    render() {
        if(this.props.user_email){
            return(
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <div className="main">
                            <div className="top-view">
                                <div className="title1">LIST OF ADDRESSES</div>
                            </div>

                            <div>
                                <div className="maininfouser">

                                    <div class="form-group ">
                                        <div class="col-sm-12 col-md-6">
                                            <label class="em-400 type-h5">Wallet ID</label>
                                            <p class="alt-font f-16 em-300">
                                                <span>Wallet ID is your unique identifier. It is completely individual to you, and it is what you will use to log in and access your wallet. It is <b>not</b> an address for sending or receiving.</span>
                                                <span>&nbsp;</span>
                                                <span >Do not share your Wallet ID with others.</span>
                                            </p>
                                        </div>
                                        <div class="col-sm-12 col-md-6 addressinfouser">
                                            <label class="em-400 type-h5" >{this.props.address}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

Listofaddresses = connect(function (state) {
    return {...state}
})(Listofaddresses);

export default Listofaddresses;