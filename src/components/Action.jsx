import React from 'react'
import PropTypes from 'prop-types'

function Action(props) {
  return(
    <div>
      <a>{props.action}</a>
    </div>
  )
}

Action.propTypes = {
  action: PropTypes.string
}

export default Action