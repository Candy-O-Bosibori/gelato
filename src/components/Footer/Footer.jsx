import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-20 text-babypink flex items-center justify-between bg-cherry">
      <Link href="home page" className="font-logo  font-bold text-3xl" > Gelato</Link>
      <p> © Copyright// all rifghts reserved</p>
    </div>
  )
}

export default Footer
