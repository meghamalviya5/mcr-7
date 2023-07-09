import React from "react";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../db/data";

const Countries = () => {
  const { continentID } = useParams();

  const continent = data.continents.find(
    (cont) => cont.id === Number(continentID)
  );

  return (
    <div>
      <div>
        <h2 className="header">
          {`Top Countries in ${continent.name} for youe next holiday`}
        </h2>
        <div className="container flex flex-gap-4">
          {continent.countries.map(({ id, image, name }) => (
            <Link
              to={`/destinations/${continent.id}/${id}`}
              className="card relative text-white"
            >
              <img src={image} alt="continent" className="card-img" />
              <div className="flex absolute name-display pl-s">
                <FontAwesomeIcon icon={faLocationDot} />
                <h3 className="m-0">{name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
