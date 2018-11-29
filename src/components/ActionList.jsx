import React from 'react'
import Action from './Action'


function ActionList() {
  const actionList= [
    // {action:'Add New Keg',route:'addnewkeg'},
    {action:'Edit',route:'editkeg'},
    {action:'Delete',route:'deletekeg'},
    {action:'Discount'}
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
           
        }
      
      `}</style>
    </div>
  )
}

export default ActionList