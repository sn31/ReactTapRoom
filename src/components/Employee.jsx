import React from 'react'

import KegList from './KegList'
import PropTypes from 'prop-types'

function Employee(props) {
  return(
    
    <div id="menu">
      <KegList onNewKegCreation={props.onNewKegCreation} masterKegList={props.masterKegList} currentRouterPath = {props.currentRouterPath} kegFormShown={props.kegFormShown}/>
    </div>
  )
}

Employee.propTypes = {
  currentRouterPath:PropTypes.string.isRequired,
  masterKegList: PropTypes.array,
  onNewKegCreation: PropTypes.func,
  kegFormShown: PropTypes.bool
}
export default Employee