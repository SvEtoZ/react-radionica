import React from 'react';

const ProductCard = ({ name, price }) => {
    return (
        <div className="product-card">
            <center>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </center>
        </div>
    );
};



export default ProductCard;