import React, { Component } from 'react'
import CreateRequest from '../../utils/create-request'
import Filters from './filters/filters'
import Pagination from './pagination/pagination'
import ProductCard from './product-card/product-card'

import './catalogue.scss'

const DEFAULT_PARAMS = {
    limit: 50,
    offset: 0
}

class Catalogue extends Component {

    state = {
        items: []
    }

    componentDidMount() {

        this.updateData(DEFAULT_PARAMS)
    }

    updateData(params) {

        const endpoint = '/api/products'

        CreateRequest(endpoint, params)()
            .then(items => this.setState({ items: items.data }))
    }

    render() {
        //@TODO create a product component, a filter component, pass to product-card the filtered data
        // use the catalogue serice to fetch data.

        const { state } = this

        const data = state.items

        console.log('data', data.length)

        const productCards = data.map(item => {
            return (
                <ProductCard {...{
                    item,
                    key: item.id
                }} />
            )
        })

        return (
            <div className="catalogue">
                <Pagination {...{
                    total: data.length,
                    updateData: this.updateData.bind(this) //@TODO this bind(this) is unperformant and I have to update it
                }}/>
                <Filters {...{
                    data
                }}/>
                <div className="cards">
                    {productCards}
                </div>
            </div>
        )
    }
}

export default Catalogue
