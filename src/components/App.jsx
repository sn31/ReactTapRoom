import React from 'react'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import KegList from './KegList'
import Employee from './Employee'
import KegForm from './KegForm'
import background from '../assets/images/bg2.jpg'
import About from './About'
import Error404 from './Error404'
import {v4} from 'uuid'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterKegList: {
        '44c1ce37-776d-41b6-af8f-8b119bf6b334' : {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine & Grapefruit',
          abv: '6.8%',
          price: '7',
          remaining: '20'
        },
        'd47d46fc-c738-4a93-877c-3495a61d799f':
        {
          
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          remaining: '60'
        },
        '4ea7b68e-d524-43c7-b783-d0d07858d4fe':
        {
         
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7%',
          price: '3',
          remaining: '65'
        },
        '350c32eb-8c1b-4118-a17e-0752737787f9':
        {
          id: v4(),
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv: '5.9%',
          price: '6',
          remaining: '75'
        },
        '244f4990-023c-4049-9d4e-2c8031445f76':
        {
          id: v4(),
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv: '7.5%',
          price: '6',
          remaining: '18'
        },
        'ba3ef44c-1c70-48ca-989d-ef547accf164':
        {
         
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv: '5.5%',
          price: '6',
          remaining: '58'
        }
      }
    }
  }

  handleAddingNewKeg(newKeg) {
    var newKegId = v4()
    var newMasterKegList = Object.assign({},this.state.masterKegList,{
      [newKegId]: newKeg
    })
    this.setState({ masterKegList: newMasterKegList })
  }
  handleEditKeg(kegId,editedKeg)
  {
    console.log('Edit keg')
    for (var key in this.state.masterKegList){
      if (key === kegId)
      {
        this.setState(prevState => ({
          masterKegList: {
            ...prevState.masterKegList,
            kegId:editedKeg
          }
        }))
      }
    }
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
          
          <Route path="/addnewkeg" render={(props)=><KegForm currentRouterPath={props.location.pathname} onNewKegCreation={this.handleAddingNewKeg.bind(this)}/>}/>
          <Route path="/editkeg" render={(props)=><KegForm currentRouterPath={props.location.pathname} onEditingKeg={this.handleEditKeg.bind(this)}/>}/>
          
          <Route
            path="/employee"
            render={props => (
              <Employee
                masterKegList={this.state.masterKegList}
                currentRouterPath={props.location.pathname}
                onNewKegCreation={this.handleAddingNewKeg.bind(this)}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App
