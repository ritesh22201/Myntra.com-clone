import axios from "axios";
import { CART_DELETE_SUCCESS, CART_POST_SUCCESS, CART_REQ, CART_REQ_FAILURE, CART_REQ_SUCCESS, CART_UPDATE_SUCCESS } from "./actionTypes"

export const getCartProducts = () => (dispatch) => {
    dispatch({ type: CART_REQ });

    return axios.get('https://myntra-clone-backend.onrender.com/cart')
        .then(res => {
            console.log(res.data);
            dispatch({ type: CART_REQ_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: CART_REQ_FAILURE });
        })
}

export const addProductToCart = (data, setCartLoading) => (dispatch) => {
    dispatch({ type: CART_REQ });
    setCartLoading(true);
    return axios.post('https://myntra-clone-backend.onrender.com/cart', data)
        .then(res => {
            console.log(res.data);
            dispatch({ type: CART_POST_SUCCESS });
            setCartLoading(false);
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: CART_REQ_FAILURE });
            setCartLoading(false);
        })
}

export const updateDetails = (data, itemId) => (dispatch) => {
    dispatch({ type: CART_REQ });

    return axios.patch(`https://myntra-clone-backend.onrender.com/cart/${itemId}`, data)
        .then(res => {
            console.log(res.data);
            dispatch({ type: CART_UPDATE_SUCCESS });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: CART_REQ_FAILURE });
        })
}

export const deleteCartProduct = (id) => (dispatch) => {
    dispatch({ type: CART_REQ });

    return axios.delete(`https://myntra-clone-backend.onrender.com/cart/${id}`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: CART_DELETE_SUCCESS });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: CART_REQ_FAILURE });
        })
}