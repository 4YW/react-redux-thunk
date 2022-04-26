import { startFetch,endFetch,errFetch } from "./statusAction";

import { signIn } from "../data/users";

export const SET_AUTH = 'SET_AUTH';


export function setAuth(user){
    return {
        type: SET_AUTH,
        payload: user,
    }
}


export function fetchAuthAsync(username,password){
    return async function (dispatch){
        try{

            dispatch(startFetch())

            const user = await signIn(username,password)
            if(user){
                dispatch(setAuth(user))
                dispatch(errFetch(''))
                dispatch(endFetch())
            }
        }catch (err){
            dispatch(setAuth(null))
            dispatch(errFetch(err))
            dispatch(endFetch())
        }

    }
}