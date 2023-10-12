import { ADD_ORDER_SUCCESS, ORDER_REQ, ORDER_REQ_FAILURE, ORDER_REQ_SUCCESS, UPDATE_ORDER_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    orders : [],
    isAdded : false,
    isUpdated : false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case ORDER_REQ : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                isAdded : false,
                isUpdated : false
            }
        }

        case ORDER_REQ_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                orders : payload
            }
        }

        case ADD_ORDER_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAdded : true
            }
        }

        case UPDATE_ORDER_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isUpdated : true
            }
        }

        case ORDER_REQ_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        default : {
            return state;
        }
    }
}