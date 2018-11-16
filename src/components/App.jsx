import React from 'react'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import Welcome from './Welcome'

function App() {
  return (
    <div style={{margin: '-10px',padding: '0'}}>
      <Header />
      <Welcome/>
      <Switch>
        {/* <Route exact path='/' component={TicketList} />
        <Route exact path='/newticket' component={NewTicketForm} /> */}
      </Switch>
    </div>
  )
}

export default App
