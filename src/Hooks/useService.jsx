import axios from "axios";
import { useEffect, useState } from "react";

const useService = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-rosy-seven.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return cards;
};

export default useService;
