
const UpdateUser = (user) => ({
    type: 'UPDATE_USER',
    action: {user},
});
const UpdateMoneyAndTransaction = (money_transaction) => ({
    type: 'UPDATE_MONEY_TRANSACTION',
    action: {money_transaction},
});


export default {UpdateUser,UpdateMoneyAndTransaction}