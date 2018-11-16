import React from 'react'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import KegList from './KegList'
import Employee from './Employee'

function App() {
  return (
    <div style={{margin: '-10px',padding: '0'}}>
      <Header />
      
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route exact path='/employee' component={Employee} />
      </Switch>
    </div>
  )
}

export default App
