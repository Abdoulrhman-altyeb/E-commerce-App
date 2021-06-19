import React from 'react';

const Prodcut = ({product,AddItem}) => {
    return(
        <div className="product">
            <img src={product.img} alt={product.name} />
            <div className="price">
                <h5>Price</h5>
                <h5>{product.price} $</h5>
            </div>
            <div className="info">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
            </div>
            <button onClick={() => AddItem(product)}>Add To Cart</button>
        </div>
    )
}

export default Prodcut;