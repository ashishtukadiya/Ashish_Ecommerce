//FOR ADDING ITEM IN CART
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product,
    }
}

//FOR DELETING ITEM FROM CART
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product,
    }
}