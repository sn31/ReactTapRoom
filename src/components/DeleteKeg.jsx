import React from 'react'

function DeleteKeg() {
  const state = {
    masterKegList: [
      {
        name: 'Ruby Zozzle',
        brewer: 'Hi-Wheel',
        description: 'Sparkling Wine & Grapefruit',
        abv: '6.8%',
        price: '7',
        remaining: '20'
      },
      {
        name: 'Tart N Juicy',
        brewer: 'Epic',
        description: 'Sour IPA',
        abv: '4.5%',
        price: '6',
        remaining: '60'
      },
      {
        name: 'Hamm\'s',
        brewer: 'Miller/Coors',
        description: 'American Lager',
        abv: '4.7%',
        price: '3',
        remaining: '65'
      },
      {
        name: 'Prismatic',
        brewer: 'Ninkasi',
        description: 'Juicy IPA',
        abv:  '5.9%',
        price: '6',
        remaining: '75'
      },
      {
        name: 'Juicy Haze',
        brewer: 'New Belgium',
        description: 'India Pale Ale',
        abv:  '7.5%',
        price: '6',
        remaining: '18'
      },
      {
        name: '8 Hop',
        brewer: 'New Belgium',
        description: 'Pale Ale',
        abv:  '5.5%',
        price: '6',
        remaining: '58'
      }
    ]
  }
  let options =[]
  state['masterKegList'].map((option,index)=>
    options.push(<option key={index}>{option.name}</option>)
  )      
  return(
    <div>
      <h1>Choose a keg to delete</h1>
      <select>
        <option>Name</option>
        {options}
      </select><br/>
      <button>Submit</button>
      <style jsx>{`
       div {
           text-align:center;
        
        padding: 20px;
        margin-top: 3em;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }
      button {
        background-color:black;
        border: 1px solid white;
        color: white;
        padding: 7px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-top: 1em;
      }
      `}</style>
    </div>
  )
}

export default DeleteKeg