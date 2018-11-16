import React from 'react'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import KegList from './KegList'

function App() {
  return (
    <div style={{margin: '-10px',padding: '0'}}>
      <Header />
      
      <Switch>
        <Route exact path='/' component={KegList} />
        {/* <Route exact path='/newticket' component={NewTicketForm} /> */}
      </Switch>
    </div>
  )
}

export default App
