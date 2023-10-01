import axios from "axios";
import { CART_REQ } from "./actionTypes"

export const getCartProducts = () => (dispatch) => {
    dispatch({type : CART_REQ});

    axios.get('https://myntra-clone-backend.onrender.com/cart')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}