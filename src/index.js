import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Router from './routers';
import Header from './components/header';
import reducer from  './redux/reducers/reducers';

const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(

    <Provider store={store}>
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js"></script>
            <BrowserRouter>
                <div >
                    <Header/>
                    <Router/>
                </div>
            </BrowserRouter>
        </div>
    </Provider>,

    document.getElementById('root'));
    registerServiceWorker();

;
