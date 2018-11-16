import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: #d888a3;
          height: 5em;
          margin-bottom: 1em;
        }
        `}</style>
      <NavBar/><br/>
      <h1 style={{marginTop: '2em'}}>Welcome to Skye's Taproom</h1>
    </div>
  )
}

export default Header
