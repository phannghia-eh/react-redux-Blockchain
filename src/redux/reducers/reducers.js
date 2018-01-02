
let default_state = {
    user_email: null,
    user_id: null,
    address: null,
    real_balance: null,
    actual_balance: null,
    transactions:[]
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
        case 'UPDATE_MONEY_TRANSACTION':
            let money_transaction = action.action.money_transaction;
            if(!money_transaction) {
                return {...state};
            }
            return {...state,
                real_balance: money_transaction.real_balance,
                actual_balance: money_transaction.actual_balance,
                transactions: money_transaction.transactions
            };
        default:
            return state
    }
}