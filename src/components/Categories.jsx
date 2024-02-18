



import React, { useState, useEffect } from "react";
import Price from "./Price";

function Categories({ data }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // func to add to cart
  const addToCart = (id) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [id]: (prevCartItems[id] || 0) + 1,
    }));
  };

// functo to reduce number of items in cart
  const subFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[id] && updatedCartItems[id] > 0) {
        updatedCartItems[id] -= 1;
      }
      return updatedCartItems;
    });
  };

    // func to remove from cart
  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      delete updatedCartItems[id];
      return updatedCartItems;
    });
  };

  const totalAmount = () => {
    let amount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        const productInfo = data.find((product) => product.id === Number(key));
        if (productInfo) {
          amount += Math.floor(cartItems[key] * productInfo.price);
        }
      }
    }
    return amount;
  };

  return (

    <div className="section px-10 dark:bg-bpdm" id="recipie">
      <div className="flex flex-col items-center dark:bg-card">
        <div className="text-#xl text-center font-bold font-normal">
          <h2 className="font-logo text-cherry text-5xl py-10 dark:text-white">
            {" "}
            Hot Selling Ice Creams
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {data.map((item) => {
            return (
              <div
                className="p-4 shadow-xl dark:shaddow-2xl rounded hover:shadow transition-all duration-300 cursor-pointer"
                key={item.id}
              >
                <img src={item.img} alt="" className="rounded-lg mb-4" />
                <div className="flex items-center justify-between mb-4">
                  <div className="md:text-xl text-[1rem] font-semibold lg:text-2xl dark:text-white">
                    {item.title}
                  </div>
                </div>

                <p className="text-[0.85rem] opacity-70 mb-4 font-normal dark:text-white">
                  {" "}
                  {item.desc}
                </p>
                <div className=" flex items-center justify-between">
                  <Price
                    price={item.price}
                    id={item.id}
                    options={item.options}
                  />
                </div>
                <button
                  className="my-2 uppercase w-56 dark:bg-cb bg-darkcherry dark:bg text-babypink p-2 ring-1 ring-cb hover:ring-darkcherry dark:hover:bg-babypink hover:bg-babypink hover:text-darkcherry rounded-full dark "
                  onClick={() => addToCart(item.id)}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>

        {/* display to cart */}

        <div className="flex  flex-col justify-center items-center dark:bg-bpdm bg-babypink  w-full">
          <h1 className="text-darkcherry font-bold font-logo text-5xl p-10 dark:text-babypink">
            My Cart
          </h1>
          <p className="text-3xl font-bold dark:text-white">Total: {totalAmount()}</p>
          <div className="w-11//12 md:w-7/12 sm:w-11/12">
            {data.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                <div key={product.id}>
                  <div className="py-1 flex justify-between items-center ring-2 w-full px-3 rounded ring-white mb-2">
                    <div className="flex items-center dark:text-white">
                      <img src={product.img} alt="" className="h-20 w-30 dark:text-white" />
                      x<p className="text-2xl font-bold pl-2 sm:text-xs dark:text-white">{cartItems[product.id]}</p>
                      
                    </div>
                    <div className="flex flex-col gap-2 font-bold"> 
                           <button  onClick={() => removeFromCart(product.id)} className="text-darkcherry dark:text-white ring-1 ring-darkcherry dark:ring-white hover:bg-darkcherry hover:text-babypink px-2 py-1 rounded" >REMOVE</button>
                        <button onClick={() => addToCart(product.id)} className="dark:text-white">Add</button>
                        <button onClick={() => subFromCart(product.id)} className="dark:text-white">Reduce</button>
                        </div>
                  </div>
                  <div className="flex item-center space-x-4 italic dark:text-white">
                    <p>{product.title}</p>
                    <p>-</p>
                    <p>{product.price}</p>
                  </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Categories;
