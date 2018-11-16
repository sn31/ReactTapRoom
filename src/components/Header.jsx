import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <div style={{ marginBottom: '0'}}>


    <NavBar/><br/>
      <style jsx>{`
        div {
          background-color: #d888a3;
          height: 5em;
        }
        
        `}</style>
    </div>
  )
}

export default Header
