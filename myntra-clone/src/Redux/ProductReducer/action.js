import { PRODUCT_FAILURE, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes";
import axios from 'axios';

export const getProductsMen = (setTotalCount, page) => (dispatch) => {
    dispatch({type : PRODUCT_REQ});
    axios.get(`https://tense-bull-wrap.cyclic.app/men?_limit=14&_page=${page}`)
    .then(res => {
        setTotalCount(res.headers['x-total-count']);
        dispatch({type : PRODUCT_SUCCESS, payload : res.data})
    })
    .catch(err => {
        dispatch({type : PRODUCT_FAILURE});
    })
}