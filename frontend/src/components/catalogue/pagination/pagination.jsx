import React, { Component } from 'react'


class Pagination extends Component {

    state = {
        value: 50
    }

    onChange = e => {
        console.log(this.props)
        this.setState({
            value: e.target.value
        })

        this.props.updateData({
            limit: e.target.value,
            offset: 0
        })
    }

    paginationBar = items => {
        console.log('items', items)
        console.log('this', this.props.total)

        // <li><a href="#">Previous</a></li>
        // <li><a href="#">Next</a></li>
        return <li><a href="#">1</a></li>
    }

    render() {

        const { onChange, paginationBar, state } = this

        console.log(this.props.total)

        // @TODO show per page and pagination

        const showSelected = <select {...{
                onChange: onChange,
                value: state.value
            }}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>

        // console.log(state.value)

        return (
            <div>
                {showSelected}

                <nav>
                    <ul className="pagination">
                        {paginationBar(state.value)}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Pagination
