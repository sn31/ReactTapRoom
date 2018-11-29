import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import KegList from "./KegList";
import Employee from "./Employee";
import KegForm from "./KegForm";
import DeleteKeg from "./DeleteKeg";
import background from "../assets/images/bg2.jpg";
import About from "./About";
import Error404 from "./Error404";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            background-image: url(${background});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            color: white;
            font-family: "Poppins", sans-serif;
            font-size: 0.9em;
          }
        `}</style>
        <Header />
        <Switch>
          <Route exact path="/" component={KegList} />
          <Route
            path="/employee"
           render={(props)=><Employee currentRouterPath={props.location.pathname}/>}
          />
          
          <Route path="/addnewkeg" component={KegForm} />
          <Route path="/editkeg" component={KegForm} />
          <Route path="/deletekeg" component={DeleteKeg} />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
