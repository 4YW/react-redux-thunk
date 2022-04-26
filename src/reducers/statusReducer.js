import { FETCH_END, FETCH_ERR, FETCH_START } from "../actions/statusAction"

const initialState = {
    loading: false,
    error:''
}


export function statusReducer(state = initialState,action){
    if(action.type === FETCH_START){
        return {
            ...state,
            loading:true
        }
    }
    else if (action.type === FETCH_END){
        return {
            ...state,
            loading:false
        }
    }
    else if (action.type === FETCH_ERR){
        return {
            ...state,
            error: action.payload
        }
    }
    else return state
}