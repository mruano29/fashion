import React, { Component } from 'react'

import './pagination.scss'


class Pagination extends Component {

    state = {
        value: 50,
        selected: 1
    }

    onChange = e => {

        this.setState({
            value: e.target.value
        })

        this.props.updateData({
            limit: e.target.value,
            offset: 0
        })
    }

    onPaginateUpdate = pageNumber => {

        document.getElementById(`selected-${pageNumber}`) && document.getElementById(`selected-${pageNumber}`).classList.add('selected')
        document.getElementById(`selected-${this.state.selected}`) && document.getElementById(`selected-${this.state.selected}`).classList.remove('selected')

        this.props.updateData({
            limit: this.state.value * pageNumber,
            offset: this.state.value * pageNumber
        })

        this.setState({
            selected: pageNumber
        })
    }

    paginationBar = visible => {

        const n = Math.ceil(this.props.total / visible)

        if(n) {
            return Array(n).fill().map((_, i) => {
                return <li key={i} id={`selected-${i}`}>
                    <a value={i} onClick={() => this.onPaginateUpdate(i)}>
                        {i + 1}
                    </a>
                </li>
            })
        }
    }

    render() {

        const { onChange, paginationBar, state } = this

        return (
            <div className="pagination-container">
                <select {...{
                    className: "pagination-select",
                    onChange: onChange,
                    value: state.value
                }}>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <nav>
                    <ul className="pagination-buttons">
                        {paginationBar(state.value)}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Pagination
