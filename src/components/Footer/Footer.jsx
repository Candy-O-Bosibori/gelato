import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    // footer info
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-20 text-babypink dark:bg-cherryDarkmode flex items-center justify-between bg-cherry">
      <Link href="home page" className="font-logo  font-bold text-3xl" > Gelato</Link>
      <p> © Copyright /ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer
