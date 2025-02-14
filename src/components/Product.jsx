import React, { useState } from 'react'
import product_image from '../images/product.jpg'
import product_1 from '../images/product-1.jpg'
import product_2 from '../images/product-2.jpg'
import product_3 from '../images/product-3.jpg'
import product_4 from '../images/product-4.webp'
import product_5 from '../images/product-5.webp'
import RelatedProducts from './RelatedProducts'


export default function Product() {
    const [current_image, setCurrentImage] = useState(product_image)

    const makeActive = (e) => {
        const a = document.querySelectorAll(".knf")
        a.forEach(function (item) { item.classList.remove('border-dark') })

        e.target.classList.remove('border-muted')
        e.target.classList.add('border-dark')



    }

    return (
        <div className='text-black'>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='sticky-top'>
                                <img src={current_image} className='img-fluid' style={{ width: '100%', height: '500px', objectFit: 'contain' }} />
                                <hr></hr>
                                <div className='row'>
                                    <div className='col'>
                                        <img src={product_image} className='knf img-fluid border p-2 border-dark  h-100' onClick={(e) => { setCurrentImage(e.target.src); makeActive(e); }} />
                                    </div>
                                    <div className='col'>
                                        <img src={product_2} className=' knf img-fluid  border p-2 border-muted  h-100' onClick={(e) => { setCurrentImage(e.target.src); makeActive(e); }} />
                                    </div>
                                    <div className='col'>
                                        <img src={product_3} className='knf img-fluid  border p-2 border-muted h-100' onClick={(e) => { setCurrentImage(e.target.src); makeActive(e); }} />
                                    </div>
                                    <div className='col'>
                                        <img src={product_4} className=' knf img-fluid  border p-2 border-muted  h-100' onClick={(e) => { setCurrentImage(e.target.src); makeActive(e); }} />
                                    </div>
                                    <div className='col'>
                                        <img src={product_5} className=' knf img-fluid  border p-2 border-muted  h-100' onClick={(e) => { setCurrentImage(e.target.src); makeActive(e); }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className=''>
                                <h1 className='display-6 text-black fw-bold'>INOVERA (LABEL)Women's Vegan Leather Tri-fold Fashion Card Coin Holder Small Wallet (KK29)</h1>
                                <h2 className='h1 text-black mt-4'>&#8377; <del className='text-danger'>650</del> <span>549</span></h2>
                                <p>80% Off on your first purchage</p>
                                <hr />
                                <h4>Product details</h4>
                                <table className='table' style={{ maxWidth: 400 }}>
                                    <tr>
                                        <th>Care instructions</th>
                                        <td>Dry Cloth Clean</td>
                                    </tr>
                                    <tr>
                                        <th>Outer material</th>
                                        <td>Polyurethane</td>
                                    </tr>
                                    <tr>
                                        <th>Inner material</th>
                                        <td>Nylon</td>
                                    </tr>
                                    <tr>
                                        <th>Closure type</th>
                                        <td>Magnetic</td>
                                    </tr>
                                    <tr>
                                        <th>Country of Origin</th>
                                        <td>China</td>
                                    </tr>
                                </table>
                                <hr></hr>
                                <h4>About this item</h4>
                                <ul>
                                    <li>Number of Compartment: 3 Cash compartment, Style: Tri-Fold Wallet</li>
                                    <li>Number of Card Slot: 6 card slot, 1 photo holder, 3 cash compartments, 1 zipper coin pocket</li>
                                    <li>Material: Vegan Leather, Color: Rose Gold, Dimension: 11.5 cm x 3 cm x 10 cm, Comfortable size for you to simply hold it on hand as a clutch wallet or easy put it in a bag.</li>
                                    <li>Special Features: Enough room to carry your credit cards, ID card, bank card, business card, cash, coins in this wallet.</li>
                                    <li>Package Include: 1 x Ladies Large Tri-fold Wallet</li>
                                    <li>🚩 DISCLAIMER: 🚩 WE HIGHLY RECOMMEND TO CHECK THE PRODUCT SIZE CHART IN 2ND IMAGE BEFORE PURCHASE TO AVOID MISCONCEPTION REGARDING THE PRODUCT SIZE. PRODUCT COLOUR MAY SLIGHTLY VARY DUE TO PHOTOGRAPHIC LIGHTING SOURCES OR YOUR MONITOR SETTINGS.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <h3>Additional Details</h3>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Attribute</th>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Product Dimensions</td>
                                <td>11.5 x 3 x 10 cm; 120 g</td>
                            </tr>
                            <tr>
                                <td>Date First Available</td>
                                <td>10 May 2021</td>
                            </tr>
                            <tr>
                                <td>Manufacturer</td>
                                <td>Panda Exim</td>
                            </tr>
                            <tr>
                                <td>ASIN</td>
                                <td>B094ZRCW4D</td>
                            </tr>
                            <tr>
                                <td>Item Part Number</td>
                                <td>KK29</td>
                            </tr>
                            <tr>
                                <td>Country of Origin</td>
                                <td>China</td>
                            </tr>
                            <tr>
                                <td>Department</td>
                                <td>Women</td>
                            </tr>
                            <tr>
                                <td>Packer</td>
                                <td>Opus Retail</td>
                            </tr>
                            <tr>
                                <td>Importer</td>
                                <td>Panda Exim</td>
                            </tr>
                            <tr>
                                <td>Item Weight</td>
                                <td>120 g</td>
                            </tr>
                            <tr>
                                <td>Item Dimensions LxWxH</td>
                                <td>11.5 x 3 x 10 Centimeters</td>
                            </tr>
                            <tr>
                                <td>Net Quantity</td>
                                <td>1.00 count</td>
                            </tr>
                            <tr>
                                <td>Included Components</td>
                                <td>Coin Pocket</td>
                            </tr>
                            <tr>
                                <td>Generic Name</td>
                                <td>Tri-Fold Wallet</td>
                            </tr>
                            <tr>
                                <td>Best Sellers Rank</td>
                                <td>#165 in Bags, Wallets and Luggage (See Top 100 in Bags, Wallets and Luggage)</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>#5 in Women's Wallets</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className='section related-product'>
                <div className='container'>
                    <h3>Related Products</h3>
                    <RelatedProducts />
                </div>
            </section>


        </div>
    )
}
