import React from "react";
import Particles from "../components/Particles";
import SmashInfo from "../components/SmashInfo";
import SmashBanjo from "../components/SmashBanjo";
import ImgCarousel from "../components/ImgCarousel";
import GuhHuhBtn from "../components/Guhhuh";

function Smash() {
  return (
    <>
      <Particles/>
      <GuhHuhBtn/>
      <SmashBanjo/>
      <ImgCarousel/>
      <SmashInfo/>
    </>
  )
}

export default Smash