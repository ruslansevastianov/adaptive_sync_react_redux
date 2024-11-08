//ActionCreators

export const selectCustomer = customer => {
    return {
        type: 'CUSTOMER_SELECTED',
        payload: customer
    }
}

export const addCustomer = customer => {
    return {
        type: 'CUSTOMER_ADDED',
        payload: customer
    }
}

export const deleteCustomer = customer => {
    return{
        type: 'CUSTOMER_DELETED',
        payload: customer
    }
}

export const selectEditCustomer = customer => {
    return{
        type: 'CUSTOMER_SELECTED_EDIT',
        payload: customer
    }
}

export const editCustomer = customer => {
    return{
        type: 'CUSTOMER_EDIT',
        payload: customer
    }
}





