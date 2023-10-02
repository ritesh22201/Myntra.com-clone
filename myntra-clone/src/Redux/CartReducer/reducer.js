import { CART_POST_SUCCESS, CART_REQ, CART_REQ_FAILURE, CART_REQ_SUCCESS, CART_UPDATE_SUCCESS } from "./actionTypes";
const cartData = localStorage.getItem('cart') || [];

const initialState = {
    isLoadingCart : false,
    isError : false,
    isAddedCart : false,
    isUpdated : false,
    cart : cartData ? JSON.parse(cartData) : []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case CART_REQ : {
            return {
                ...state,
                isLoadingCart : true,
                isAddedCart : false,
                isUpdated : false
            }
        }

        case CART_REQ_SUCCESS : {
            return {
                ...state,
                isLoadingCart : false,
                isError : false,
                cart : payload
            }
        }

        case CART_REQ_FAILURE : {
            return {
                ...state,
                isLoadingCart : false,
                isError : true
            }
        }

        case CART_UPDATE_SUCCESS : {
            return {
                ...state,
                isLoadingCart : false,
                isError : false,
                isUpdated : true
            }
        }

        case CART_POST_SUCCESS : {
            return {
                ...state,
                isLoadingCart : false,
                isError : false,
                isAddedCart : true
            }
        }

        default : {
            return state;
        }
    }
}