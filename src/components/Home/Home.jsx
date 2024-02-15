import React, { useState, useEffect } from "react";
import Slider from "../Slider";
import Categories from "../Categories";
import Offer from "../Offer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
      <Header />
      <Slider />
      <Categories data={data} />
      <Offer />
      <Footer />
    </div>
  );
}

export default Home;
