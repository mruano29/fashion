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

    constructor(props) {
        super(props)

        this.updateData = this.updateData.bind(this)

        this.state = {
          data: []
        }
    }

    componentDidMount() {

        this.updateData(DEFAULT_PARAMS)
    }

    updateData(params) {

        const endpoint = '/api/products'

        CreateRequest(endpoint, params)()
            .then(items => this.setState({ ...items }))
    }

    render() {
        //@TODO create a product component, a filter component, pass to product-card the filtered data
        // use the catalogue serice to fetch data.

        const { data, limit, offset, total } = this.state

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
                    limit,
                    offset,
                    total,
                    updateData: this.updateData,
                }}/>
                <Filters {...{
                    data,
                    updateData: this.updateData,
                }}/>
                <div className="cards">
                    {productCards}
                </div>
            </div>
        )
    }
}

export default Catalogue
