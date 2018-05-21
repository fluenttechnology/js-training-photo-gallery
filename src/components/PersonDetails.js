import React from 'react';
import "./PersonDetails.css";

const PersonDetails = ( { person, handleSaved, children } ) => <div className="person-details">

    <p>{person.name} {person.surname}</p>
    <p><span>Region:</span>{person.region}</p>
    <img alt={person.name + "'s photo"} src={person.photo} />
    {children}

</div>;
export default PersonDetails;