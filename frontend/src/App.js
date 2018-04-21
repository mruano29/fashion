import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // getInitialState: function() {
    //   return {
    //     members: []
    //   };
    // },

    static state = {
        products: []
    }

    componentDidMount() {

        console.log('componentDidMount')

        fetch('/api/products')
            .then(res => {
                console.log(res)
                return res.json()})
            .then(products => this.setState({ products: products }));
    }

    render() {

        console.log('members', this)

        // const data = this.state.products

        if(this.state === null) {
            return null
        }

        const data = this.state.products.data.map(item => {

            return <div>
                    <div>{item.name}</div>
                    <img src={item.image.outfit} />
                </div>
        })

        return (
          <div className="App">
            {data}
          </div>
        );
    }
    }

export default App;
