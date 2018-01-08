import React, { Component } from 'react';
import {connect} from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar';
import '../Listsandinformationoftransactions/Listsandinformationoftransactions.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Listsandinformationoftransactions extends Component{


    render() {
        if(this.props.user_email){
            return(
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <div className="main">
                            <div className="top-view">
                                <div className="title1">LISTS AND INFORMATION OF TRANSACTIONS</div>
                            </div>

                            <div>
                                <div className="maininfouser">

                                    <BootstrapTable data={this.props.transactionsadmin}>
                                        <TableHeaderColumn dataField='src_address' isKey>From</TableHeaderColumn>
                                        <TableHeaderColumn dataField='dst_address'>To</TableHeaderColumn>
                                        <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
                                        <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
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

Listsandinformationoftransactions = connect(function (state) {
    return {...state}
})(Listsandinformationoftransactions);

export default Listsandinformationoftransactions;