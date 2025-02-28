import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

//useDispatch:

export default function AddToCart() {
  const cart = useSelector((state)=>state.cart.value)
  //state: []
  const dispatch = useDispatch()
  return (
    <>
      <button className='btn btn-warning' onClick={()=>{dispatch(addToCart({id:1,title:'demo product'}))}}>Add To Cart</button>
    </>
  )
}
