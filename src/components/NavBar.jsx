import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/beer-bottle-cap.png'
function NavBar() {
  return (
    <div >
      <style jsx>{`
        ul {
          list-style-type: none;
          padding-left: 0;
          font-size: 1.5em;
        }
        ,
        li {
          display: inline-block;
          float: right;
          margin-right: 0.5em;
          color: white;
        }
      `}</style>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} style={{marginTop: '-15px', width:'70%'}}/>
          </Link>
        </li>
        <li>
          <Link to="/about" style={{color:'white', textDecoration:'none'}}>About</Link>
        </li>
        <li>
          <Link to="/" style={{color:'white', textDecoration:'none'}}>Menu</Link>
        </li>
        <li>
          <Link to="/employee" style={{color:'white', textDecoration:'none'}}>Employee</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
