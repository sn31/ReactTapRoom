import React from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  return(
    <div>
      <h4>{props.name}</h4>
      <p>{props.brewer}</p>
      <p>{props.description}</p>
      <p>{props.abv}</p>
      <p>{props.price}</p>
      <p>{props.remaining}</p>
    </div>
  )
}

Keg.PropTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
}

export default Keg