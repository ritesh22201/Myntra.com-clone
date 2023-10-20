import axios from "axios";
import { ADD_PROFILE_SUCCESS, GET_PROFILE_SUCCESS, PROFILE_REQ, PROFILE_REQ_FAILURE, UPDATE_PROFILE_SUCCESS } from "./actionTypes";

const token = JSON.parse(localStorage.getItem('google-login')) || {};

export const getProfile = () => (dispatch) => {
    dispatch({ type: PROFILE_REQ });
    axios.get(`https://petal-shining-falcon.glitch.me/users`)
        .then(res => {
            const userProfile = res.data?.filter(el => el?.mobile === token?.mobile);
            dispatch({ type: GET_PROFILE_SUCCESS, payload: userProfile })
        })
        .catch(err => {
            dispatch({ type: PROFILE_REQ_FAILURE });
        })
}

export const addUserProfile = (payload) => (dispatch) => {
    dispatch({ type: PROFILE_REQ });
    return axios.post(`https://petal-shining-falcon.glitch.me/users`, payload)
        .then(res => {
            dispatch({ type: ADD_PROFILE_SUCCESS })
        })
        .catch(err => {
            dispatch({ type: PROFILE_REQ_FAILURE });
        })
}

export const updateProfile = (id, payload) => (dispatch) => {
    dispatch({ type: PROFILE_REQ });
    return axios.put(`https://petal-shining-falcon.glitch.me/users/${id}`, payload)
        .then(res => {
            dispatch({ type: UPDATE_PROFILE_SUCCESS });
        })
        .catch(err => {
            dispatch({ type: PROFILE_REQ_FAILURE });
        })
}

