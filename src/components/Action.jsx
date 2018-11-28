import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Action(props) {
  return(
    <div>
      <a><Link style={{textDecoration:'none',color: 'white'}} to={'/' + props.route}>{props.action}</Link></a>
      <style jsx>{`
        a {
            display:inline-block;
            border: 1px solid white;
            padding: 0.6em;
            margin: 0.6em;
            background-color: black;
            border-radius: 5px;
        }
        div {
            text-align: center;
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