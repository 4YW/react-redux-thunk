import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {useHistory} from 'react-router-dom'
import {  addToCart } from '../actions/cardAction'
export default function Item({product}) {
  const dispatch = useDispatch();
  // const history = useHistory();
  // const {user} = useSelector(state=>state.auth)
  // function handlerAddtoCart(){
  //   if(!user){
  //     history.push('/cart')
  //   }else{
  //     dispatch(addToCart({...product, quantity: 1}))
  //   }
  // }

  return (
    <div className='product' >
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <button onClick={()=>dispatch(addToCart({...product, quantity: 1}))}> Add To Cart</button>
      </div>
  )
}
