import React from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  return(
    <div>
      <h4>{props.name}</h4>
      <p>{props.brewer}&nbsp;&nbsp;|&nbsp;&nbsp;{props.description}&nbsp;&nbsp;|&nbsp;&nbsp;{props.abv}&nbsp;&nbsp;|&nbsp;&nbsp;${props.price}&nbsp;&nbsp;|&nbsp;&nbsp;{props.remaining} pints</p>
      <style jsx>{`
        p {
            margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
}

export default Keg