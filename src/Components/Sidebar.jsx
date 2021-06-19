import React from 'react';
import Item from './Item'

const Sidebar = ({show, cartItems ,AddItem ,RemoveItem}) => {
    const paymentPrice = cartItems.reduce((t, c) => t= t + (c.price * c.count),0);
    const paymentTasks= paymentPrice * 0.14;
    const shippingTask = paymentPrice > 2000 ? 0 : 50;
    const total = paymentPrice + paymentTasks + shippingTask;
    return(
        <div className={show ? 'sidebar show': 'sidebar'}>
            <div className="products-items">
                <h3>cart Items List</h3>
                {cartItems.length !== 0 ? 
                cartItems.map((item, index) => <Item item={item} key={index} AddItem={AddItem} RemoveItem={RemoveItem}/> ) 
                : <h2 className='item-add'>Add Items</h2>}
            </div>
            <div className="check">
                <h3>Payment </h3>
                {cartItems.length !== 0 ? 
                <div className='payment-price'>
                    <div className="payment-wrapper">
                        <p>paymentPrice : </p>
                        <p>{paymentPrice.toFixed(2)}$</p>
                    </div>
                    <div className="payment-wrapper">
                        <p>paymentTasks : </p>
                        <p>{paymentTasks.toFixed(2)}$</p>
                    </div>
                    <div className="payment-wrapper">
                        <p>shippingTask : </p>
                        <p>{shippingTask.toFixed(2)}$</p>
                    </div>
                    <div className="payment-wrapper">
                        <p className='total'>Total : </p>
                        <p>{total.toFixed(2)}$</p>
                    </div>
                    <button className="order" onClick={() =>alert("your order is done !!!")}>Order Now</button>
                </div> 
                : <p>Add an item to complete the payment methods</p>
                }
            </div>
        </div>
    )
}


export default Sidebar;