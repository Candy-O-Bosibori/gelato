import { useState } from "react";

import { Link } from "react-router-dom";

export default function FirstPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-babypink h-full">
      <div className=" ">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-[100px] lg:text-[250px] font-logo tracking-tight text-darkcherry ">
              Gelato
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Step into a world of frozen bliss at [Your Website Name]. From
              classic flavors to daring concoctions, we're here to satisfy your
              cravings with every scoop. Indulge in our artisanal creations and
              let your taste buds dance with delight. Welcome to a world where
              every bite is a moment of pure joy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to ="register"
                className="rounded-full bg-darkcherry  px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-darkcherry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:darkcherry"
              >
                Get started
              </Link>
              <Link
                to="login"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log In<span aria-hidden="true">→</span>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
