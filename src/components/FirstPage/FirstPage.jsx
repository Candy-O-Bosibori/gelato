

import { Link } from "react-router-dom";

export default function FirstPage() {
 

  return (
    <div className="bg-babypink h-full dark:bg-bpdm">
      <div className=" ">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-[100px] lg:text-[250px] font-logo tracking-tight text-darkcherry dark:text-babypink ">
              Gelato
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
              Step into a world of frozen bliss at Galeto. From
              classic flavors to daring concoctions, we're here to satisfy your
              cravings with every scoop. Indulge in our artisanal creations and
              let your taste buds dance with delight. Welcome to a world where
              every bite is a moment of pure joy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to ="register"
                className="rounded-full bg-darkcherry dark:bg-babypink dark:text-darkcherry dark:shadow-lg px-10 py-2.5 text- font-semibold text-white shadow-sm hover:bg-white  hover:text-darkcherry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:darkcherry"
              >
                Get started
              </Link>
              <Link
                to="About"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Learn More<span aria-hidden="true">→</span>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
