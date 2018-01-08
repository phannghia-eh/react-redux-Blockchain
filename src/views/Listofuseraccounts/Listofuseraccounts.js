import React, { Component } from 'react';
import {connect} from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar';
import '../Listofuseraccounts/Listofuseraccounts.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Listofuseraccounts extends Component{


    render() {
        if(this.props.user_email){
            return(
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <div className="main">
                            <div className="top-view">
                                <div className="title1">LIST OF USER ACCOUNTS</div>
                            </div>

                            <div>
                                <div className="maininfouser">

                                    <BootstrapTable data={this.props.listofuseraccounts}>
                                        <TableHeaderColumn dataField='email' isKey>Email User</TableHeaderColumn>
                                        <TableHeaderColumn dataField='realBalance'>Real Balance</TableHeaderColumn>
                                        <TableHeaderColumn dataField='actualBalance'>Actual Balance</TableHeaderColumn>
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

Listofuseraccounts = connect(function (state) {
    return {...state}
})(Listofuseraccounts);

export default Listofuseraccounts;