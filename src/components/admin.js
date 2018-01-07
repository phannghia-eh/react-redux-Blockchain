import React, { Component } from 'react';

class Admin extends Component{
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

Admin = connect(function (state) {
    return {...state}
})(Admin);

export default Admin;