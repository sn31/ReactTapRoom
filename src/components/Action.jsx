import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Action(props) {
  return(
    <div>
      <a><Link kegId={props.kegId} style={{textDecoration:'none',color: 'white'}} to={'/' + props.route}>{props.action}</Link></a>
      <style jsx>{`
        a {
            display:inline-block;
            float: left;
            border: 1px solid white;
            padding: 0.2em;
            margin: 0 0.2em 0 0.2em;
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
  route: PropTypes.string,
  kegId: PropTypes.string
}

export default Action