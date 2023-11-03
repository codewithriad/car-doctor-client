import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ card }) => {
  const { _id, img, title, price } = card;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>

        <div className="card-actions justify-between items-center">
          <p className="text-[#ff3811] text-xl font-semibold">
            Price : {price}
          </p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn bg-[#ff3811] text-white">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
