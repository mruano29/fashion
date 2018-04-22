import React from 'react'
import { Link } from 'react-router-dom'

import './product-card.scss'


const ProductCard = ({ item }) => {

    const newTo = {
        pathname: `/api/product/${item.id}`,
        state: {...item}
    }

    return (
        <div>
            <Link to={newTo}>
                <img src={item.image.outfit} alt={item.name}/>
            </Link>
        </div>
    )
}

export default ProductCard
