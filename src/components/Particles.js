import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <Particles
        className="particles-canvas"
        id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={
                {
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 1
                    },
                    "particles": {
                        "number": {
                            "value": 6,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#1b1e34"
                        },
                        "shape": {
                            "type": "polygon",
                            "polygon": {
                                "sides": 6
                            }
                        },
                        "opacity": {
                            "value": 0.4,
                            "random": {
                                "enable": true,
                                "minimumValue": 0.2
                            },
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 160,
                            "random": {
                                "enable": true,
                                "minimumValue": 100
                            },
                            "anim": {
                                "enable": false,
                                "speed": 5,
                                "size_min": 40,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 200,
                            "color": "#ffffff",
                            "opacity": 1,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 5,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "duration": 2,
                                "size": 40,
                                "opacity": 0.8,
                                "speed": 3,
                                "color": "#2f74ad"
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "background": {
                        // "color": "#efefef",
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover"
                    }
                }
            }
        />
    )
}

export default Particle