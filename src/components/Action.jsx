import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Action(props) {
  return(
    <div>
      <a><Link to={'/employee/' +props.route}>{props.action}</Link></a>
      <style jsx>{`
        a {
            display: block;
            border: 1px solid pink;
            width: 6em;
            margin-left: auto;
            margin-right: auto;
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