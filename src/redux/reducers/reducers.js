
let default_state = {
    user_email: null,
    user_id: null,
    address: null,
    real_balance: null,
    actual_balance: null,
};


export default (state = default_state, action) => {
    switch (action.type) {

        case 'UPDATE_USER':
            let user = action.action.user;
            if(!user) {
                return {...state};
            }
            return {...state,
                user_email: user.user_email,
                user_id: user.user_id ,
                address: user.address,
                real_balance: user.real_balance,
                actual_balance: user.actual_balance
            };
        default:
            return state
    }
}