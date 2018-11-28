import React from 'react'
import ActionList from './ActionList'
import KegList from './KegList'

function Employee() {
  return(
    <div className="row" style={{marginRight:'0'}}>
    
    <div className="col-md-11">
    <KegList style={{float:'right'}}/>
    </div>
    <div className="col-md-1" style={{padding:'0'}}>
    <ActionList/><br/></div>
    </div>
  )
}

export default Employee