import React from "react";
import Action from "./Action";
import PropTypes from "prop-types";
function ActionList(props) {
  const actionList = [
    { action: "Edit", route: "editkeg" },
    { action: "Delete", route: "deletekeg" }
  ];
  let actions = [];

  actionList.map((action, index) =>
    actions.push(
      <Action onSelectedKegId={props.onSelectedKegId}kegId={props.kegId} action={action.action} route={action.route} key={index} />
    )
  );
  return (
    <div>
      {actions}
      <style jsx>{`
        div {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
ActionList.propTypes = {
  kegId: PropTypes.string,
  onSelectedKegId: PropTypes.func
}
export default ActionList;
