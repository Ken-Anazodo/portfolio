import React from 'react';
import './Section1.css';
import gsap from 'gsap';
import img2 from "./img/img2.jpeg";
import {useRef, useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




export default function Section1() {
   const artDirRef= useRef(null);  
   const provideSupportRef= useRef(null);
   const availForCollabRef = useRef(null);
   const basedInNigRef = useRef(null);
   const bar = useRef(null);
   const scroll = useRef(null);
   const brand = useRef(null);
   const front = useRef(null);
   const frontend = useRef(null);
   const developer = useRef(null);
//    const dev = useRef(null)
   const evolve = useRef(null);
   const letsKeepSection = useRef(null);
   const artRef = useRef(null);
   const interactiveRef = useRef(null);
   const conceptRef = useRef(null);





//    For Text Effect in Frontend Section 
    useEffect(() => {
        const el = provideSupportRef.current;
        const el2 = artDirRef.current;
        const el3 = availForCollabRef.current;
        const el4 = basedInNigRef.current;
        const el5 = bar.current;
        const el6 = scroll.current;
        const el7 = front.current;
        const el16 = developer.current;
        const el17 = frontend.current;
        const el13 = artRef.current;
        const el14 = interactiveRef.current;
        const el15 = conceptRef.current;
        const frontDev = el7.getElementsByClassName("dev");

        // Animation for FRONTEND DEVELOPMENT
        // gsap.fromTo(el17, {x: -150 }, {x: 0, ease: "none", 
        // scrollTrigger: {
        //     trigger: el17,
        //     scrub: true
        // }})

        // gsap.fromTo(el16, {x: 0}, {x: -100, ease: "none", 
        // scrollTrigger: {
        //     trigger: el16,
        //     scrub: true
        // }})

        // Animation for ArtDirectionAndCo
        gsap.fromTo(el13, {x: -30}, {x: 0, ease: "none", 
        scrollTrigger: {
            trigger: el7,
            scrub: true
        }})

        gsap.fromTo(el14, {x: -10}, {x: 0, ease: "none", 
        scrollTrigger: {
            trigger: el13,
            scrub: true
        }})

        gsap.fromTo(el15, {x: -25}, {x: 0, ease: "none", 
        scrollTrigger: {
            trigger: el13,
            scrub: true
        }})
        
        let tl= gsap.timeline({defaults:{opacity:1, duration: 1},});
            tl.fromTo(frontDev, {opacity:0, x: -30}, {opacity:1, x: 0, stagger: "0.1", ease: "power4"}, "0.1")
            .fromTo(el2, {opacity:0, y: 30}, {opacity:1, y: 0, ease: "power4"}, "0.7")
            .fromTo(el5, {opacity:0, y: 30}, {opacity:1, y: 0, ease: "elastic(1, 0.3)"},"0.9")
            .fromTo(el, {opacity:0, y: 30}, {opacity:1, y: 0, ease: "power4"}, "1.1")
            .fromTo(el3, {opacity:0, y: 30}, {opacity:1, y: 0, ease: "power4"}, "1.3")
            .fromTo(el4, {opacity:0, y: 30}, {opacity:1, y: 0, ease: "power4"}, "1.4")
            .fromTo(el6, {opacity:0, x: 30}, {opacity:1, x: 0, ease: "power4"}, "1.6")       
    }, [])



    // For Logo Section
    useEffect(() => {
        const el9 = brand.current;
        

        
            gsap.fromTo(el9, {x: -1500}, {x: 0, rotation: 360, duration: 2, transition: 0.2, 
                scrollTrigger:{
                    trigger: el9,
                    toggleActions:"restart reset resume none",
                }
            }, "0.5")
            
    }, [])

    // For About Section
    useEffect(() => {
       const el10 = evolve.current;
       const el11 = letsKeepSection.current;

        let tl1 = gsap.timeline({
            
        })

       tl1.fromTo(el10, {opacity:0, y: 30}, {opacity:1, y: 0, ease: "none", duration: 2, 
            scrollTrigger:{
                trigger: el10,
                start: "10px 90%",

            }},"0.2")
        .fromTo(el11, {opacity:0, y: 30}, {opacity:1, y: 0, ease: "none", duration: 2, 
            scrollTrigger:{
                trigger: el11,
                start: "30px 90%",
                // markers: true,

            }},'0.5')
    }, [])
    
    

    
  return (
    // FRONTEND SECTION
    <div className='pb-36 sm:pb-44 3xl:pb-64 5xl:pb-40'>
        <div>
        <div className='front items-center sm:flex text-stone-200 ml-2  font-black sm:mb-[12vw] md:mb-[13.5vw]' ref={front}>
            <div className='contFrontandScrl mt-2 sm:flex sm:justify-between sm:items-center sm:relative'>
                <div className='fed fed1 flex tracking-tighter flex-wrap pt-2 sm:text-[13vw] text-[85px]' ref={frontend}>
                    
                    <span className='fed fed1 flex flex-wrap'>
                        <h1 className='dev hover:text-stone-400'>F</h1>
                        <h1 className='dev hover:text-stone-400'>R</h1>
                        <h1 className='dev hover:text-stone-400'>O</h1>
                        <h1 className='dev hover:text-stone-400'>N</h1>
                        <h1 className='dev hover:text-stone-400'>T</h1>
                    </span>

                    <span className='fed flex flex-wrap'>
                        <div className='dev'>-</div>
                        <h1 className='dev hover:text-stone-400'>E</h1>
                        <h1 className='dev hover:text-stone-400'>N</h1>
                        <h1 className='dev hover:text-stone-400'>D</h1>
                    </span>
                </div> 
                <div className='scrl [display:none] sm:[display:flex] sm:text-xs sm:h-[48px] md:h-16 2xl:h-[90px] md:text-base 2xl:text-[22px] text-black p-1 scroll bg-zinc-700 tracking-tighter' ref={scroll}>SCROLL</div>
            </div>

            <div className='fed fed2 flex flex-wrap tracking-tight sm:text-[16.8vw] text-[105px] sm:absolute sm:top-[11.9vw] md:top-[11.4vw] lg:top-[10.8vw] 2xl:top-[10.3vw] 6xl:top-[10vw]' ref={developer}>
                <h1 className='dev hover:text-stone-400  xl:h-72 h-24'>D</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>E</h1>
                <h1 className='dev text-stone-400 hover:text-stone-200 xl:h-72 h-24'>V</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>E</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>L</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>O</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>P</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>E</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>R</h1>
            </div>
        </div>
        </div>
        <div className='appFont font-bold stag text-stone-300 flex justify-end mr-2 mt-4 sm:mt-4 md:mt-8 lg:mt-11 xl:mt-48 pr-2 2xl:mb-6 3xl:mb-9 6xl:mb-14' ref = {basedInNigRef}>
            <div className='text-sm lg:text-[1.7vw]'>BASED IN NIGERIA</div>
        </div>

        {/* ART DIRECTION SEC */}
        <div className='lg:flex items-center lg:justify-between 3xl:mt-5'>
        <div className='artDirectionAndCo flex items-center'>
            <div className='artDirectionAndCo1 stag text-stone-400 text-[5.4vw] sm:text-[4.5vw] leading-none lg:[line-height:4.1vw] sm:ml-10 mt-5 2xl:mt-9 ml-3' ref= {artDirRef}>
                <div className='hover:text-stone-200' ref={artRef}>ART DIRECTION</div>
                <div className='text-stone-200 hover:text-zinc-700' ref={interactiveRef}>INTERACTIVE</div>
                <div className='hover:text-stone-200' ref={conceptRef}>CONCEPT DESIGN</div>
            </div>

            <div>
                <div className='w-20 h-3 lg:h-[1.55vw] xl:w-[12.5vw] bg-zinc-700' ref={bar}></div>
            </div>
        </div>

        <div className='iProvSupport flex justify-end text-stone-400 mt-4 2xl:mt-8'>
               <span className='iProvSupport1 appFont font-semibold stag  text-[3.0vw] sm:text-[2.8vw] leading-none ml-3 xl:text-[1.9vw] w-[70vw] sm:w-[28vw] xl:w-[20vw] xl:leading-none lg:mr-[10vw] xl:mr-[16vw] sm:mr-40 sm:ml-20' ref= {provideSupportRef}> 
                   I PROVIDE SUPPORT TO DESIGNERS
                   AND AGENCIES WITH CREATIVE DEVELOPMENT
               </span> 
            </div>
        </div>


        {/* THE BALL, EVOLVE AND AVAIL FOR COLLAB SEC */}
        <div className='cBrandandAvailCollabContainer flex justify-center flex-col pr-2 6xl:mb-9 7xl:mt-6 7xl:mb-14'>
        <div className='flex items-center'>

        <div className='cBrand mt-5' ref={brand}>
        <div className='c0 c1 h-36 w-36 rounded-full border-stone-200 border-8 bg-transparent ml-4'>
            <div className='c0 c2 h-28 w-28 rounded-full border-stone-200 border-8 bg-transparent'>
                <div className='c0 c3 h-20 w-20 rounded-full border-stone-200 border-8 bg-transparent'>
                    <div className='c0 c4 h-12 w-12 rounded-full border-8 bg-stone-200 flex justify-center items-center animate-spin'>
                        <div className='cLong h-4 w-1 bg-stone-700 z-0'></div>
                        <div className='cShort h-1 w-4 bg-stone-700 z-10'></div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className='evolve text-stone-300 ml-10 mt-36 text-3xl xl:text-[2.4vw]' ref={evolve}>evolve</div>
        </div>
        <div className='availCollab appFont font-bold xl:text-[1.9vw] stag text-stone-300 mt-10 ml-10 md:ml-56 xl:ml-20 1xxl:ml-56 3xl:ml-32 5xl:ml-20 6xl:ml-56 7xl:ml-32 mr-2' ref = {availForCollabRef}>
            <div>AVAILABLE FOR COLLABORATION</div>
        </div>
        </div>


        {/* ABOUT AND CHINEESE SECTION */}
        <div className='flex justify-start pr-5'>
        <div className='flex justify-center flex-wrap xl:flex-nowrap'>

        <div className='aboutAndChinseCont flex flex-row'>
        <div className='ml-7 4xl:ml-9 7xl:ml-14 text-base  sm:w-96 xl:text-[1.25vw] xl:w-[25vw] leading-normal'>
            <div className='appFont font-light md:font-bold text-stone-400 mt-11 2xl:mt-20'>
               <h1 className='font-extrabold xl:text-[1.4vw]'>ABOUT</h1> 
               <p>
                 I am a developer based in Lagos, Nigeria 
                focused on creating interactive digital experiences 
                on the web. I design, develop and deliver websites that drives result.
                </p>
            </div>

            <div className='appFont xl:text-[2.7vw] text-4xl  text-stone-400 mt-11 2xl:mt-20 [display:none] xl:[display:block]'>
                <div>What's More..</div>
            </div>
            
            <div className='appFont font-light md:font-bold xl:[display:none] duplabout2 text-stone-400 mt-16 xl:mt-52 max-w-sm mb-9  xl:mb-60'>
                When i'm not working, I'm either making music, playing video games or probably at the gym.
            </div>

            <div className=' appFont font-light md:font-bold text-stone-400 mt-16 2xl:mt-32 mb-20 md:mb-7 lg:mb-16'>
                <p>I'm curious, passionate, and strive for continuous evolution. 
                Creativity has become my lifestyle and I believe expression of ideas through art and designs tells a story at a 
                deeper level without words being uttered.</p>
               <p> i thrive in creating identities that expresses ones true 
                personality by branding their experience and lifestyle.</p>
                <p>Currently, I'm a Frontend Developer and Designer and to this day i play around with new shapes 
                and techniques to find solutions that are appealing and efficient.</p>
            </div>
        </div>

            <div className='lg:ml-16 xl:ml-12 mt-20 lg:mt-28 xl:mt-0'>
                <div className='free text-stone-400 ml-9 w-12 sm:w-[160px] lg:w-[480px] xl:w-[34vw] h-96 text-3xl sm:text-6xl lg:text-7xl  xl:text-[10.4vw] hover:text-zinc-700'>
                    <span>这是一个</span>
                    <span>满月，</span>
                    <span>释放你的 </span>
                    <span>思想，</span>
                    <span>永远活着</span>
                </div>

                <div className='flex justify-center items-center [display:none] lg:[display:block] xl:[display:none] lg:ml-10'>
                    <div className='appFont flex flex-col text-stone-400 text-2xl sm:text-3xl font-light'>
                        <span>LET'S KEEP 'EM</span>
                        <span className='font-bold text-4xl text-red-800'>INSPIRED</span> 
                        <span>AND WANTING MORE.</span>
                    </div>
                </div>
            </div>
        </div>


            <div className='mr-5'>
            <div className='flex flex-col md:flex-row justify-center items-center xl:flex-col ml- 7xl:ml-14'>
                <div className='flex justify-end lg:[display:none] xl:[display:block]'>
                    <div className='appFont flex flex-col text-stone-400 text-4xl sm:text-5xl md:text-[3vw] lg:text-[2vw] font-light' ref={letsKeepSection}>
                        <span>LET'S KEEP 'EM</span>
                        <span className='font-bold text-6xl sm:text-7xl md:text-[4.5vw] lg:text-[3.2vw] text-red-800'>INSPIRED</span> 
                        <span>AND WANTING MORE.</span>
                    </div>
                </div>


                <div className='appFont [display:none] xl:[display:block] xl:text-[1.25vw] font-bold about2 text-stone-400 mt-16 2xl:mt-28 ml-5'>
                    When i'm not working on creative designs, 
                    I'm making music, playing video games or probably at the gym.
                </div>

                <div className='imgDiv sm:ml-5 flex justify-center'>
                    <img className='imgg h-[350px] w-[480px] md:h-[500px] md:w-[400px] lg:w-[49vw] lg:h-[400px] xl:h-[42vw] xl:w-[30vw] mt-20 lg:mt-0 xl:mt-20' src= {img2} alt= "cityView"></img>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
