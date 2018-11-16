import React from "react";

function KegForm() {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Brewer</label>
        <input type="text" />
        <label>Description</label>
        <input type="text" />
        <label>Abv</label>
        <input type="text" />
        <label>Price</label>
        <input type="text" />
        <label>Remaining</label>
        <input type="text" />
      </form>
      <button>Submit</button>
      <style jsx>{`
        input[type="text"],
        select {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        input[type="submit"] {
          width: 100%;
          background-color: #4caf50;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        input[type="submit"]:hover {
          background-color: #45a049;
        }

        div {
          border-radius: 5px;
          padding: 20px;
          margin-top: 3em;
          width: 50%;
          margin-left: auto;
          margin-right: auto;
        }
        button {
          background-color:#d888a3;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }
        label {
            font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default KegForm;
