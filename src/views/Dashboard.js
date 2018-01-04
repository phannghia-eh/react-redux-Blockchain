import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Modal,ButtonGroup, Button} from 'react-bootstrap'
import Sidebar from '../components/Sidebar/Sidebar';
import Timestamp from 'react-timestamp';
import Cookies from 'universal-cookie';
import  axios from 'axios';
import './Dashboard.css'
import  UtilsUser from '../redux/Utils/utils_user'

const cookies = new Cookies();
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var config = require('../config')


class Dashboard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            showModalGui: false,
            showModalNhan: false,
        };

    }




    closeGui() {
        this.setState({showModalGui: false});
    }

    openGui() {
        this.setState({showModalGui: true});
    }
    closeNhan() {
        this.setState({showModalNhan: false});
    }

    openNhan() {
        this.setState({showModalNhan: true});
    }



    deleteTransaction(transactionId) {
        let urlApi  = config.url_api + 'transaction/'+transactionId;

        var token = cookies.get('token');

        axios.defaults.headers.common['x-access-token'] = token;

        axios.get(urlApi).then(res => {
            console.log(res)
            UtilsUser.updatemoneyandtransaction(this.props.dispatch);
        }).catch((error) => {
            console.log('error: ' + error);
        });

    }


    submitGui(){
        let dstAddress = this.refs.dest_wallet.value;
        let amount     = this.refs.amount.value;
        if (!dstAddress || !amount) {
            alert("Please enter info")
            return
        }

        let urlApi  = config.url_api + 'transaction';
        let data = {
            src_address: this.props.address,
            dst_address: dstAddress,
            amount
        };
        var token = cookies.get('token');

        axios.defaults.headers.common['x-access-token'] = token;
        axios.post(urlApi,data).then(res => {
            console.log(res)
            this.closeGui()
            UtilsUser.updatemoneyandtransaction(this.props.dispatch);

            /*if(res.data.success === true){
                let money_transaction = {
                    real_balance: res.data.data.realBalance,
                    actual_balance: res.data.data.actualBalance,
                    transactions: res.data.data.transactions
                };
                dispatch(ActionUser.UpdateMoneyAndTransaction(money_transaction));
                return
            }else{
                return
            }*/
        }).catch((error) => {
            console.log('error: ' + error);
        });


    }




    renderActions(transactionId) {
        return (
            <div>
                <ButtonGroup className="actions">
                    <button className="actionbtn" title="Delete transaction" onClick={() => this.deleteTransaction(transactionId)}><span className="glyphicon glyphicon glyphicon-trash"></span></button>
                </ButtonGroup>
            </div>
        );
    }


    renderTransactionList() {
        let currentArr = this.props.address;

        return this.props.transactions.map((transaction, index) => {
            let type = transaction.dst_address === currentArr ? 'in' : 'out';
            return (
                <div key={'transaction-' + index} className={index%2 === 0 ?("transaction-item2 col-sm-12 text-center"):("transaction-item1 col-sm-12 text-center")}>

                    <div className="row">
                        <div className="col-sm-2 text-center">
                            <Timestamp className="date" time={transaction.created_at}/>
                            <div className="icon">
                                {type === 'in' ? ("Recieved") : ("Send")}
                            </div>
                        </div>
                        <div className="col-sm-8 ">
                            <div class="row">
                                <div className="col-sm-4 text-center">{transaction.amount} KCoin</div>
                                <div className="col-sm-8 text-center">

                                    <p> {type === 'out' ? ('From: My KCoin Wallet') : ("From: "+ (transaction.src_address === "" ? ("Outlet"):(transaction.src_address)) )}</p>
                                    <p> {type === 'out' ? ('To: '+transaction.dst_address) : ("To: My Kcoin Wallet")}</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
                            <div className="status">{transaction.status}</div>
                            {transaction.status === 'initialization' ? this.renderActions(transaction._id) : null}
                        </div>
                    </div>
                    <div className="border-soild-table"></div>
                </div>

            )
        });
    }

    render() {

        return(
            <div className="main">
                <div className="top-view">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="title1">BE YOUR OWN BANK</div>
                            <a onClick={() => this.openGui()} className="btn btn-default btn-md button-custom">
                                <span className="glyphicon glyphicon-open"></span> Gửi
                            </a>
                            <a  onClick={() => this.openNhan()}  className="btn btn-default btn-md button-custom">
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

                <div>
                    <div className="Transactions col-sm-12">
                        <div className="header col-sm-12">
                            <div className="col-sm-2 text-center">Thời gian</div>
                            <div className="col-sm-8">
                                <div className="col-sm-4 text-center">Số tiền</div>
                                <div className="col-sm-8 text-center">Người nhận</div>
                            </div>
                            <div className="col-sm-2 text-center">Trạng thái</div>
                        </div>
                        {this.renderTransactionList()}
                    </div>

                </div>


                <Modal show={this.state.showModalGui} onHide={() => this.closeGui()}>
                    <Modal.Header >
                        <Modal.Title><span className="glyphicon glyphicon-open"></span> Gửi</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label className="control-label col-sm-2" >Đến</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" ref="dest_wallet" id="dest_wallet" placeholder="Select a destination"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" >Số tiền</label>
                                    <div className="col-sm-3">
                                        <input type="number" className="form-control" ref="amount" id="amount" placeholder="Amount"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" >Mô tả</label>
                                    <div className="col-sm-3">
                                        <input type="textarea" className="form-control" ref="description" id="description" placeholder="Tiền cho thuê"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-default" onClick={() => this.submitGui()}>Submit</button>
                        <Button onClick={() => this.closeGui()}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalNhan} onHide={() => this.closeNhan()}>
                    <Modal.Header >
                        <Modal.Title><span className="glyphicon glyphicon-save"></span> Nhận</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label className="control-label col-sm-2" >Copy and share address</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" value={this.props.address}/>

                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" >Số tiền</label>
                                    <div className="col-sm-3">
                                        <input type="number" className="form-control" ref="amount" id="amount" placeholder="Amount"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" >Mô tả</label>
                                    <div className="col-sm-3">
                                        <input type="textarea" className="form-control" ref="description" id="description" placeholder="Tiền cho thuê"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-default" onClick={() => this.submit()}>Submit</button>
                        <Button onClick={() => this.closeNhan()}>Close</Button>
                    </Modal.Footer>
                </Modal>


            </div>


        )
        }

}

Dashboard = connect(function (state) {
    return {...state}
})(Dashboard);

export default Dashboard;

