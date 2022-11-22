import React from 'react'
import "./Section2.css"
import gsap from 'gsap';
import {useRef, useEffect} from 'react'

const Section2 = () => {

    const spin1 = useRef(null);
    const spin2 = useRef(null);
    const anExperience = useRef(null);
    const toNeverForget = useRef(null)

useEffect(() => {
    const element1 = spin1.current;
    const element2 = spin2.current;
    const element3 = anExperience.current;
    const element4 = toNeverForget.current;

    // Circle Brand Animation
    gsap.fromTo(element1, {x: -1500}, {x: 0, rotation: 360, 
        scrollTrigger:{
            trigger: element2,
            toggleActions:"restart reset resume none",
            scrub: true
        }
    }, "0.5")

    gsap.fromTo(element2, {x: -1500}, {x: 0, rotation: 360, 
        scrollTrigger:{
            trigger: element2,
            toggleActions:"restart reset resume none",
            scrub: 3
        }
    }, "0.5")


     // An Experience to Never Forget Animation
     gsap.fromTo(element3, {x: 0}, { ease: "easeIn.power3",
        scrollTrigger:{
            trigger: element3,
            scrub: true
        }
    })

    gsap.fromTo(element4, {x: 0}, { ease: "easeIn.power3",
        scrollTrigger:{
            trigger: element4,
            scrub: true
        }
    })
}, [])


  return (
    <div className='h-fit sm:pb-5 p-[1vw]'>
         <div className='pr-[0.5vw]'>
            <div className='passionLogoContnr mb-2'>

            <div className='logos relative flex justify-end '>
            <div className='passionLogo1 mr-10 pb-1'>
                        <div className='h-20 w-20 xl:h-24 xl:w-24 3xl:h-32 3xl:w-32 4xl:h-40 4xl:w-40 6xl:h-48 6xl:w-48 rounded-full border-zinc-700 border-2 3xl:border-4 4xl:border-[6px] bg-transparent' ref={spin1}>
                        <div className='h-16 w-16 xl:h-20 xl:w-20 3xl:h-24 3xl:w-24 4xl:h-32 4xl:w-32 6xl:h-40 6xl:w-40 rounded-full border-zinc-700 border-2 3xl:border-4 4xl:border-[6px] bg-transparent'>
                            <div className='w-12 h-12 xl:h-16 xl:w-16 3xl:h-20 3xl:w-20 4xl:h-24 4xl:w-24 6xl:h-32 6xl:w-32 rounded-full border-zinc-700 border-2 3xl:border-4 4xl:border-[6px] bg-transparent'>
                                <div className='w-10 h-10 xl:h-12 xl:w-12 3xl:h-16 3xl:w-16  6xl:h-24 6xl:w-24 rounded-full bg-zinc-700 flex justify-center items-center animate-spin'>
                                    <div className='w-1 h-3 xl:w-1 xl:h-5 3xl:h-6 3xl:w-2 6xl:h-8 6xl:w-2 bg-black'></div>
                                    <div className='w-3 h-1 xl:w-5 xl:h-1 3xl:h-2 3xl:w-6 6xl:h-2 6xl:w-8 bg-black'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>


            <div className='passionLogo2 absolute mr-10 pb-1 z-20'>
                        <div className='h-20 w-20 xl:h-24 xl:w-24 3xl:h-32 3xl:w-32 4xl:h-40 4xl:w-40 6xl:h-48 6xl:w-48  rounded-full border-stone-400 border-2 3xl:border-4 4xl:border-[6px] bg-transparent' ref={spin2}>
                        <div className='h-16 w-16 xl:h-20 xl:w-20 3xl:h-24 3xl:w-24 4xl:h-32 4xl:w-32 6xl:h-40 6xl:w-40 rounded-full border-stone-400 border-2 3xl:border-4 4xl:border-[6px] bg-transparent'>
                            <div className='w-12 h-12 xl:h-16 xl:w-16 3xl:h-20 3xl:w-20 4xl:h-24 4xl:w-24  6xl:h-32 6xl:w-32 rounded-full border-stone-400 border-2 3xl:border-4 4xl:border-[6px] bg-transparent'>
                                <div className='w-10 h-10 xl:h-12 xl:w-12 3xl:h-16 3xl:w-16 6xl:h-24 6xl:w-24 rounded-full bg-stone-400 flex justify-center items-center animate-spin'>
                                    <div className='w-1 h-3 xl:w-1 xl:h-5 3xl:h-6 3xl:w-2 6xl:h-8 6xl:w-2 bg-stone-700'></div>
                                    <div className='w-3 h-1 xl:w-5 xl:h-1 3xl:h-2 3xl:w-6 6xl:h-2 6xl:w-8  bg-stone-700'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

                    <div className='passion flex justify-end'>
                        <div className='appFont font-light text-stone-400 text-[3.7vw]'>Passion is always a reason </div>
                    </div>
                </div>
            </div>



        <div className='appFont writeUp font-bold text-[6.9vw] text-stone-400'>
            <div className='line flex justify-center'>
                <div className='hline bg-stone-400 h-0.5 w-11/12'></div>
            </div>

            <div>
                <div className='chiefContainer text-zinc-700 text-xs font-semibold mt-3 sm:text-sm md:text-base 2xl:text-2xl 4xl:text-3xl 7xl:text-4xl  sm:font-bold lg:font-extrabold'>
                    <span className='chief'>
                        THE CLAN CHIEF
                    </span>
                </div>
                <div className='statement flex justify-end mb-5 md:mb-7 xl:mb-10 mt-4 sm:mt-6 lg:mt-10 tracking-tight' ref={anExperience}>
                    <h1>GIVE 'EM AN EXPERIENCE </h1>
                </div>
            </div>

            <div className='line flex justify-center'>
                <div className='hline bg-stone-400 h-0.5 w-11/12'></div>
            </div>

            <div>
                <div className='chiefContainer text-zinc-700 text-xs font-semibold mt-3 sm:text-sm  md:text-base 2xl:text-2xl 4xl:text-3xl 7xl:text-4xl sm:font-bold lg:font-extrabold'>
                    <span className='chief'>
                        THE CLAN CHIEF
                    </span>
                </div>
                <div className='statement mb-5 md:mb-7 xl:mb-10 mt-4 sm:mt-6 lg:mt-10 tracking-tight' ref={toNeverForget}>
                    <h1>SOMETHING TO NEVER FORGET </h1>
                </div>
            </div>

            <div className='line flex justify-center'>
                <div className='hline bg-stone-400 h-0.5 w-11/12'></div>
            </div>
        </div>
    </div>
  )
}

export default Section2