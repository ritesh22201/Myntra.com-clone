import { PRODUCT_FAILURE, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes";
import axios from 'axios';

export const getProductsMen = (setTotalCount, page, obj) => (dispatch) => {
    dispatch({ type: PRODUCT_REQ });
    axios.get(`https://tense-bull-wrap.cyclic.app/products?_limit=14&_page=${page}`, obj)
        .then(res => {
            setTotalCount(res.headers['x-total-count']);
            dispatch({ type: PRODUCT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: PRODUCT_FAILURE });
        })
}

export const getProductsSingleMen = (setsingleData, id, value) => {

    axios.get(`https://rich-gold-boa-fez.cyclic.app/products/${id}`).then((res) => {
        // console.log(res.data)
        setsingleData(res.data)

    }).catch(() => {

    })
}