import React from "react";
import { Howl, Howler } from "howler"; 
import guhhuhicon from "../imgs/guhhuh.png";
import guhhuhsound from "../sounds/guhhuh.mp3";

const Guhhuh = () => {
    const soundSrc = guhhuhsound;

    const guhhuhSfx = (src) => {
        const sound = new Howl({
            src,
            playing: true,
            preload: true,
        });
        sound.play();
    };
    
  return (
    <div className="guhhuh-sidebar-container">
        <aside className="guhhuh-sidebar">
            <input type={"image"} src={guhhuhicon} onClick={guhhuhSfx(soundSrc)} ></input>
        </aside>
    </div>
  )
}

export default Guhhuh