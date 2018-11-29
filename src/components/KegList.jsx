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
      <h1 style={{ marginTop: "0.0em", paddingTop: "1em" }}>Menu</h1>
      <ul>
        <li>Brew</li>
        <li>Description</li>
        <li>ABV</li>
        <li>Price</li>
        <li>Inventory</li>
      </ul>
      <hr />
      {kegs}
      <style jsx>{`
        div {
          text-align: center;
          background-color: rgba(144, 148, 155, 0.8);
          width: 95%;
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
          width: 95%;
          margin: 0.5em auto 0.5em auto;
          height: 95vh;
          border: 1px solid;
          padding: 5px;
          box-shadow: 5px 10px 8px black;
        }
      `}</style>
    <div className="row">
      <div className="col">Name</div>
      <div className="col">Brewer</div>
      <div className="col">Description</div>
      <div className="col">ABV</div>
      <div className="col">Pricing</div>
      <div className="col">Remaining</div>
    </div><hr/>
    {kegs}
    </div>
  )
 
  // if (props.currentRouterPath === "/")
  // {
  //   return <div>{publicMenu}</div>;
  // }
  // else{
  //   return <div>{privateMenu}</div>
  // }
  return <div>{publicMenu}</div>; 
}

KegList.propTypes = {
  currentRouterPath:PropTypes.string
}
export default KegList;
