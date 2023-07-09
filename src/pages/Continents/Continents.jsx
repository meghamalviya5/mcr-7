import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { data } from "../../db/data";
import "../../styles.css";
import { Link } from "react-router-dom";

const Continents = () => {
  return (
    <div>
      <h1 className="header">Welcome To Trip Advisor</h1>
      <h2 className="sub-header">Top Continents for your next holiday</h2>
      <div className="container flex flex-gap-4">
        {data.continents.map(({ id, image, name }) => (
          <Link to={`/countries/${id}`} className="card relative text-white">
            <img src={image} alt="continent" className="card-img" />
            <div className="flex flex-gap-2 absolute name-display pl-s pb-m items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <h3 className="m-0">{name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Continents;
