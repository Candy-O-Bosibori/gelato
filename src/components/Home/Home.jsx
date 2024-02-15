import React, { useState, useEffect } from "react";
import Slider from "../Slider";
import Categories from "../Categories";
import Offer from "../Offer";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Candy-O-Bosibori/gelato-API/Products"
    )
      .then((resp) => resp.json())
      .then((items) => setData(items));
  }, []);

  return (
    <div>
      <Slider />

      <Categories data={data} />
      <Offer />
    </div>
  );


}

 

export default Home;
