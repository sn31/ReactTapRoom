import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/beer-bottle-cap.png'
function NavBar() {
  const LinkStyle = {
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <div >
      <style jsx>{`
        ul {
          list-style-type: none;
          padding-left: 0;
          font-size: 1.5em;
          margin-top: 0.8em;
        }
        ,
        li {
          display: inline-block;
          float: right;
          margin-right: 0.5em;
          color: white;
        },
        div {
          height: 5em;
        }
      `}</style>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} style={{marginTop: '-15px', height:'50%'}}/>
          </Link>
        </li>
        <li>
          <Link to="/about" style={LinkStyle}>About</Link>
        </li>
        <li>
          <Link to="/" style={LinkStyle}>Menu</Link>
        </li>
        <li>
            <Link to="/employee" style={LinkStyle}>Employee</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
