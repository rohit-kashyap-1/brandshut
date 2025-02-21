import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div className='container py-4'>
        <h4>Hi, Rohit singh</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit accusamus ullam aliquam nesciunt soluta enim iste optio corrupti? Blanditiis quis eaque voluptas amet provident placeat sunt voluptatibus dignissimos porro!</p>
        <div className='mt-3'>
            <div className='row g-4'>
                <div className='col-md-4'>
                    <div className='p-4 shadow rounded'>
                        <h5>Recent Orders</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <a href='' className='text-decoration-underline'>View Orders</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-4 shadow rounded'>
                        <h5>Transactions</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <a href='' className='text-decoration-underline'>View Transactions</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-4 shadow rounded'>
                        <h5>Addresses</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <a href='' className='text-decoration-underline'>View Addresses</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-4 shadow rounded'>
                        <h5>My Account</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <a href='' className='text-decoration-underline'>Edit Profile</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
