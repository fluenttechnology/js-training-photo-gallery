import React, { Component } from 'react';
import PersonDetails from "./PersonDetails";

class People extends Component {

    constructor() {

      super();
      this.state = {};
      this.callAPI();

    }
    callAPI() {

      fetch( "https://uinames.com/api/?ext&amount=3" )
        .then( response => response.json() )
        .then( data => this.setState( { data } ) );

    }
    renderLoading() {

      return <div>Loading...</div>;

    }
    renderData() {

      return <div className="list-of-peeps">

        <p>
          <button onClick={() => this.callAPI()}>Generate</button>
        </p>
        {this.state.data.map( ( person, i ) =>

            <PersonDetails key={i} person={person}>

                <p><button onClick={() => this.props.handleSaved(person)}>Save</button></p>

            </PersonDetails>

        )}

      </div>;

    }
    render() {

      if( this.state.data ) {

        return this.renderData();

      } else {

        return this.renderLoading();

      }

    }

  }

  export default People;
