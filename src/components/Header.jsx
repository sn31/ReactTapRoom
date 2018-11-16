import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: #2a2a2b;
          height: 5em;
        }
        `}</style>
      <NavBar/>
    </div>
  )
}

export default Header
