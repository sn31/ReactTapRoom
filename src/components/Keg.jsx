import React from 'react'
import PropTypes from 'prop-types'
import ActionList from './ActionList'

function Keg(props) {
  function handleEditFormClicked() {
    console.log("Edit was clicked");
  }

  function handleDeleteFormClicked() {
    console.log("Delete was clicked");
  }

  const publicMenu = (
    <div>
      <h4>{props.name}</h4>
      <ul>
        <li>{props.brewer}</li>
        <li className="dash">|</li>
        <li>{props.description}</li>
        <li className="dash">|</li>
        <li> {props.abv}</li>
        <li className="dash">|</li>
        <li>{props.price}</li>
        <li className="dash">|</li>
        <li>{props.remaining} pint</li>
      </ul>
      <br />
      <style jsx>{`
        ul {
          list-style-type: none;
        }
        li {
          display: inline-block;
          margin-right: 1em;
        }
      `}</style>
    </div>
  )

  const privateMenu = (
    <div className="row">
      <style jsx>{`
        hr {
          border: 1px solid pink;
          width: 95%;
        }
      `}</style>
      <div className="col-sm-2">{props.name}</div>
      <div className="col-sm-2">{props.brewer}</div>
      <div className="col-sm-3">{props.description}</div>
      <div className="col-sm-1">{props.abv}</div>
      <div className="col-sm-1">{props.price}</div>
      <div className="col-sm-1">{props.remaining}</div>
      <div className="col-sm-2">
        <button onClick={handleEditFormClicked} className="btn">Edit</button>
        <button onClick={handleDeleteFormClicked} className="btn">Delete</button>
      </div><hr/>
    </div>
  )
  if (props.currentRouterPath === '/employee') {
    return <div>{privateMenu}</div>
  } else {
    return <div>{publicMenu}</div>
  }
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
  onNewKegCreation: PropTypes.func,
  currentRouterPath: PropTypes.string
}

export default Keg
