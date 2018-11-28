import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <ul>
        <li>{props.brewer}</li>
        <li>{props.description}</li>
        <li> {props.abv}</li>
        <li>{props.price}</li>
        <li>{props.remaining} pint</li>
      </ul><br/>
      <style jsx>{`
        p {
          margin-bottom: 0;
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
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string
};

export default Keg;
