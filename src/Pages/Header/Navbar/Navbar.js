import React from 'react';
import Header from '../Header';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import css from './Navbar.css'

const Navbar = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <div className='nav-container'>
            <div className='particles'>

                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{

                        fullScreen: {
                            enable: true,
                            zIndex: 0
                        },
                        particles: {
                            number: {
                                value: 20,
                                limit: 100,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "images/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 1,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.5,
                                    sync: false
                                }
                            },
                            size: {
                                value: 20,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 5,
                                    size_min: 15,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 50,
                                color: "#ffffff",
                                opacity: 1,
                                width: 0.5
                            },
                            move: {
                                enable: true,
                                speed: 2,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "circle",
                                    parallax: {
                                        enable: true,
                                        force: 100,
                                        smooth: 10
                                    }
                                },
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    lineLinked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 400,
                                    size: 10,
                                    duration: 2,
                                    opacity: 1,
                                    speed: 2
                                },
                                repulse: {
                                    distance: 200
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        backgroundMask: {
                            enable: true,
                            cover: {
                                color: {
                                    value: {
                                        r: 246,
                                        g: 226,
                                        b: 249
                                    }
                                }
                            }
                        },
                        retina_detect: true,
                        fps_limit: 60,
                        background: {
                            image: "url('https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
                        }
                    }}
                />
            </div>

            {/* <div>
                <Header></Header>

            </div> */}

        </div>
    );
};

export default Navbar;