import Cookies from 'universal-cookie';
import ActionUser from '../actions/user';
import jwt_decode from 'jwt-decode';
import  $ from "jquery";
import Config from  '../../config';
import  axios from 'axios';
const cookies = new Cookies();




const  updateuser = function (dispatch) {

    var token = cookies.get('token');

    if(!token)
    {
        dispatch(ActionUser.UpdateUser(null));
        return
    }
    var decoded = jwt_decode(token);


    let user = {
        user_email: decoded.data.email,
        user_id: decoded.data._id,
        address: decoded.data.address,
    };

    if(user.user_email){
        dispatch(ActionUser.UpdateUser(user));
        return
    }
    else{
        dispatch(ActionUser.UpdateUser(null));
        return
    }
};

const  updatemoneyandtransaction = function (dispatch) {

    var token = cookies.get('token');

    if(!token)
    {
        //dispatch(ActionUser.UpdateUser(null));
        return
    }
    var decoded = jwt_decode(token);

    let user = {

        address: decoded.data.address,
    };
    let urlApi = Config.url_api + "dashboard/"+decoded.data.address;

    axios.defaults.headers.common['x-access-token'] = token;

    axios.get(urlApi).then(res => {

        if(res.data.success === true){
            let money_transaction = {
                real_balance: res.data.data.realBalance,
                actual_balance: res.data.data.actualBalance,
                transactions: res.data.data.transactions
            };
            dispatch(ActionUser.UpdateMoneyAndTransaction(money_transaction));
            return
        }else{
            return
        }
    }).catch((error) => {
            console.log('error: ' + error);
    });


}


export default {
    updateuser,
    updatemoneyandtransaction
}