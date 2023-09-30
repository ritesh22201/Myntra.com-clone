import { ADD_WISHLIST_PRODUCTS, ADD_WISHLIST_PRODUCTS_FAILURE, ADD_WISHLIST_PRODUCTS_SUCCESS, DELETE_WISHLIST_PRODUCTS, GET_WISHLIST_PRODUCTS, PRODUCT_FAILURE, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    isAdded: false,
    products: [],
    men: [],
    women: [],
    wishlist: [],
    isDeleted: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case PRODUCT_REQ: {
            return {
                ...state,
                isLoading: true
            }
        }

        case PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                men: payload
            }
        }

        case GET_WISHLIST_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                wishlist: payload
            }
        }

        case ADD_WISHLIST_PRODUCTS_SUCCESS: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAdded: false
            }
        }

        case ADD_WISHLIST_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAdded: true
            }
        }
        case ADD_WISHLIST_PRODUCTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAdded: false
            }
        }
        case DELETE_WISHLIST_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isDeleted: true
            }
        }

        case PRODUCT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        default: {
            return state;
        }
    }
}