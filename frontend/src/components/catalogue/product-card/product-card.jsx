import React from 'react'
import { Link } from 'react-router-dom'

import './product-card.scss'


const ProductCard = ({ item }) => {

    const newTo = {
        pathname: `/api/product/${item.id}`
    }

    return (
        <div className="card-container">
            <Link to={newTo}>
                <img src={item.image.outfit} alt={item.name}/>
                <div className="card-description">
                    {item.name}
                </div>
                <div className="card-price">
                    {item.price}
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
