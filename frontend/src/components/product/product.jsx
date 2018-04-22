import React, { Component } from 'react'
import CreateRequest from '../../utils/create-request'


class Product extends Component {

    constructor(props) {

        super(props)

        this.item = CreateRequest(this.props.location.pathname)()
            .then(item => this.setState({ item: item }))
    }

    render() {
        // @TODO solve this initial state
        if(!this.state) {
            return null
        }

        const { item  } = this.state

        return (
            <div>
                <h1>{item.name}</h1>
                <h1>{item.designer}</h1>
                <h1>{item.price}</h1>
                <img src={item.images.outfit} alt={item.images.outfit} />
                <img src={item.images.large} alt={item.images.large} />
                <img src={item.images.small} alt={item.images.small} />
            </div>
        )
    }
}

export default Product
