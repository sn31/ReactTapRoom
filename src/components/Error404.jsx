import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link style={{color:'white'}}to="/">home</Link> instead?</h3>
      <style jsx>{`
        div {
          text-align: center;
          background-color: rgba(144, 148, 155, 0.8);
          width: 500px;
          margin: 0.5em auto 0.5em auto;
          height: 85vh;
          border: 1px solid;
          padding: 10px;
          box-shadow: 5px 10px 8px black;
        }
      `}</style>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;