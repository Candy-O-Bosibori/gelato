
import Price from "./Price";

function Categories({data, addItem}) {
 
  
function handleAddToCart(id, price){

  const singleItem = data.map(item=> item)

  if (singleItem.id === id){
  addItem(id, price, singleItem.title)

  }
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

                <p className="text-[0.85rem] opacity-70 mb-4 font-normal"> {item.desc}</p>
                <div className=" flex items-center justify-between">
                  <Price price={item.price} id={item.id} options={item.options} addToCart={handleAddToCart}/>
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
