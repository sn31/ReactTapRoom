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
      <h1>Are you sure you want to delete this keg?</h1>

      <button onClick={handleDeleteConfirmation}>Submit</button>
      <style jsx>{`
        div {
          text-align: center;
          padding: 20px;
          margin-top: 3em;
          width: 50%;
          margin-left: auto;
          margin-right: auto;
        }
        button {
          background-color: black;
          border: 1px solid white;
          color: white;
          padding: 7px 16px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
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
