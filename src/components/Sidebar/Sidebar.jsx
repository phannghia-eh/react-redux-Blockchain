import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../index.css';

class Sidebar extends Component{
    constructor(props){
        super(props);

        }


    render(){

        if(this.props.admin == true) {
            return (
                <div className="sidenav">
                    <ul className="nav">
                        <li>
                            <a href="/">
                                <span class="glyphicon glyphicon-dashboard"></span> DASHBOARD
                            </a>
                        </li>
                    </ul>
                    <div className="border-soild"></div>
                    <ul className="nav">
                        <li>
                            <a href="/infouser">
                                <span class="glyphicon glyphicon-cog"></span> Info User
                            </a>
                        </li>
                    </ul>
                    <div className="border-soild"></div>
                    <ul className="nav">
                        <li>
                            <a href="/admin/statisticalparameters">
                                <span class="glyphicon glyphicon-cog"></span> Statistical parameters
                            </a>
                        </li>
                    </ul>
                    <div className="border-soild"></div>
                    <ul className="nav">
                        <li>
                            <a href="/admin/listofuseraccounts">
                                <span class="glyphicon glyphicon-cog"></span>List of user accounts
                            </a>
                        </li>
                    </ul>
                    <div className="border-soild"></div>
                    <ul className="nav">
                        <li>
                            <a href="/admin/listsandinformationoftransactions">
                                <span class="glyphicon glyphicon-cog"></span>Lists and information of transactions
                            </a>
                        </li>
                    </ul>
                    <div className="border-soild"></div>
                    <ul className="nav">
                        <li>
                            <a href="/admin/listofaddresses">
                                <span class="glyphicon glyphicon-cog"></span>List of addresses
                            </a>
                        </li>
                    </ul>


                </div>

            )

        }
        return (
            <div className="sidenav">
                <ul className="nav">
                    <li>
                        <a href="/">
                            <span class="glyphicon glyphicon-dashboard"></span> DASHBOARD
                        </a>
                    </li>
                </ul>
                <div className="border-soild"></div>
                <ul className="nav">
                    <li>
                        <a href="/infouser">
                            <span class="glyphicon glyphicon-cog"></span> Info User
                        </a>
                    </li>
                </ul>

            </div>

        )


    }
}
Sidebar = connect(function (state) {
    return {...state}
})(Sidebar);

export default Sidebar;
