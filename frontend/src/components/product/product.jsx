import React, { Component } from 'react'


class Product extends Component {

    render() {

        // console.log(this.props.location.state)

        const { state } = this.props.location

        return (
            <div>
                <h1>{state.name}</h1>
                <h1>{state.designer}</h1>
                <h1>{state.price}</h1>
                <img src={state.image.outfit} />
            </div>
        )
    }
}

export default Product
