import { ADD_TO_CART,DELETE_CART } from "../actions/cardAction"


const initialState = {
    cart:[]
}

// const type = ['ADD_TO_CARD']

export function cartReducer(state = initialState,action){
    // debugger;
    switch(action.type)
    {
        case ADD_TO_CART:
            let updateCart

            const foundItem = state.cart.find(item=>item.id === action.payload.id)

            if(!foundItem){
                updateCart = [...state.cart,action.payload]
            } else {
                updateCart = state.cart.map(item=>({
                    ...item,
                    quantity:
                        item.id === foundItem.id? item.quantity+1:item.quantity
                }))
            }
            return {...state,
                    cart: updateCart
            }
        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter(item=>item.id!==action.payload)
            }
        default:
            return state;
    }
}