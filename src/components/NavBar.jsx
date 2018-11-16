import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/beer-bottle-cap.png'
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
            <img src={logo} style={{marginTop: '-20px', width:'70%'}}/>
          </Link>
        </li>
        <li>
          <Link to="/employee" style={{color:'white', textDecoration:'none'}}>Employee</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
