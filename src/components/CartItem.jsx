import React, { useState } from 'react'
import defaultProductItemImage from '../images/product-item.webp'
import AddToCart from './AddToCart'
import trashboxIcon from '../images/trash-2.svg'
export default function CartItem() {
    let [qty, setQty] = useState(1)
    let price = 14500; let discount = 14
    //
    return (
        <div>

            <div className='cart-item'>
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={defaultProductItemImage} className='img-fluid h-100' />
                    </div>
                    <div className='col-md-8'>
                        <div className='list-item-description p-3'>
                            <div>
                                <h6 className='fw-bold' style={{ lineHeight: 1.3 }}>iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score</h6>
                                <div className='qty-btns'>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                    </button>
                                    <button onClick={() => { setQty((qty > 1) ? --qty : 1) }}>-</button>
                                    <span>{qty}</span>
                                    <button onClick={() => { setQty(++qty) }}>+</button>

                                </div>
                            </div>
                            <div className='list-item-pricing'>
                                <p className=' '>Rs. {Math.round(price - ((price / 100) * discount))}/-</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
