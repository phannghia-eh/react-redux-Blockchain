
const UpdateUser = (user) => ({
    type: 'UPDATE_USER',
    action: {user},
});
const UpdateMoneyAndTransaction = (money_transaction) => ({
    type: 'UPDATE_MONEY_TRANSACTION',
    action: {money_transaction},
});

const UpdateStatisticalparameters = (statisticalparameters) => ({
    type: 'UPDATE_STATISTICAL_PARAMETERS',
    action: {statisticalparameters},
});


const UpdateListofuseraccounts = (listofuseraccounts) => ({
    type: 'LIST_OF_USER_ACCOUNTS',
    action: {listofuseraccounts},
});

const UpdateListsandinformationoftransactions = (listsandinformationoftransactions) => ({
    type: 'LISTS_AND_INFORMATION_OF_TRANSACTIONS',
    action: {listsandinformationoftransactions},
});



export default {
    UpdateUser,
    UpdateMoneyAndTransaction,
    UpdateListofuseraccounts,
    UpdateStatisticalparameters,
    UpdateListsandinformationoftransactions
}