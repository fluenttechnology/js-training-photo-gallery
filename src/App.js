import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import People from "./components/People";
import ForLater from "./components/ForLater";

class App extends Component {

  constructor() {

    super();
    this.state = { saved: [] };

  }
  handleSaved( person ) {

    // do something useful with the person we want to save
    const saved = this.state.saved;
    saved.push( person );
    this.setState( { saved } );

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

          <iframe title="my video" width="560" height="315" src="https://www.youtube.com/embed/KY0TZQTwwbk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        </p>
        <ForLater saved={ this.state.saved} />
        <People handleSaved={person => this.handleSaved( person )} />

      </div>
    );
  }
}

export default App;
