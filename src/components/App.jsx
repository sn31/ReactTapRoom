import React from 'react'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import KegList from './KegList'
import Employee from './Employee'
import KegForm from './KegForm'
function App() {
  return (
    <div style={{margin: '-10px',padding: '0'}}>
      <Header />
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/employee' component={Employee} />
        <Route path ='/addnewkeg' component={KegForm}/>
        <Route path ='/editkeg' component={KegForm}/>
      </Switch>
    </div>
  )
}

export default App
