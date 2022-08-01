import {React, useState } from "react";
import { Howl, Howler } from "howler"; 
import guhhuhsound from "../sounds/guhhuh.mp3";
import { useTransition, animated, Transition } from "react-spring";
import guhhuhicon from "../imgs/guhhuh.png";


const Guhhuh = () => {
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: { x:0, y: 800, opacity: 0 },
        enter: { x:0, y: 0, opacity: 1 },
        leave: { x:0, y: 800, opacity: 0 },
    });

    // Does not play sound yet. Need to figure out how to get it to not autoplay/click when component is loaded
    const guhhuhSfx = new Howl({
            volume: 0.6,
            src: guhhuhsound,
            preload: false,
        });
    

  return (
    <div className="guhhuh-sound-container">
        <div className="guhhuh-toggle">
            <button onClick={() => {
            setIsVisible(v => !v);
        }}>{isVisible ? 'Hide' : 'Display'}</button>
        </div>
        <div className="guhhuh-button-container">
            {transition((style, item) => 
                item ? <animated.div style={style} className="guhhuh-button" onClick={guhhuhSfx.load()}>
                </animated.div> : ''
            )}
        </div>
    </div>
  )
}

export default Guhhuh