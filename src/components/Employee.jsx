import React from 'react'

import KegList from './KegList'
import PropTypes from 'prop-types'

function Employee(props) {
  return(
    
    <div id="menu">
      <KegList onNewKegCreation={props.onNewKegCreation} masterKegList={props.masterKegList} currentRouterPath = {props.currentRouterPath}/>
    </div>
  )
}

Employee.propTypes = {
  currentRouterPath:PropTypes.string.isRequired,
  masterKegList: PropTypes.object,
  onNewKegCreation: PropTypes.func
}
export default Employee