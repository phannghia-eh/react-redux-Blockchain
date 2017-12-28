import Cookies from 'universal-cookie';
import ActionUser from '../actions/user';
import jwt_decode from 'jwt-decode';

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
    };

    if(user.user_email){
        dispatch(ActionUser.UpdateUser(user));
        return
    }
    else{
        dispatch(ActionUser.UpdateUser(null));
        return
    }
}
export default {
    updateuser,
}