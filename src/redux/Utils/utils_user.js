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

const  updatemoney = function (dispatch) {

    var token = cookies.get('token');

    if(!token)
    {
        //dispatch(ActionUser.UpdateUser(null));
        return
    }

console.log(token)
    let urlApi = Config.url_api + "wallet";

    axios.defaults.headers.common['x-access-token'] = token;

    axios.get(urlApi).then(res => {
        console.log(res.data)
        if(res.data.success === true){
            let money = {
                real_balance: res.data.realBalance,
                actual_balance: res.data.actualBalance,
            };
            dispatch(ActionUser.UpdateMoney(money));
            return
        }else{
            return
        }
    }).catch((error) => {
            console.log('error 3 ' + error);
    });


}


export default {
    updateuser,
    updatemoney
}