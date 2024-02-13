import React from 'react'
import CountDown from "/home/candy/MORINGA/CODE/phase2/gelato/src/CountDown.jsx";


function Offer() {
    return (
        <div className="bg-babypink h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
        
         
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
            <h1 className="darkcherry text-5xl xl:text-6xl font-logo">Valentine special</h1>
            <p className="text-darkcherry xl:text-xl">
              Progressively simplify effective e-toilers and process-centric methods
              of empowerment. Quickly pontificate parallel.
            </p>
            
            <CountDown/>
            <button className="tbg-ext-darkcherry text-white rounded-md py-3 px-6 rounded-"></button>
      </div>
          </div>
        
      );
}

export default Offer
