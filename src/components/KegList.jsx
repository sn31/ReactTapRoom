import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) {
  const state = {
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
    ]
  };

  let kegs = [];

  state["masterKegList"].map((keg, index) =>
    kegs.push(
      <Keg
        name={keg.name}
        brewer={keg.brewer}
        description={keg.description}
        abv={keg.abv}
        price={keg.price}
        remaining={keg.remaining}
        key={index}
        currentRouterPath={props.currentRouterPath}
      />
    )
  );
  const publicMenu = (
    <div>
      <h1 style={{ marginTop: "0.0em", paddingTop: "0.5em" }}>Menu</h1>
      <ul>
        <li>Brew</li>
        <li className="dash">|</li>
        <li>Description</li>
        <li className="dash">|</li>
        <li>ABV</li>
        <li className="dash">|</li>
        <li>Price</li>
        <li className="dash">|</li>
        <li>Inventory</li>
      </ul>
      <hr />
      {kegs}
      <style jsx>{`
        div {
          text-align: center;
          background-color: rgba(144, 148, 155, 0.8);
          width: 42%;
          margin: 0.5em auto 0.5em auto;
          height: 95vh;
          border: 1px solid;
          padding: 5px;
          box-shadow: 5px 10px 8px black;

        }
        ul {
          list-style-type: none;
        }
        li {
          display: inline-block;
          margin-right: 1em;
        }
      
      `}</style>
    </div>
  );
  const privateMenu = (
    <div className="wrapper">
      <style jsx>{`
        .wrapper {
          text-align: center;
          background-color: rgba(144, 148, 155, 0.8);
          width: 98%;
          margin: 0.5em auto 0.5em auto;
          height: 95vh;
          border: 1px solid;
          padding: 5px;
          box-shadow: 5px 10px 8px black;
        }
      `}</style>
      
    <div className="row">
      <div className="col-sm-2">Name</div>
      <div className="col-sm-2">Brewer</div>
      <div className="col-sm-3">Description</div>
      <div className="col-sm-1">ABV</div>
      <div className="col-sm-1">Pricing</div>
      <div className="col-sm-1">Remaining</div>
      <div className="col-sm-2">Actions</div>
    </div><hr/>
    {kegs}
    </div>
  )
 
  if (props.currentRouterPath === "/employee")
  {
    return <div>{privateMenu}</div>;
  }
  else{
    return <div>{publicMenu}</div>
  }
  
}

KegList.propTypes = {
  currentRouterPath:PropTypes.string
}
export default KegList;
