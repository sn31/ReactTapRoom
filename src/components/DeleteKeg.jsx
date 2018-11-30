import React from 'react'
import PropTypes from 'prop-types';

function DeleteKeg(props) {
  
  function handleDeleteConfirmation() {
    let kegId = props.currentRouterPath.split('/')[2];
    let keg = props.masterKegList[kegId];
    alert(keg.name+" was deleted successfully");
    props.onDeletingKeg(kegId);
  }
  return (
    <div>
      <div id="confirmation">
      <h1>Are you sure you want to delete this keg?</h1>

      <button onClick={handleDeleteConfirmation}>Submit</button>
      </div>
      <style jsx>{`
        div {
          text-align: center;
          padding: 2em;
          margin: 3em auto auto auto;
          height: 100vh;
        }
        #confirmation{
          background-color: rgba(144, 148, 155, 0.8);
          height: 30%;
          border: 1px solid white;
  
        }
        button {
          background-color: black;
          border: 1px solid white;
          color: white;
          padding: 7px 16px;
          text-align: center;
          text-decoration: none;
          font-size: 16px;
          margin-top: 1em;
        }
      `}</style>
    </div>
  )
}

DeleteKeg.PropTypes = {
  onDeletingKeg: PropTypes.func,
  currentRouterPath:PropTypes.string.isRequired,
  masterKegList: PropTypes.object,
}
export default DeleteKeg
