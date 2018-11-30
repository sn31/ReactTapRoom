import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function KegList(props) {
  
  let kegs = []
  console.log(props.masterKegList)
  props.masterKegList.map((keg) =>
    kegs.push(
      <Keg
        name={keg.name}
        brewer={keg.brewer}
        description={keg.description}
        abv={keg.abv}
        price={keg.price}
        remaining={keg.remaining}
        key={keg.id}
        currentRouterPath={props.currentRouterPath}
      />
    )
  )
  const publicMenu = (
    <div>
      <h1 style={{ marginTop: '0.0em', paddingTop: '0.5em' }}>Menu</h1>
      <ul>
        <li>Brew</li>
        <li className="dash">|</li>
        <li>Description</li>
        <li className="dash">|</li>
        <li>ABV</li>
        <li className="dash">|</li>
        <li>Price</li>
        <li className="dash">|</li>
        <li>Inventory</li>
      </ul>
      <hr />
      {kegs}
      <style jsx>{`
        div {
          text-align: center;
          background-color: rgba(144, 148, 155, 0.8);
          width: 42%;
          margin: 0.5em auto 0.5em auto;
         
          border: 1px solid;
          padding: 5px;
          box-shadow: 5px 10px 8px black;
        }
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
    <div className="wrapper">
      <style jsx>{`
        .wrapper {
          text-align: center;
          background-color: rgba(144, 148, 155, 0.8);
          width: 98%;
          margin: 0.5em auto 0.5em auto;
          height: 95vh;
          border: 1px solid;
          padding: 5px;
          box-shadow: 5px 10px 8px black;
        }
        .title {
          text-align: left;
          margin-left: 1em;
          margin-bottom: 1em;
        }
      `}</style>
      <div className="row title">
        <div className="col-sm-10">
          <h1>Inventory Management</h1>
        </div>
        <div className="col-sm-2">
          <Link style={{textDecoration:'none',color: 'white'}} to='/addnewkeg'>Add New Keg</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-2">
          <strong>Name</strong>
        </div>
        <div className="col-sm-2">
          <strong>Brewer</strong>
        </div>
        <div className="col-sm-3">
          <strong>Description</strong>
        </div>
        <div className="col-sm-1">
          <strong>ABV</strong>
        </div>
        <div className="col-sm-1">
          <strong>Pricing</strong>
        </div>
        <div className="col-sm-1">
          <strong>Remaining</strong>
        </div>
        <div className="col-sm-2">
          <strong>Actions</strong>
        </div>
      </div>
      <hr />
      {kegs}
    </div>
  )

  if (props.currentRouterPath === '/employee') {
    return <div>{privateMenu}</div>
  } else {
    return <div>{publicMenu}</div>
  }
}

KegList.propTypes = {
  currentRouterPath: PropTypes.string,
  masterKegList: PropTypes.array,
  onNewKegCreation: PropTypes.func
}
export default KegList
