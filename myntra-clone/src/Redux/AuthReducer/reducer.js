import { LOADER_FALSE, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isAuth : false,
    isError : false,
    token : ''
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case LOGIN_REQUEST : {
            return {
                ...state,
                isLoading : true
            }
        }

        case LOGIN_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAuth : true,
                token : payload
            }
        }

        case LOGIN_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case LOADER_FALSE : {
            return {
                ...state,
                isLoading : false
            }
        }

        default : {
            return state;
        }
    }
}