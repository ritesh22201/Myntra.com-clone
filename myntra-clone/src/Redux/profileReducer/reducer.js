import { ADD_PROFILE_SUCCESS, GET_PROFILE_SUCCESS, PROFILE_REQ, PROFILE_REQ_FAILURE, UPDATE_PROFILE_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    users : [],
    isAdded : false,
    isUpdated : false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case PROFILE_REQ : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                isAdded : false,
                isUpdated : false
            }
        }

        case GET_PROFILE_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                users : payload
            }
        }

        case ADD_PROFILE_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAdded : true
            }
        }

        case UPDATE_PROFILE_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isUpdated : true
            }
        }

        case PROFILE_REQ_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        }

        default : {
            return state;
        }
    }
}