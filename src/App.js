import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import People from "./components/People";
import ForLater from "./components/ForLater";


import { saveForLater, fetchForLater } from "./agents/my-api";

async function initialise( app ) {

  const json = await fetchForLater()
  const saved = json.map( ( [ _, person ] ) => person );
  app.setState( { saved } );

}

class App extends Component {

  constructor() {

    super();
    this.state = { saved: [] };
    initialise( this );

  }
  async handleSaved( person ) {

    try {

      await saveForLater( person );
      const saved = this.state.saved;
      saved.push( person );
      this.setState( { saved } );

    } catch( ex ) {

      alert( ex.message );

    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ForLater saved={ this.state.saved} />
        <People handleSaved={person => this.handleSaved( person )} />

      </div>
    );
  }
}

export default App;
