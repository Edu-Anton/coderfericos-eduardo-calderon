import { createStore } from "redux";
import { products } from "../services/getFetch";

const INITIAL_STATE = {
    products
}

export const saludo = 'hola mundo'

export function cartReducer (state = INITIAL_STATE, action) {
    return state
}

export const store = createStore(cartReducer)