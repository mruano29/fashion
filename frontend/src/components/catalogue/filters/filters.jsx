import React, { Component } from 'react'


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
        })
    }

    //@TODO add a clear filter button
    // Filters ===> Price hight to low, low to high
    // <option value="designer">Designer</option>

    render() {

        const { onChange, state } = this

        const sortFilter = <select onChange={onChange} value={state.value}>
                <option value="">Sort By</option>
                <option value="low-high">Price Low to High</option>
                <option value="high-low">Price High to Low</option>
                <option value="name">Name</option>
            </select>

        return (
            <div>
                <div>{sortFilter}</div>
            </div>
        )
    }
}

export default Filters
