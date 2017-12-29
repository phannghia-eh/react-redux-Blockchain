import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../index.css';

class Sidebar extends Component{
    constructor(props){
        super(props);

        }


    render(){

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
                        <a href="/">
                            <span class="glyphicon glyphicon-certificate"></span> K Coin
                        </a>
                    </li>
                </ul>
                <div className="border-soild"></div>
                <ul className="nav">
                    <li>
                        <a href="/">
                            <span class="glyphicon glyphicon-cog"></span> Setting
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
