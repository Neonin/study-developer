import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ShopHeader from '../shop-header'
import { HomePage, CartPage } from '../../pages'

import './app.css'

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </main>
  )
}

export default App