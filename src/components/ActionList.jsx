import React from 'react'
import Action from './Action'


function ActionList() {
  const actionList= ['Add New Keg', 'Edit Keg', 'Delete Keg']
      
  let actions=[]

  actionList.map((action,index)=>
    actions.push(
      <Action
        action = {action}
        key = {index}/>
    )
  )
  return(
    <div>
      {actions}
      <style jsx>{`
        div {
            text-align: center;
            margin-top: 3em;
        }
      
      `}</style>
    </div>
  )
}

export default ActionList