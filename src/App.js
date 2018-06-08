import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import People from "./components/People";
import ForLater from "./components/ForLater";


import { saveForLater, fetchForLater } from "./agents/my-api";

class App extends Component {

  constructor() {

    super();
    this.state = { saved: [] };
    fetchForLater().then( resp => {

      if ( !resp.ok ) { throw new Error( "Save failed :(" ); }
      return resp.json();

    } ).then( json => {

      const saved = json.map( ( [ _, person ] ) => person );
      this.setState( { saved } );

    } );

  }
  handleSaved( person ) {

    saveForLater( person ).then( resp => {

      if ( !resp.ok ) { throw new Error( "Save failed :(" ); }

    } ).then( () => {

      const saved = this.state.saved;
      saved.push( person );
      this.setState( { saved } );

    } ).catch( ex => {

      alert( ex.message );

    } );

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
