import { ADD_TO_CART, REMOVE_TO_CART } from "./constants";

export function addToCart(params) {
    return {
        type:ADD_TO_CART,
        data:params
    }
}

export function removeToCart(params) {
    return {
        type:REMOVE_TO_CART,
        data:params
    }
}