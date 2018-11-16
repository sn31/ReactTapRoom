import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {KegForm} from './KegForm'
function Action(props) {
  return(
    <div>
      <a><Link style={{textDecoration:'none'}} to={'/' + props.route}>{props.action}</Link></a>
      <style jsx>{`
        a {
            display: inline-block;
            float: left;
            border: 1px solid pink;
            padding: 0.5em;
            margin-left: 0.1em;
            margin-right: 0.1em;
        }
        div {
            text-align: center;
            padding-left: 40%;
           
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