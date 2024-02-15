import Price from "./Price";
import React, { useState } from "react";

function Categories({ data }) {
  const [cartItems, setCartItems] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  });

  const addToCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] + 1 }));

    console.log(cartItems);
  };

  const  subFromCart =(id)=> {
setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] - 1}))
  }

  const  removeFromCart =(id)=> {
    setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] = 0}))
      }

const totalAmount = () => {
  let amount = 0;
  for (const key in cartItems){
    if(cartItems[key]> 0){
      let productInfo = data.find(product=> product.id === Number(key) )
      amount += Math.floor(cartItems[key] * productInfo.price)

    }
   
  }
  return amount;
}

  return (
    <div className="section px-10" id="recipie">
      <div className="flex flex-col items-center">
        <div className="text-#xl text-center font-bold font-normal">
          <h2 className="font-logo text-cherry text-5xl py-10">
            {" "}
            Hot Selling Ice Creams
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {data.map((item) => {
            return (
              <div
                className="p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
                key={item.id}
              >
                <img src={item.img} alt="" className="rounded-lg mb-4" />
                <div className="flex items-center justify-between mb-4">
                  <div className="md:text-xl text-[1rem] font-semibold lg:text-2xl">
                    {item.title}
                  </div>
                </div>

                <p className="text-[0.85rem] opacity-70 mb-4 font-normal">
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
                  className="my-2 uppercase w-56  bg-darkcherry text-babypink p-2 ring-1 hover:ring-darkcherry hover:bg-babypink hover:text-darkcherry rounded-full "
                  onClick={() => addToCart(item.id)}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>

        {/* display to cart */}

        <div className="flex  flex-col justify-center items-center bg-babypink  w-full">
          <h1 className="text-darkcherry font-bold font-logo text-5xl p-10 ">
            My Cart
          </h1>
          <p className="text-3xl font-bold">Total: {totalAmount()}</p>
          <div className="w-8/12">
            {data.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                <>
                  <div className="py-1 flex justify-between items-center ring-2 w-full px-3 rounded ring-white mb-2">
                    <div className="flex items-center">
                      <img src={product.img} alt="" height={100} width={100} />
                      x<p className="text-2xl font-bold pl-2">{cartItems[product.id]}</p>
                      
                    </div>
                    <div className="flex flex-col gap-2 font-bold"> 
                           <button  onClick={() => removeFromCart(product.id)} className="text-darkcherry ring-1 ring-darkcherry hover:bg-darkcherry hover:text-babypink px-2 py-1 rounded" >REMOVE</button>
                        <button onClick={() => addToCart(product.id)}>Add</button>
                        <button onClick={() => subFromCart(product.id)}>Reduce</button>
                        </div>
                  </div>
                  <div className="flex item-center space-x-4 italic">
                    <p>{product.title}</p>
                    <p>-</p>
                    <p>{product.price}</p>
                  </div>
                  </>
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
