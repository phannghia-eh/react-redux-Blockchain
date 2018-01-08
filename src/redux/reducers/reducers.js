
let default_state = {
    user_email: null,
    user_id: null,
    address: null,
    real_balance: null,
    actual_balance: null,
    transactions:[],
    admin:null,
    statisticalparameters:{
        actual: null,
        real: null,
        totalUser: null,
    },
    listofuseraccounts : [],
    transactionsadmin :[]

};


export default (state = default_state, action) => {
    switch (action.type) {

        case 'UPDATE_USER':
            let user = action.action.user;
            if(!user) {
                return {...state};
            }
            return {...state,
                admin: user.admin,
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

        case 'UPDATE_STATISTICAL_PARAMETERS':
            let statisticalparameters = action.action.statisticalparameters;
            if(!statisticalparameters) {
                return {...state};
            }
            var tmp ={
               actual : statisticalparameters.actual,
                real : statisticalparameters.real,
                totalUser : statisticalparameters.totalUser
            }
            return {...state,
                statisticalparameters : tmp
            };

        case 'LIST_OF_USER_ACCOUNTS':
            let listofuseraccounts = action.action.listofuseraccounts;
            if(!listofuseraccounts) {
                return {...state};
            }
            return {...state,
                listofuseraccounts : listofuseraccounts
            };

        case 'LISTS_AND_INFORMATION_OF_TRANSACTIONS':
            let transactionsadmin = action.action.listsandinformationoftransactions;
            if(!transactionsadmin) {
                return {...state};
            }
            return {...state,
                transactionsadmin : transactionsadmin
            };
        default:
            return state
    }
}