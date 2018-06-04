import React from "react";
import PersonDetails from "./PersonDetails";
import "./ForLater.css";

const ForLater = ( { saved } ) => <section className="people-for-later">

  <h3>For later</h3>
  {saved.map( ( person, i ) =>

    <PersonDetails key={i} person={person} />

  )}

</section>

export default ForLater;