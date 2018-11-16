import React from 'react'
import PropTypes from 'prop-types'

function Action(props) {
  return(
    <div>
      <a>{props.action}</a><br/>
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
  action: PropTypes.string
}

export default Action