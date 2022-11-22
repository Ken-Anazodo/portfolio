import React from 'react';
import './Navmenu.css';
import gsap from 'gsap';
import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'; 
import ceee from "./Img/ceee.PNG";

export default function Navmenu() {
  const navSelect = useRef(null);

  useEffect(() => {
    const el = navSelect.current;
    gsap.fromTo(el, {opacity:0, y: 0}, {opacity:1, duration:1, y: 20, delay: 0.4, ease: "power4"});

  }, [])
  


  return (
    <div className=''>
        <div className='nav px-7 mb-[2.5vw] xl:mb-[3vw] mx-auto flex justify-around space-x-4 text-[3.5vw] sm:text-[2.1vw] text-stone-300' ref = {navSelect}>
            <div className='flex items-center cursor-pointer'>
              <div><h1>The Clan Chief</h1></div>
              <img className='w-3 lg:w-4 h-3 lg:h-4 ml-2' src= {ceee} alt= "copyright"></img>
            </div>
            <div className='inTouch hover:text-zinc-700 xl:hover:text-2xl 2xl:hover:text-3xl hover:font-serif text-stone-300 cursor-pointer'>
              <Link to="/GetInTouch">
                <button><h1>GET IN TOUCH</h1></button>
                </Link>
              </div>
        </div>
    </div>
  )
}