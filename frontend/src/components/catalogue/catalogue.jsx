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

        const { data, limit, offset, total } = this.state

        const params = {
            limit,
            offset,
            total
        }

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
                <div className="catalogue-container">
                    <div className="catalogue-header">
                        <Filters {...{
                            ...params,
                            data,
                            updateData: this.updateData,
                        }}/>
                        <Pagination {...{
                            ...params,
                            updateData: this.updateData,
                        }}/>
                    </div>
                </div>
                <div className="catalogue-cards">
                    {productCards}
                </div>
            </div>
        )
    }
}

export default Catalogue
