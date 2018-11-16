import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <div style={{ marginBottom: '0'}}>
      <style jsx>{`
        div {
          background-color: #d888a3;
          height: 5em;
          margin-bottom: 1em;
        }
        `}</style>
      <NavBar/><br/>
    </div>
  )
}

export default Header
