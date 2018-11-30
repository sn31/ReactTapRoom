// import React from 'react'
// import Action from './Action'


// function ActionList(props) {
//   const actionList= [
//     // {action:'Add New Keg',route:'addnewkeg'},
//     {action:'Edit',route:'editkeg'},
//     {action:'Delete',route:'deletekeg'},
  
//   ] 
//   let actions=[]

//   actionList.map((action,index)=>
//     actions.push(
//       <Action
//         action = {action.action}
//         route ={action.route}
//         key = {index}
//         kegFormShown={props.kegFormShown}/>
//     )
//   )
//   return(
//     <div>
//       {actions}
//       <style jsx>{`
//         div {
//             text-align: center;
           
//         }
      
//       `}</style>
//     </div>
//   )
// }

// ActionList.propTypes = {
//   kegFormShown: PropTypes.bool
// }
// export default ActionList