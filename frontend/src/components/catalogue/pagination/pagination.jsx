import React, { Component } from 'react'


class Pagination extends Component {

    state = {
        value: 50
    }

    onChange = e => {

        console.log('this.props', this.props)
        console.log(e)
        this.setState({
            value: e.target.value
        })

        this.props.updateData({
            limit: e.target.value,
            offset: 0
        })
    }

    onPaginateUpdate = pageNumber => {
        this.props.updateData({
            limit: (this.state.value * pageNumber) + pageNumber,
            offset: this.state.value * pageNumber
        })
    }

    paginationBar = visible => {

        const n = Math.ceil(this.props.total / visible)

        if(n) {
            return Array(n).fill().map((_, i) => {
                return <li key={i}>
                    <div value={i} onClick={() => this.onPaginateUpdate(i)}>
                        {i + 1}
                    </div>
                </li>
            })
        }
    }

    render() {

        const { onChange, paginationBar, props, state } = this

        console.log(props)

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
