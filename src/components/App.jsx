import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import KegList from "./KegList";
import Employee from "./Employee";

import background from "../assets/images/bg2.jpg";
import About from "./About";
import Error404 from "./Error404";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: "Ruby Zozzle",
          brewer: "Hi-Wheel",
          description: "Sparkling Wine & Grapefruit",
          abv: "6.8%",
          price: "7",
          remaining: "20"
        },
        {
          name: "Tart N Juicy",
          brewer: "Epic",
          description: "Sour IPA",
          abv: "4.5%",
          price: "6",
          remaining: "60"
        },
        {
          name: "Hamm's",
          brewer: "Miller/Coors",
          description: "American Lager",
          abv: "4.7%",
          price: "3",
          remaining: "65"
        },
        {
          name: "Prismatic",
          brewer: "Ninkasi",
          description: "Juicy IPA",
          abv: "5.9%",
          price: "6",
          remaining: "75"
        },
        {
          name: "Juicy Haze",
          brewer: "New Belgium",
          description: "India Pale Ale",
          abv: "7.5%",
          price: "6",
          remaining: "18"
        },
        {
          name: "8 Hop",
          brewer: "New Belgium",
          description: "Pale Ale",
          abv: "5.5%",
          price: "6",
          remaining: "58"
        }
      ],
      kegFormShown:false
    };
  }
  handleAddingNewKeg(newKeg) {
   
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg); 
    this.setState({ masterKegList: newMasterKegList });
  }
  handleKegFormClicked() {
    console.log(this.state.kegFormShown);
    this.setState({kegFormShown: !this.state.kegFormShown});
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
          <Route
            exact
            path="/"
            render={() => <KegList masterKegList={this.state.masterKegList} />}
          />
          <Route
            path="/employee"
            render={props => (
              <Employee
                masterKegList={this.state.masterKegList}
                currentRouterPath={props.location.pathname}
                onNewKegCreation={this.handleAddingNewKeg.bind(this)}
                onKegFormClicked={this.handleKegFormClicked.bind(this)}
                kegFormShown={this.state.kegFormShown}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
