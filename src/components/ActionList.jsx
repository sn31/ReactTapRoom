import React from 'react'
import Action from './Action'


function ActionList() {
  const actionList= [
    {action:'Add New Keg',route:'addnewkeg'},
    {action:'Edit Keg',route:'editkeg'},
    {action:'Delete Keg',route:'deletekeg'}
  ] 
  let actions=[]

  actionList.map((action,index)=>
    actions.push(
      <Action
        action = {action.action}
        route ={action.route}
        key = {index}/>
    )
  )
  return(
    <div>
      {actions}
      <style jsx>{`
        div {
            text-align: center;
            margin-top: 1.5em;
        }
      
      `}</style>
    </div>
  )
}

export default ActionList