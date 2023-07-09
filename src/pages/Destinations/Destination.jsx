import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../db/data";
import { Link, useParams } from "react-router-dom";

const Destination = () => {
  const { continentID, countryID } = useParams();

  const continent = data.continents.find(
    (cont) => cont.id === Number(continentID)
  );
  const country = continent.countries.find(
    (country) => country.id === Number(countryID)
  );

  return (
    <div>
      <div>
        <div>
          <h2 className="header">
            {`Top Destinations in ${country.name} for your next holiday`}
          </h2>
          <div className="container flex flex-gap-4">
            {country.destinations.map(({ id, image, name }) => (
              <Link
                to={`/destination-details/${continent.id}/${country.id}/${id}`}
                className="card relative text-white"
              >
                <img src={image} alt="destination" className="card-img" />
                <div className="flex flex-gap-2 absolute name-display pl-s pb-m items-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h3 className="m-0">{name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
