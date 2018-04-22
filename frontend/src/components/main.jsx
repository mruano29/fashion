import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Catalogue from './catalogue/catalogue'
import Product from './product/product'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Catalogue}/>
      <Route path='/api/product/' component={Product}/>
    </Switch>
  </main>
)

export default Main
