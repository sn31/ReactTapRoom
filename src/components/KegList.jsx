import React from 'react'
import Keg from './Keg'


function KegList() {
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
      
  let kegs=[]

  state['masterKegList'].map((keg,index)=>
    kegs.push(
      <Keg
        name = {keg.name}
        brewer = {keg.brewer}
        description = {keg.description}
        abv = {keg.abv}
        price = {keg.price}
        remaining = {keg.remaining}
        key = {index}/>
    )
  )
  return(
    <div>
        <h1 style={{ marginTop: '0.0em', paddingTop: '1em'}}>Welcome to Skye's Taproom</h1>
      {kegs}
      <style jsx>{`
        div {
            text-align: center;
            margin-top: 3em;
            background-color: rgba(167, 174, 186,0.5);
            margin-top: 0;
        }
      
      `}</style>
    </div>
  )
}

export default KegList