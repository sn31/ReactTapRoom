import React from 'react'
import { Link } from 'react-router-dom'
import logoSmall from '../assets/images/logoS.png'
import Authentication from './Authentication'
import Language from './Language'
import Download from './Download'

function NavBar() {
  return (
    <div style={{marginLeft:'12em', marginRight:'auto'}}>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding-left: 0;
          font-size: 1.5em;
          color: #1e704b;
        }
        ,
        li {
          display: inline-block;
          float: left;
          margin-right: 1em;
          color: white;
        }
      `}</style>
      <ul>
        <li>
          <Link to="/">
            <img src={logoSmall} />
          </Link>
        </li>
        <li>
          <Link to="/menu" style={{color:'white', textDecoration:'none'}}>Menu</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
