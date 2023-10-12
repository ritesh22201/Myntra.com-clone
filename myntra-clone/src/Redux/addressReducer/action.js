import axios from "axios";
import { ADDRESS_FAILURE, ADDRESS_GET_SUCCESS, ADDRESS_REQ, ADD_NEW_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS } from "./actionTypes";
const token = JSON.parse(localStorage.getItem('google-login')) || {};

export const getAddress = () => (dispatch) => {
    dispatch({ type: ADDRESS_REQ });

    return axios.get('https://petal-shining-falcon.glitch.me/address')
        .then(res => {
            console.log(res.data);
            const address = res.data.filter(el => el.userMobile == token?.mobile);
            dispatch({ type: ADDRESS_GET_SUCCESS, payload : address});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADDRESS_FAILURE });
        })
}

export const addAddress = (data) => (dispatch) => {
    dispatch({ type: ADDRESS_REQ });

    return axios.post('https://petal-shining-falcon.glitch.me/address', data)
        .then(res => {
            console.log(res.data);
            dispatch({ type: ADD_NEW_ADDRESS});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADDRESS_FAILURE });
        })
}

export const updateAddress = (data, id) => (dispatch) => {
    dispatch({ type: ADDRESS_REQ });

    return axios.patch(`https://petal-shining-falcon.glitch.me/address/${id}`, data)
        .then(res => {
            console.log(res.data);
            // dispatch({ type: UPDATE_ADDRESS});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADDRESS_FAILURE });
        })
}

export const deleteAddress = (id) => (dispatch) => {
    dispatch({ type: ADDRESS_REQ });

    return axios.delete(`https://petal-shining-falcon.glitch.me/address/${id}`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: DELETE_ADDRESS}); 
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADDRESS_FAILURE });
        })
}