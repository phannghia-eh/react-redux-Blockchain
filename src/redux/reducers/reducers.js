
let default_state = {
    user_email: null,
    user_id: null,
};


export default (state = default_state, action) => {
    switch (action.type) {

        case 'UPDATE_USER':
            let user = action.action.user;
            if(!user) {
                return {...state};
            }
            return {...state, user_email: user.user_email, user_id: user.user_id};
        default:
            return state
    }
}