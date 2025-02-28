import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const cart = useSelector((state)=>state.cart.value)
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">

                <div className="container">
                    <a className="navbar-brand me-2" href="https://mdbgo.com/">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            height="16"
                            alt="MDB Logo"
                            loading="lazy"
                            style={{ marginTop:-1 }}
                        />
                    </a>


                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarButtonsExample">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                        </ul>


                        <div className="d-flex align-items-center">
                            <Link to={'/login'} data-mdb-ripple-init type="button" className="btn btn-link px-3 me-2">
                                Login
                            </Link>
                            <Link to={'/register'} data-mdb-ripple-init type="button" className="btn btn-primary me-3">
                                Sign up for free
                            </Link>
                            
                            <Link to={'/cart'}>Cart {cart.length}</Link>
                        </div>
                    </div>

                </div>

            </nav>

        </div>
    )
}
