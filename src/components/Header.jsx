import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <div style={{ marginBottom: "0" }}>
      <NavBar />
      <br />
      <style jsx>{`
        div {
          background-color: black;
          opacity: 0.8;
          height: 5em;
          box-shadow: 5px 5px 8px black;
        }
      `}</style>
    </div>
  );
}

export default Header;
