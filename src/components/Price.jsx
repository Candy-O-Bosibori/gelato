import React, { useEffect, useState } from "react";


function Price({ price, id, options }) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold "> KES {total.toFixed(2)}</h2>
      {/* options */}
      <div className="flex gap-4">
        {options.map((option, index) => (
          <button
            className="min-w-[6rem] p-1 ring-1 ring-darkcherry text-darkcherry rounded-md"
            key={option.titile}
            style={{
              background: selected === index ? "#460d19" : "white",
              color: selected === index ? "white" : "#460d19",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div > 
      {/* quantity */}
      <div className="flex  justify-between items-center ring-darkcherry">
        <div className="flex justify-between w-full p-3 ring-1 ring-darkcherry">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>{"<"}</button>
            <span>{quantity}</span>
            <button  onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}>{">"}</button>
          </div>
        </div>
        {/* cart */}
      </div>
      <button className="uppercase w-56  bg-darkcherry text-babypink p-2 ring-1 hover:ring-darkcherry hover:bg-babypink hover:text-darkcherry rounded-full ">
        Add to Cart
      </button>
    </div>
  );
}

export default Price;
