import React from "react";
import KegForm from "./KegForm";
import KegList from "./KegList";
import PropTypes from "prop-types";

function Employee(props) {
  if (props.kegFormShown === true) {
    return (
      <div className="row">
        <div id="menu" className="col-sm-8">
          <KegList
            onNewKegCreation={props.onNewKegCreation}
            masterKegList={props.masterKegList}
            currentRouterPath={props.currentRouterPath}
            onKegFormClicked={props.onKegFormClicked}
          />
        </div>
        <div className="col-sm-4">
        <KegForm/>
        </div>
      </div>
    );
  } else {
    return (
      <div id="menu">
        <KegList
          onNewKegCreation={props.onNewKegCreation}
          masterKegList={props.masterKegList}
          currentRouterPath={props.currentRouterPath}
          onKegFormClicked={props.onKegFormClicked}
        />
      </div>
    );
  }
}
Employee.propTypes = {
  currentRouterPath: PropTypes.string.isRequired,
  masterKegList: PropTypes.array,
  onNewKegCreation: PropTypes.func,
  onKegFormClicked: PropTypes.funct,
  kegFormShown: PropTypes.bool
};
export default Employee;
