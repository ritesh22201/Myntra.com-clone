import axios from "axios";
import { ADD_ORDER_SUCCESS, ORDER_REQ, ORDER_REQ_FAILURE, ORDER_REQ_SUCCESS, UPDATE_ORDER_SUCCESS } from "./actionTypes";
const token = JSON.parse(localStorage.getItem('google-login')) || {};

export const getOrders = (setTotalCount, page) => (dispatch) => {
    dispatch({ type: ORDER_REQ });

    axios.get(`https://petal-shining-falcon.glitch.me/orders?_sort=orderedAt&_order=desc&_limit=3&_page=${page}`)
        .then(res => {
            // console.log(res.data);
            const orders = res.data.filter(el => el.mobile == token?.mobile);
            setTotalCount(orders.length);
            dispatch({ type: ORDER_REQ_SUCCESS, payload : orders });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: ORDER_REQ_FAILURE });
        })
}

export const addOrders = (payload) => (dispatch) => {
    dispatch({ type: ORDER_REQ });

    return axios.post('https://petal-shining-falcon.glitch.me/orders', payload)
        .then(res => {
            // console.log(res.data);
            dispatch({ type: ADD_ORDER_SUCCESS });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: ORDER_REQ_FAILURE });
        })
}

export const updateOrders = (payload, id) => (dispatch) => {
    dispatch({ type: ORDER_REQ });

    axios.patch(`https://petal-shining-falcon.glitch.me/orders/${id}`, payload)
        .then(res => {
            // console.log(res.data);
            dispatch({ type: UPDATE_ORDER_SUCCESS });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: ORDER_REQ_FAILURE });
        })
}