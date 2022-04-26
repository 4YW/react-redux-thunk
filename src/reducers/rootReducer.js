import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { statusReducer } from "./statusReducer";
import {authReducer} from "./authReducer";



export const rootReducer = combineReducers({
    cart: cartReducer,
    status: statusReducer,
    auth: authReducer, 
})