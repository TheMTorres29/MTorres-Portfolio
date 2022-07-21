import React from "react";
import Particles from "../components/Particles";
import SmashInfo from "../components/SmashInfo";
import SmashBanjo from "../components/SmashBanjo";
import ImgCarousel from "../components/ImgCarousel";

function Smash() {
  return (
    <>
      <Particles/>
      <SmashBanjo/>
      <ImgCarousel/>
      <SmashInfo/>
    </>
  )
}

export default Smash