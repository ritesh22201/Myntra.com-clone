import { ADD_WISHLIST_PRODUCTS, ADD_WISHLIST_PRODUCTS_FAILURE, ADD_WISHLIST_PRODUCTS_SUCCESS, DELETE_WISHLIST_PRODUCTS, GET_WISHLIST_PRODUCTS, PRODUCT_FAILURE, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes";
import axios from 'axios';

export const getProductsMen = (setTotalCount, page, obj) => (dispatch) => {
    dispatch({ type: PRODUCT_REQ });
    axios.get(`https://myntra-clone-backend.onrender.com/products?_limit=14&_page=${page}`, obj)
        .then(res => {
            setTotalCount(res.headers['x-total-count']);
            dispatch({ type: PRODUCT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: PRODUCT_FAILURE });
        })
}

export const getProductsSingleMen = (setSingleData, id, value = '') => {

    axios.get(`https://myntra-clone-backend.onrender.com/products/${id}`).then((res) => {
        // console.log(res.data)
        setSingleData(res.data)
    }).catch((err) => {
        console.log(err);
    })
}

export const addwishList = (products) => (dispatch) => {
    dispatch({ type: ADD_WISHLIST_PRODUCTS_SUCCESS })

    axios.post("https://myntra-clone-backend.onrender.com/wishlist", products).then((res) => {
        dispatch({ type: ADD_WISHLIST_PRODUCTS })
    }).catch((err) => {
        dispatch({ type: ADD_WISHLIST_PRODUCTS_FAILURE })
    })
}

export const getwishlistproducts = () => (dispatch) => {
    return axios.get("https://myntra-clone-backend.onrender.com/wishlist").then((res) => {
        // console.log(res)
        dispatch({ type: GET_WISHLIST_PRODUCTS, payload: res.data })
    }).catch((err) => {
        console.log(err)
    })
}

export const deleteWishlist = (id) => (dispatch) => {
    dispatch({ type: PRODUCT_REQ })
    axios.delete(`https://myntra-clone-backend.onrender.com/wishlist/${id}`).then((res) => {
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
    axios.get(`https://myntra-clone-backend.onrender.com/products?q=${query}&_limit=14`).then((res) => {
        dispatch({ type: PRODUCT_SUCCESS, payload: res.data })
    }).catch(() => {
        dispatch({ type: PRODUCT_FAILURE })
    })
}
