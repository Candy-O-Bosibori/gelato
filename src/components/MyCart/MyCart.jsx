
import React from 'react'

function MyCart({cartItems, data}) {

    
    return (
      <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col ">
        {/* product container */}
        <div className="p-8 bg-babypink">
          {/* single item */}
          <div className="flex items-center justify-between mb-4">
          { data.map(product => {
              if(cartItems[product.id > 0]){
                return (
                  <div  className="flex items-center justify-between mb-4">
                  <img src={product.img} width={100} height={100}/>
                  <h1 className="uppercase text-xl font-bold">{product.title}</h1>
                  <h2 className="font-bold">$79.90</h2>
                  <span className="cursor-pointer">X</span>
  
                  
                  </div>
                )
              }
            })
            }
          </div>
        
        </div>
      </div>
    );
  }
  

export default MyCart
