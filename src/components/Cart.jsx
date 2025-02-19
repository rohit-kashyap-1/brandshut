import React from 'react'
import CartItem from './CartItem';

export default function Cart() {

    return (
        <div className='container py-5 cart'>
            <div className='row'>
                <div className='col-md-8'>
                    <h4>Your Cart</h4>
                    <div className='cart-items'>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='border p-4 rounded'>
                        <h4>Total: Rs. 400/-</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quo saepe voluptatibus repellat eligendi at. Quos id nostrum vel iusto modi veritatis blanditiis at corrupti, repellat necessitatibus voluptate architecto molestias!</p>
                        <button className='btn btn-warning btn-block w-100'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
