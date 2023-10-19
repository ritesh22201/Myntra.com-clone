import { ADD_WISHLIST_PRODUCTS, ADD_WISHLIST_PRODUCTS_FAILURE, ADD_WISHLIST_PRODUCTS_SUCCESS, DELETE_WISHLIST_PRODUCTS, GET_WISHLIST_PRODUCTS, PRODUCT_FAILURE, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes";
import axios from 'axios';

const token = JSON.parse(localStorage.getItem('google-login')) || {};

export const getProductsMen = (setTotalCount, page, obj, sortBy='', orderBy='', setLoading) => (dispatch) => {
    dispatch({ type: PRODUCT_REQ });
    setLoading(true);
    axios.get(`https://petal-shining-falcon.glitch.me/products?_sort=${sortBy}&_order=${orderBy}&_limit=14&_page=${page}`, obj)
        .then(res => {
            setTotalCount(res.headers['x-total-count']);
            dispatch({ type: PRODUCT_SUCCESS, payload: res.data })
            setLoading(false);
        })
        .catch(err => {
            dispatch({ type: PRODUCT_FAILURE });
            setLoading(false);
        })
}

export const getProductsSingleMen = (setSingleData, id, value = '') => {
    axios.get(`https://petal-shining-falcon.glitch.me/products/${id}`).then((res) => {
        // console.log(res.data)
        setSingleData(res.data)
    }).catch((err) => {
        // console.log(err);
    })
}

export const addwishList = (products, setLoading = false) => (dispatch) => {
    dispatch({ type: ADD_WISHLIST_PRODUCTS_SUCCESS })
    setLoading(true);
    return axios.post("https://petal-shining-falcon.glitch.me/wishlist", products).then((res) => {
        dispatch({ type: ADD_WISHLIST_PRODUCTS })
        setLoading(false);
    }).catch((err) => {
        dispatch({ type: ADD_WISHLIST_PRODUCTS_FAILURE })
        setLoading(false);
    })
}

export const getwishlistproducts = () => (dispatch) => {
    return axios.get("https://petal-shining-falcon.glitch.me/wishlist").then((res) => {
        // console.log(res.data)
        const products = res.data.filter(el => el.mobile == token?.mobile);
        dispatch({ type: GET_WISHLIST_PRODUCTS, payload: products });
    }).catch((err) => {
        console.log(err)
    })
}

export const deleteWishlist = (id) => (dispatch) => {
    dispatch({ type: PRODUCT_REQ })
    return axios.delete(`https://petal-shining-falcon.glitch.me/wishlist/${id}`).then((res) => {
        // console.log(res)
        dispatch({ type: DELETE_WISHLIST_PRODUCTS })
    }).catch((err) => {
        console.log(err)
        dispatch({ type: PRODUCT_FAILURE })
    })
}

export const getSearchProducts = (query) => (dispatch) => {
    // console.log(page)
    dispatch({ type: PRODUCT_REQ })
    axios.get(`https://petal-shining-falcon.glitch.me/products?q=${query}&_limit=14`).then((res) => {
        dispatch({ type: PRODUCT_SUCCESS, payload: res.data })
    }).catch(() => {
        dispatch({ type: PRODUCT_FAILURE })
    })
}
