import { combineReducers } from "redux";
import { v4 as uuidv4, v4 } from 'uuid';


const transactionsList = [
    { firstName: 'James', secondName: 'Smith', type: 'A', status: 'active', amount: 1570, id: `${v4()}` },
    { firstName: 'Robert', secondName: 'Brown', type: 'C', status: 'remove', amount: 547, id: `${v4()}` },
    { firstName: 'Charlie', secondName: 'Miller', type: 'D', status: 'seldom', amount: 652, id: `${v4()}` },
    { firstName: 'Thomas', secondName: 'Johnson', type: 'B', status: 'remove', amount: 2470, id: `${v4()}` },
    { firstName: 'William', secondName: 'Jones', type: 'D', status: 'active', amount: 4840, id: `${v4()}` },
    { firstName: 'Damian', secondName: 'Davis', type: 'A', status: 'active', amount: 1360, id: `${v4()}` },
    { firstName: 'Liam', secondName: 'Jamesen', type: 'C', status: 'seldom', amount: 1550, id: `${v4()}` },
    { firstName: 'Michael', secondName: 'Georgeer', type: 'A', status: 'remove', amount: 1910, id: `${v4()}` },
    { firstName: 'David', secondName: 'Henryet', type: 'B', status: 'seldom', amount: 2540, id: `${v4()}` },
    { firstName: 'Joe', secondName: 'Thomasis', type: 'A', status: 'active', amount: 950, id: `${v4()}` }
]


const transactionsReducer = (transactions = transactionsList, action) => {
    if(action.type === 'CUSTOMER_ADDED'){
        return [ ...transactions, action.payload ];
    } else if(action.type === 'CUSTOMER_DELETED'){
        return transactions.filter((item)=> item.id !== action.payload.id)
    } else if(action.type === 'CUSTOMER_EDIT'){
        return transactions.map((item)=>{
            if(item.id === action.payload.id){
                return{ ...action.payload }
            }
            return item;
        })
    }
    return transactions;
}

// Для Компонента <CustomerInfo> выбранный клиент для предоствления информации
const selectedCustomerReducer = (selectedCustomer = null, action) => {
    if(action.type === 'CUSTOMER_SELECTED'){
        return action.payload;
    }
    return selectedCustomer;
} 

// выбранный клиент для дальнейшего редактирования
const selectEditCustomerReducer = (selectEditCustomer = { firstName: '', secondName: '', type: '', status: '', amount: null, id: null }, action) =>{
    if(action.type === 'CUSTOMER_SELECTED_EDIT'){
        return action.payload;
    }
    return selectEditCustomer;
}




export default combineReducers({
    transactionsList: transactionsReducer,
    selectedCustomer: selectedCustomerReducer,
    selectEditCustomer: selectEditCustomerReducer // выносим в Глобальное состояние выбранного клиента для редактирования, чтобы клиент был доступен в Компоненте CustomEdit для дальнейшего редактирования
})

