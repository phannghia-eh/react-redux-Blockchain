import React, { Component } from 'react';
import {connect} from 'react-redux'

class Home extends Component{

    render() {
        return(
            <div>home</div>
        )
    }
}

Home = connect(function (state) {
    return {...state}
})(Home);

export default Home;