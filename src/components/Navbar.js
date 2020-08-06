import React from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import './navbar.css';

const Navbar = ({cart}) => {
    const dataCart = cart.length;
    return (
        <div className="navbarC">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Cart{`(${dataCart})`}</Link>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(Navbar);