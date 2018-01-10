import React, { Component } from 'react';
import {connect} from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar';
import '../Listofaddresses/Listofaddresses.css';
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

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
                                    <BootstrapTable data={this.props.listaddress}>
                                        <TableHeaderColumn dataField='address' isKey>Address</TableHeaderColumn>
                                        <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                                        <TableHeaderColumn dataField='actualBalance'>Actual Balance</TableHeaderColumn>
                                        <TableHeaderColumn dataField='realBalance'>Real Balance</TableHeaderColumn>
                                    </BootstrapTable>
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