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
            className="min-w-[6rem] p-1 ring-1 ring-darkcherry dark:bg-card text-darkcherry rounded-md"
            key={option.title}
            style={{
              background: selected === index ? "#320307" : "white",
              color: selected === index ? "white" : "#460d19",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div > 
      {/* quantity */}
   
     
    </div>
  );
}

export default Price;
