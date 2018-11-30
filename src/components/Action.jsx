import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Action(props) {
  return(
    <div>
      <Link style={{textDecoration:'none',color: 'white'}} to={'/' + props.route+'/'+props.kegId}><strong>{props.action}</strong></Link>
      <style jsx>{`
        
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
  kegId: PropTypes.string,
}

export default Action