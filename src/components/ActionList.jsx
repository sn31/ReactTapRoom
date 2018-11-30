import React from "react";
import Action from "./Action";

function ActionList() {
  const actionList = [
    { action: "Edit", route: "editkeg" },
    { action: "Delete", route: "deletekeg" }
  ];
  let actions = [];

  actionList.map((action, index) =>
    actions.push(
      <Action action={action.action} route={action.route} key={index} />
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

export default ActionList;
