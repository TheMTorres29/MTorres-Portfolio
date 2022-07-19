import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import ImgItem from "./ImgItem";
import Image1 from "../imgs/img-glssetup.jpg";
import Image2 from "../imgs/img-glsgame.jpg";
import Image3 from "../imgs/img-glspin.jpg";
import Image4 from "../imgs/img-glsscreen.jpg";
import Image5 from "../imgs/img-glsstream.jpg";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 3 },
];

const imgAnimations = [
    {enableAutoPlay: true},
    {autoPlaySpeed: 5000},
    {transitionMs: 700}
]

function ImgCarousel() {
    const [items, setItems] = useState([Image1, Image2, Image3, Image4, Image5]);

    return (
        <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints} className="img-carousel"
            imgAnimations={imgAnimations}
            >
                {items.map((item) => (
                    <ImgItem key={item}><img src={item}/></ImgItem>
                ))}
            </Carousel>
        </div>
    )
}

export default ImgCarousel;