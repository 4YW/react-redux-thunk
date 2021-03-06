import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../actions/cardAction';

export default function Cart() {
  const cart = useSelector(state=> state.cart.cart);
  const dispatch = useDispatch();
  return <div className='cart'>
    <div className='cart-body'>
      <h4>Title</h4>
      <h4>Price</h4>
      <h4>Quantity</h4>
      <h4>Amount</h4>
      <h4>Delete</h4>
    </div>
    {cart.length === 0 ? <p>Cart is empty</p> : cart.map(item=>{
      return <div className='cart-body' key={item.id}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.price*item.quantity}</p>
              <p style={{cursor: 'pointer'}} onClick={()=>dispatch(deleteCart(item.id))}>X</p>
            </div>
    })}
    
  </div>
}
