import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <div style={{ marginBottom: '0'}}>


    <NavBar/><br/>
      <style jsx>{`
        div {
          background-image: linear-gradient(90deg,white, #d888a3);
          height: 5em;
          box-shadow: 5px 5px 8px black;
        }
        
        `}</style>
    </div>
  )
}

export default Header
