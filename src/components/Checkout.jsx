import React, { useState } from 'react'
import styles from './checkout.module.css'

export default function Checkout() {
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('COD')
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-8'>
                    <form className='form'>
                        <div className='mb-4'>
                            <h4 className='mb-3'>Delivery</h4>
                            <button type='button' className='btn btn-primary mb-3' onClick={() => { setIsAddressModalOpen(true) }}>+ Add Address</button>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <label className='border p-4 rounded d-block'>
                                        <input type='radio' value={1} name='address' />
                                        <strong className='d-block mb-2'>Delivery To</strong>
                                        <h6 className='mb-0'>Sumit Shaw</h6>
                                        <span>+91 9555199515</span>
                                        <hr />
                                        <p>E-86, South Extension Part 1, South Delhi - 110049</p>
                                    </label>
                                </div>
                                <div className='col-md-4'>
                                    <label className='border p-4 rounded d-block'>
                                        <input type='radio' value={1} name='address' />
                                        <strong className='d-block mb-2'>Delivery To</strong>
                                        <h6 className='mb-0'>Rohit Sharma</h6>
                                        <span>+91 9555199515</span>
                                        <hr />
                                        <p>E-86, South Extension Part 1, South Delhi - 110049</p>
                                    </label>
                                </div>
                                <div className='col-md-4'>
                                    <label className='border p-4 rounded d-block'>
                                        <input type='radio' value={1} name='address' />
                                        <strong className='d-block mb-2'>Delivery To</strong>
                                        <h6 className='mb-0'>Amit Sharma</h6>
                                        <span>+91 9555199515</span>
                                        <hr />
                                        <p>E-86, South Extension Part 1, South Delhi - 110049</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h4 className='mb-3'>Payment Method</h4>
                            <div>
                                <label className='d-block mb-2'>
                                    <input type='radio' name='payment_method' value={'Credit/Debit Card'} onChange={() => { setPaymentMethod('CARD') }} /> Credit/Debit Card
                                </label>
                                <div>
                                    <label className='d-block mb-2'>
                                        <input type='radio' name='payment_method' value={'Net Banking'} onChange={() => { setPaymentMethod('NET-BANKING') }} /> Net Banking
                                    </label>
                                    <select className={(paymentMethod === 'NET-BANKING') ? 'form-control form-select w-50 mb-2 show' : 'hide'}>
                                        <option value={''}>Select Bank</option>
                                        <option value={'State Bank of India'}>State Bank of India</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='d-block mb-2'>
                                        <input type='radio' name='payment_method' value={'UPI'} onChange={() => { setPaymentMethod('UPI') }} /> UPI
                                    </label>
                                    <input type='text' className={(paymentMethod === 'UPI') ? 'form-control w-50 mb-2 show' : 'hide'} placeholder='Enter Your UPI Address' />
                                </div>
                                <label className='d-block'>
                                    <input type='radio' name='payment_method' value={'Wallet'} onChange={() => { setPaymentMethod('WALLET') }} /> Wallet
                                </label>
                                <label className='d-block'>
                                    <input type='radio' name='payment_method' onChange={() => { setPaymentMethod('COD') }} value={'COd'} /> Cash on Delivery (COD)
                                </label>
                            </div>
                        </div>
                        <button className='btn btn-lg btn-warning'>Place Order</button>
                    </form>
                </div>
                <div className='col-md-4'>
                
                </div>
            </div>
            <div className={(isAddressModalOpen === true) ? styles.address_modal + ' modal ' : 'modal'} id="demo">
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h5 className="modal-title">Add New Address</h5>
                            <button type="button" className="btn-close"
                                onClick={() => setIsAddressModalOpen(false)}
                            ></button>
                        </div>


                        <div className="modal-body">
                            <form>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='Enter name' />
                                </div>
                                <div className='mb-3'>
                                    <input type='tel' maxLength={10} className='form-control' placeholder='Phone Number' />
                                </div>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='Address Line 1' />
                                </div>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='Address Line 2' />
                                </div>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='Address Line 3' />
                                </div>
                                <div className='mb-3'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <select name="" id="" className='form-control form-select'>
                                                <option value={''}>Select City</option>
                                                <option value={'New Delhi'}>New Delhi</option>
                                                <option value={'Jaipur'}>Jaipur</option>
                                                <option value={'Kota'}>Kota</option>
                                            </select>
                                        </div>
                                        <div className='col-6'>
                                            <input type='text' className='form-control' placeholder='Pincode' />
                                        </div>
                                    </div>
                                </div>
                                <button className='btn btn-primary'>Add Address</button>
                            </form>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={() => setIsAddressModalOpen(false)}>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
