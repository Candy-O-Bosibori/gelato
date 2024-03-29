import React from 'react'
import Offertime from "/src/CountDown.jsx"

function Offer() {
    return (
        <div className="bg-babypink  dark:bg-bpdm h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
        
         
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
            <h1 className="darkcherry text-5xl xl:text-6xl font-logo dark:text-white ">Valentine special</h1>
            <p className="text-darkcherry xl:text-xl dark:text-babypink">
              Progressively simplify effective e-toilers and process-centric methods
              of empowerment. Quickly pontificate parallel.
            </p>
            {/*timer container */}
           <Offertime />
            <button className="tbg-ext-darkcherry text-white rounded-md py-3 px-6 rounded-"></button>
      </div>
          </div>
        
      );
}

export default Offer
