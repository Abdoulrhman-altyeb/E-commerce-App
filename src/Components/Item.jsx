import React from 'react';

const Item = ({item ,AddItem, RemoveItem}) => {
    return(
        <div className="single-item">
            <p>{item.count}</p>
            <p >{item.name}</p>
            <div className="buttons">
                <button className='less'onClick={() => RemoveItem(item)} >-</button>
                <button className='add'onClick={() => AddItem(item)}>+</button>
            </div>
            <p className='fixed-price'>{item.price.toFixed(2)}$</p>
        </div>
    )
}

export default Item