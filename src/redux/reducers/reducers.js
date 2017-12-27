let default_state = {

};

export default (state = default_state, action) => {
    switch (action.type) {
        case 'UPDATE_TRANSACTIONS':
        case 'UPDATE_WALLETS':
        case 'UPDATE_CURRENT_WALLET':
        default:
            return state
    }
}