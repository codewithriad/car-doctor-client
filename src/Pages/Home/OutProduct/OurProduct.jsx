import React, { useEffect, useState } from "react";
import PopularProducts from "./PopularProducts";

const OurProduct = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-rosy-seven.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-5 mt-32">
        <h3 className="text-orange-600 font-semibold text-base">
          Popular Products
        </h3>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p className="text-[#737373] text-base max-w-[717px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {cards.map((card) => (
          <PopularProducts key={card._id} card={card} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-error mt-12 font-semibold text-base">
          More Services
        </button>
      </div>
    </div>
  );
};

export default OurProduct;
