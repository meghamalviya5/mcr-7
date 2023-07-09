import React from "react";
import { Link, useParams } from "react-router-dom";
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

  const {
    name,
    description,
    image,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = destination;

  //   description:
  //                 "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna river in the Indian city of Agra.",
  //               image: "https://i.postimg.cc/Xq6RrjCL/tajMahal.jpg",
  //               ratings: 4.5,
  //               reviews: 250,
  //               location: "Agra, India",
  //               openingHours: "6:00 AM - 7:00 PM",
  //               ticketPrice: "$20",
  //               website: "https://example.com/taj_mahal"
  return (
    <div>
      <h1>{name}</h1>
      <div className="flex flex-gap-4 des-details">
        <div>
          <img src={image} alt="" className="detail-img" />
        </div>
        <div className="text-left">
          <p>
            <span>Description:</span> {description}
          </p>
          <p>
            <span>Ratings:</span> {ratings}
          </p>
          <p>
            <span>Reviews:</span> {reviews}
          </p>
          <p>
            <span>Location:</span> {location}
          </p>
          <p>
            <span>Opening Hours:</span> {openingHours}
          </p>
          <p>
            <span>Ticket Price:</span> {ticketPrice}
          </p>
          <Link to={website} className="website-link" target="_blank">
            Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
