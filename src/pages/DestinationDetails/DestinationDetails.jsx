import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../db/data";

const DestinationDetails = () => {
  const { continentID, countryID, destinationID } = useParams();

  const continent = data.continents.find(
    (cont) => cont.id === Number(continentID)
  );
  const country = continent.countries.find(
    (country) => country.id === Number(countryID)
  );
  const destination = country.destinations.find(
    (des) => des.id === Number(destinationID)
  );

  return (
    <div>
      <h1>{destination.name}</h1>
      <div>
        <div>{destination.image}</div>
        <div></div>
      </div>
    </div>
  );
};

export default DestinationDetails;
