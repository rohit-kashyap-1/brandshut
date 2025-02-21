import React, { useState } from 'react'
import styles from './checkout.module.css'
import productImage from '../images/product-1.jpg'
import checked from '../images/check-circle.svg'

export default function OrderSuccess() {
    
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='form'>
                        <div className=' border p-3 mb-4'>
                            <div className='row mb-3'>
                                <div className='col-md-2'>
                                    <img src={productImage} className='img-fluid' />
                                </div>
                                <div className='col-md-8'>
                                    <h5>INOVERA (LABEL)Women's Vegan Leather Tri-fold Fashion Card Coin Holder Small Wallet (KK29)</h5>
                                    <h4>Rs.314/-</h4>
                                </div>
                            </div>
                        </div>
                        <img src={checked} />
                        <h3 className='text-success'>Order Successful</h3>
                        <p className='text-success'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ut numquam nam fugit quasi veniam aperiam voluptas, voluptates natus repellendus nulla velit laudantium similique eveniet odio porro hic enim temporibus!</p>
                        <p><strong>Order will be delivered Tomorrow between 10-12 PM</strong></p>
                        <a href='' className='btn btn-warning'>Continue</a>
                        
                    </div>
                </div>
                <div className='col-md-4'>
                   
                </div>
            </div>
            
        </div>
    )
}
