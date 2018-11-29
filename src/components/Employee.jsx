import React from 'react'
import ActionList from './ActionList'
import KegList from './KegList'
import PropTypes from 'prop-types'

function Employee(props) {
  return(
    <div className="row" style={{marginRight:'0'}}>
    <div id="menu" className="col-md-6">
    <KegList currentRouterPath = {props.currentRouterPath}/>
    </div>
    <div className="col-md-6">
    <ActionList/><br/></div>
    </div>
  )
}

Employee.propTypes = {
  currentRouterPath:PropTypes.string.isRequired
}
export default Employee