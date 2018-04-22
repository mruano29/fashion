import React, { Component } from 'react'
import CreateRequest from '../../utils/create-request'

import './product.scss'

class Product extends Component {

    constructor(props) {

        super(props)

        this.item = CreateRequest(this.props.location.pathname)()
            .then(item => this.setState({ item: item }))
    }

    onClick= e => {
        alert(e.target.innerText)
    }

    render() {

        if(!this.state) {
            return null
        }

        const { item  } = this.state

        return (
            <div className="product-wrapper">
                <div className="product-container">
                    <div className="image-wrapper">
                        <div className="image-thumbnail">
                            <img src={item.images.outfit} alt={item.images.outfit} />
                            <img src={item.images.small} alt={item.images.small} />
                        </div>
                        <img src={item.images.large} alt={item.images.large} />
                    </div>
                    <div className="description-wrapper">
                        <div className="product-designer">{item.designer}</div>
                        <div className="product-description">{item.name}</div>
                        <div className="product-price">{item.price}</div>
                        <button className="buy-button" onClick={this.onClick}>Add Item</button>
                        <button className="buy-button" onClick={this.onClick}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
