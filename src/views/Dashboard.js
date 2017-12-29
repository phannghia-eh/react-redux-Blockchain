import React, { Component } from 'react';
import {connect} from 'react-redux'
import Sidebar from '../components/Sidebar/Sidebar';



class Dashboard extends Component{

    render() {

            return(
            <div className="main">
                <div className="top-view">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="title1">BE YOUR OWN BANK</div>
                            <a href="/" className="btn btn-default btn-md button-custom">
                                <span className="glyphicon glyphicon-open"></span> Gửi
                            </a>
                            <a href="/" className="btn btn-default btn-md button-custom">
                                <span class="glyphicon glyphicon-save"></span> Nhận
                            </a>
                        </div>
                        <div className="col-md-4">
                            <div className="title2">
                                <p>Actual Balance: {this.props.actual_balance} KC</p>
                                <p>Real Balance: {this.props.real_balance} KC</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p>
                    Hien thong tin chung
                </p>

             </div>


            )
        }

}

Dashboard = connect(function (state) {
    return {...state}
})(Dashboard);

export default Dashboard;