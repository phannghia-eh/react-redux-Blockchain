
const UpdateUser = (user) => ({
    type: 'UPDATE_USER',
    action: {user},
});
const UpdateMoney = (money) => ({
    type: 'UPDATE_MONEY',
    action: {money},
});


export default {UpdateUser,UpdateMoney}