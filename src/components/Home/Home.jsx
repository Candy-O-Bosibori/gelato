import React from "react";
import Slider from "../Slider";
import Categories from "../Categories";
import Offer from "../Offer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { SiteData } from "../SiteWrapper";
import SignOut from "../SignOut";

function Home() {
  const { data } = SiteData();

  return (
    <div>
      <Slider />
      <Categories data={data} />
      <Offer />
      <SignOut/>
    </div>
  );
}

export default Home;
