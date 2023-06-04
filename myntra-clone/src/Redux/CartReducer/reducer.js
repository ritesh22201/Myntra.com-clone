import { CART_POST_SUCCESS, CART_REQ, CART_REQ_FAILURE, CART_REQ_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    cart : []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case CART_REQ : {
            return {
                ...state,
                isLoading : true
            }
        }

        case CART_REQ_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                cart : payload
            }
        }

        case CART_REQ_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case CART_POST_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                cart : [...state.cart, payload]
            }
        }

        default : {
            return state;
        }
    }
}