import React from 'react';

const NavBar = ({setShow, show,cartItems}) => {
    return (
        <nav className="nav">
            <div className="nav-wrapper">
                <div className="logo"><h1>Dump&Bank</h1></div>
                <div className="cart">
                    <p>Cart</p>
                    <div className="count">{cartItems}</div>
                    <div className='hamburger' onClick={() => setShow(!show)}>
                        <span className='long'></span>
                        <span className='long'></span>
                        <span className='long'></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default NavBar;