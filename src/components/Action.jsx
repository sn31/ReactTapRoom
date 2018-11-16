import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Action(props) {
  return(
    <div>
      <a><Link style={{textDecoration:'none',color: 'white'}} to={'/' + props.route}>{props.action}</Link></a>
      <style jsx>{`
        a {
            display: inline-block;
            float: left;
            border: 1px solid white;
            padding: 0.6em;
            margin-left: 0.1em;
            margin-right: 0.1em;
            background-color: black;
            border-radius: 5px;
        }
        div {
            text-align: center;
            margin-left: 38%;
            margin-right: 38%; 
        }
      `}</style>
    </div>
  )
}

Action.propTypes = {
  action: PropTypes.string,
  route: PropTypes.string

}

export default Action