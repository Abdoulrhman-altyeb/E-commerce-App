import React from 'react';
import { useState } from 'react';
import {data} from '../assits/data/data';
import Prodcut from './Prodcut';

const Products = ({AddItem}) => {
    const [products ] = useState(data);
    return( 
        <div className='products'>
        {products.map((product) => {
            return (
                <Prodcut product={product} key={product.id} AddItem={AddItem}/>
            )
        })}
        </div>
    )
}

export default Products;