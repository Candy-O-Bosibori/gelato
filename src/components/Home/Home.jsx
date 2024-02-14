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

function addItem(id, price, title ){
 const itemData ={
  price: price,
 }
 fetch("https://my-json-server.typicode.com/Candy-O-Bosibori/gelato-API/Products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      // call the onAddItem prop with the newItem
      .then((newItem) => console.log(newItem));
  }

  return (
    <div>
      <Slider />

      <Categories data={data} addItem={addItem}/>
      <Offer />
    </div>
  );


}

 

export default Home;
