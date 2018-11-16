import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: #d888a3;
          height: 5em;
        }
        `}</style>
      <NavBar/>
    </div>
  )
}

export default Header
