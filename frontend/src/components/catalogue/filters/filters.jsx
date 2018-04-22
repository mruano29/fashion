import React, { Component } from 'react'

import './filters.scss'

class Filters extends Component {

    state = {
        value: ''
    }

    onChange = e => {
        this.setState({
            value: e.target.value
        })

        this.props.updateData({
            sortBy: e.target.value,
            limit: this.props.limit,
            offset: this.props.offset
        })
    }

    render() {

        const { onChange, state } = this

        const sortFilter = <select className="filter-select" onChange={onChange} value={state.value}>
                <option value="">Sort By</option>
                <option value="low-high">Price Low to High</option>
                <option value="high-low">Price High to Low</option>
                <option value="name">Name</option>
            </select>

        return (
            <div className="filters">
                {sortFilter}
            </div>
        )
    }
}

export default Filters
