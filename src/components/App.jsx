import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import KegList from "./KegList";
import Employee from "./Employee";
import KegForm from "./KegForm";
import DeleteKeg from "./DeleteKeg";
import background from "../assets/images/bg.jpg";

function App() {
  return (
    <div>
      <style jsx>{`
        div {
          margin: -10px;
          padding: 0;
          background-image: url(${background});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          color: white;
          
        }
      `}</style>
      <Header />
      <Switch>
        <Route exact path="/" component={KegList} />
        <Route path="/employee" component={Employee} />
        <Route path="/addnewkeg" component={KegForm} />
        <Route path="/editkeg" component={KegForm} />
        <Route path="/deletekeg" component={DeleteKeg} />
      </Switch>
    </div>
  );
}

export default App;
