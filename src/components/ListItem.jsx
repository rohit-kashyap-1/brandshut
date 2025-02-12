import React from 'react'
import defaultProductItemImage from '../images/product-item.webp'
import AddToCart from './AddToCart'

export default function ListItem({price,discount}) {
    return (
        <div className='list-item border  rounded mb-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={defaultProductItemImage} className='img-fluid h-100' />
                </div>
                <div className='col-md-8'>
                    <div className='list-item-description p-3'>
                        <div>
                            <h5 className='fw-bold' style={{ lineHeight:1.3 }}>iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                            <div className=''>
                                <p><strong>Delivered by tomorrow 1PM</strong></p>
                            </div>
                            <AddToCart />
                            
                        </div>
                        <div className='list-item-pricing'>
                            <h3 className='fw-bold '>Rs. {Math.round(price - ((price/100)*discount))}/-</h3>
                            <span><del className=' text-danger fw-semibold'>Rs.{price}/-</del> <span className='badge bg-danger'>{discount}% Off</span></span>
                            <div className='' style={{ fontSize:13 }}>
                                <i>Inclusive of All Txs</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
