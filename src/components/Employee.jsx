import React from 'react'
import ActionList from './ActionList'
import KegList from './KegList'
import PropTypes from 'prop-types'

function Employee(props) {
  return(
    
    <div id="menu" className="col-md-12">
    <KegList currentRouterPath = {props.currentRouterPath}/>
    
    </div>
  )
}

Employee.propTypes = {
  currentRouterPath:PropTypes.string.isRequired
}
export default Employee