import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  const publicMenu = (
    <div>
      <h4>{props.name}</h4>
      <ul>
        <li>{props.brewer}</li>
        <li className="dash">|</li>
        <li>{props.description}</li>
        <li className="dash">|</li>
        <li> {props.abv}</li>
        <li className="dash">|</li>
        <li>{props.price}</li>
        <li className="dash">|</li>
        <li>{props.remaining} pint</li>
      </ul>
      <br />
      <style jsx>{`
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
    <div className="row">
      <div className="col">{props.name}</div>
      <div className="col">{props.brewer}</div>
      <div className="col">{props.description}</div>
      <div className="col">{props.abv}</div>
      <div className="col">{props.price}</div>
      <div className="col">{props.remaining}</div>
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

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string
};

Keg.propTypes = {
  currentRouterPath:PropTypes.string
}
export default Keg;
