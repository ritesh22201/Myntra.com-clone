import { ADDRESS_FAILURE, ADDRESS_GET_SUCCESS, ADDRESS_REQ, ADD_NEW_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError : false,
    isAdded : false,
    isUpdated : false,
    isDeleted : false,
    addressData : []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case ADDRESS_REQ : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                isAdded : false,
                isUpdated : false,
                isDeleted : false
            }
        }

        case ADDRESS_GET_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                addressData : payload
            }
        }

        case ADDRESS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isAdded : false,
                isUpdated : false
            }
        }

        case ADD_NEW_ADDRESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAdded : true,
                isUpdated : false,
            }
        }

        case UPDATE_ADDRESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAdded : false,
                isUpdated : true
            }
        }

        case DELETE_ADDRESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAdded : false,
                isUpdated : false,
                isDeleted : true,
            }
        }

        default : {
            return state
        }
    }
}