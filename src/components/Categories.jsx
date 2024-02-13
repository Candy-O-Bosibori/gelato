import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Candy-O-Bosibori/gelato-API/Products"
    )
      .then((resp) => resp.json())
      .then((items) => setData(items));
  }, []);

  return (
    <div className="section" id="recipie">
      <div className="flex flex-col items-center">
        <div className="text-#xl text-center font-bold font-normal">
          <h2 className="text-normal text-cherry"> Hot Selling Ice Creams</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {data.map((item) => {
            return (
              <div className="p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer" key={item.id}>
                <img src={item.img} alt="" />

                <span className="btn cursor-pointer p-2 ">View more details</span>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default Categories;
