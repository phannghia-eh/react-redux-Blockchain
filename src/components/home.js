import React, { Component } from 'react';
import {connect} from 'react-redux'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class Home extends Component{

    constructor(props) {
        super(props);

        let token = cookies.get('token');
        console.log(token)

    }



    render() {
        if(this.props.user_email){
            return(
                <div>{this.props.user_email}</div>
            )
        }
        return(
            <div>home</div>
        )
    }
}

Home = connect(function (state) {
    return {...state}
})(Home);

export default Home;