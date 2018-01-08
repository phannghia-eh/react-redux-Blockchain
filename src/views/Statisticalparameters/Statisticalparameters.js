import React, { Component } from 'react';
import {connect} from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar';
import '../Listofuseraccounts/Listofuseraccounts.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Statisticalparameters extends Component{


    render() {

        var tmp = [{
            actual : this.props.statisticalparameters.actual,
            real : this.props.statisticalparameters.real,
            totalUser : this.props.statisticalparameters.totalUser,
        }]
        if(this.props.user_email){
            return(
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <div className="main">
                            <div className="top-view">
                                <div className="title1">STATISTICAL PARAMETERS</div>
                            </div>

                            <div>
                                <div className="maininfouser">
                                    <BootstrapTable data={tmp}>
                                        <TableHeaderColumn dataField='actual' isKey>Actual Balance</TableHeaderColumn>
                                        <TableHeaderColumn dataField='real'>Real Balance</TableHeaderColumn>
                                        <TableHeaderColumn dataField='totalUser'>Total User</TableHeaderColumn>
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

Statisticalparameters = connect(function (state) {
    return {...state}
})(Statisticalparameters);

export default Statisticalparameters;