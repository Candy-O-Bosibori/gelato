import React from 'react'

function Slider() {
  return (
    <div className="flex flex-col h-[clac(100vh-6rem)] md:h-[clac(100vh-9rem)] lg:flex-row " >
        {/* text containerr */}
      <div className=" flex-1 flex items-center justify-center flex-col gap-8 text-darkcherry bg-babypink font-normal ">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl font-normal">Let's Talk Ice cream :)</h1>
        <button className="bg-darkcherry text-babypink py-4 px-8 rounded-full font-normal">Try Now...</button>
      </div>
      {/* image containerr */}
      <div className="flex-1 w-full relative">
        <img src="./MainHome.png" alt=""  className="object-cover"/>
      </div>
    </div>
  )
}

export default Slider
