import React from 'react'
import "./Section3.css"
import img3 from "./img/img3.jpg";
import img1 from "./img/img1.jpg";
import gsap from 'gsap';
import {useRef, useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Section3 = () => {

  const blackPic = useRef(null);
  const dontStop = useRef(null);
  const grayPic = useRef(null);
  
  let tl = gsap.timeline()

  useEffect(() => {
    const el33 = blackPic.current;
    const el44 =dontStop.current;
    const el55 = grayPic.current;
    
    tl.fromTo(el33,  {opacity: 0, y: 400,  duration: 2, ease: 'Power3.easeOut', transition: 1 }, {opacity: 1, y: 0, 
    scrollTrigger: {
      trigger: el33,
    }})
    .fromTo(el33.firstElementChild, {duration: 2, scale: 1.6, ease: 'power3.easeOut'}, {scale: 1},0.3)
    .fromTo(el44,  {opacity: 0, y: 300,  duration: 2, ease: 'Power3.easeOut', transition: 1 }, {opacity: 1, y: 0, 
      scrollTrigger: {
        trigger: el44,
      }})
    tl.fromTo(el55,  {opacity: 0, y: 400,  duration: 2, ease: 'Power3.easeOut', transition: 1 }, {opacity: 1, y: 0, 
        scrollTrigger: {
          trigger: el55,
        }})
  }, [])
  
  return (
    <div className='px-10 lg:px-14 pt-28 pb-60 md:pt-28 3xl:py-56 pt-40 3xl:pt-70'>

      <div className='picture1 flex justify-center lg:justify-end'  ref={blackPic}>
        <img className='pic h-[100%] w-[100%] lg:h-[50%] lg:w-[50%] object-contain' src= {img3} alt= "building"></img>
      </div>

        <div className='appFont italic flex items-center justify-center py-20 xl:py-36'>
            <div className='text-2xl md:text-[2.7vw] md:leading-none text-stone-400 flex flex-col justify-center' ref={dontStop}>
                <span>Don't Stop!</span>
                <span>We're not done</span>
                <span>Keep it moving.</span>
            </div>
        </div>

      <div className='picture2 flex justify-center lg:justify-start' ref={grayPic}>
        <img className='pic h-[100%] w-[100%] lg:h-[50%] lg:w-[50%] object-contain' src= {img1} alt= "building"></img>
      </div>

    </div>
  )
}

export default Section3