import React from 'react';
import { Link } from 'react-router';

const ProductList = () => {
    return (
        <div className='mx-auto text-center mt-8 '>
            <Link to='/product'>
                <button className='btn bg-fuchsia-500 hover:bg-fuchsia-700 hover:drop-shadow-2xl hover:text-white'>Add Product</button>
            </Link>

        </div>
    );
};

export default ProductList;