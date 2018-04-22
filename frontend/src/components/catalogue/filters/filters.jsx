import React, { Component } from 'react'


class Filters extends Component {

    state = {
        value: ''
    }

    change = e => {
        this.setState({
            value: e.target.value
        })
    }

    //@TODO add a clear filter button
    // Filters ===> Price hight to low, low to high
    // <option value="designer">Designer</option>

    render() {

        // console.log(this.props)

        const sortFilter = <select onChange={this.change} value={this.state.value}>
                <option value="">Sort By</option>
                <option value="low-high">Price Low to High</option>
                <option value="high-low">Price High to Low</option>
                <option value="name">Name</option>
            </select>

        const designerFilter = <div>holi</div>

        return (
            <div>
                <div>{sortFilter}</div>
                <div>{designerFilter}</div>
            </div>
        )
    }
}

export default Filters
