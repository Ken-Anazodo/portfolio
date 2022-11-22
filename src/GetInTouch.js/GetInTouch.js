import React, { useRef } from 'react';
import './GetInTouch.css';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import {useState, useEffect} from 'react'
// import img2 from "./img/img2.PNG";

const GetInTouch = () => {

    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    const[onHover, setonHover] = useState(false);

    // useEffect(() => {
    //  setonHover(true)
    // }, [onHover])
    

   
    const line1 = useRef(null);
    // const line2 = useRef(null);
    // const line3 = useRef(null);
    // const line4 = useRef(null);
   
    useEffect(() => {
        const el1 = line1.current
        // const el2 = line1.current
        // const el3 = line1.current
        // const el4 = line1.current

        const tl = gsap.timeline({defaults:{opacity: 0, x: 70, duration: 3}})

        tl.fromTo(el1, {}, {opacity:1, x: 0, ease: "power4"}, "0.5")
    }, [])
    


  return (
    <div className=' min-h-screen'>
        <div className='socialMedia text-stone-400 px-[3vw] sm:px-5 text-[6.8vw] sm:text-[4vw] pt-5'>
            <div>
                <div>
                    <div className='subTitle text-[2vw] sm:text-[11px] md:text-[13px]'>
                        <ul>
                            <li>Creative Developer</li> 
                            <li>Get In Touch</li>
                        </ul>
                    </div>
                    <div className='my-4'>kenanazodo43@gmail.com</div>
                </div>

                <div className='flex justify-center' ref={line1}>
                    <div className='h-0.5 w-10/12 bg-stone-400'></div>
                </div>



                <div>
                    <div className='subTitle text-[2vw] sm:text-[11px] md:text-[13px]'>
                        <ul>
                            <li>Creative Developer</li> 
                            <li>Get In Touch</li>
                        </ul>
                    </div>
                    <div className='social my-4'>LinkedIn</div>
                </div>

                <div className='flex justify-center'>
                    <div className='h-0.5 w-10/12 bg-stone-400'></div>
                </div>




                <div>
                    <div className='subTitle text-[2vw] sm:text-[11px] md:text-[13px]'>
                        <ul>
                            <li>Creative Developer</li> 
                            <li>Get In Touch</li>
                        </ul>
                    </div>
                    <div className='social my-4'>Instagram</div>
                </div>

                <div className='flex justify-center'>
                    <div className='h-0.5 w-10/12 bg-stone-400'></div>
                </div>
                



                <div>
                    <div className='subTitle text-[2vw] sm:text-[11px] md:text-[13px]'>
                        <ul>
                            <li>Creative Developer</li> 
                            <li>Get In Touch</li>
                        </ul>
                    </div>
                     <div className='social my-4'>Twitter</div>
                </div>
               
                <div className='flex justify-center'>
                    <div className='h-0.5 w-10/12 bg-stone-400'></div>
                </div>
                   
                       
                        
                        <div className='btnArrow-sec flex justify-end mt-4 [display:none] md:[display:flex]'>
                            <div className = {`hoverArrows ${onHover? "arrow-active" : ""}`}>
                                <div className='arrow2 up'></div>
                                <div className='arrow2 up'></div>
                            </div>


                            <div className='flex items-center'>
                                <div className={`hoverArrows1 ${onHover? "arrow-active" : ""}`}>
                                    <div className='arrow2 left'></div>
                                    <div className='arrow2 left'></div>
                                </div>
                            
                                <Link to= "/">
                                    <button onMouseOver={() => {setonHover(true)}}>
                                    <div className='backToHomePage'>
                                    <div className='h-[12.5vw] w-[12.5vw] rounded-full border-stone-400 border-2 bg-transparent'>
                                    <div className='h-16 w-16 md:h-20 md:w-20 rounded-full border-stone-400 border-2 bg-transparent'>
                                        <div className='w-12 h-12 md:h-16 md:w-16 rounded-full border-stone-400 border-2 bg-transparent'>
                                            <div className='w-10 h-10 md:h-12 md:w-12 rounded-full border-2 bg-stone-400 flex justify-center items-center animate-spin'>
                                                <div className='w-1 h-3 md:w-1 md:h-5 bg-stone-700'></div>
                                                <div className='w-3 h-1 md:w-5 md:h-1 bg-stone-700'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                

                <div className='flex justify-center items-center md:[display:none]'>
                    <div className={`hoverArrow-MobBreakPoint ${onHover? "arrow-active" : ""} mt-[13vh]`}>
                                <div className='arrow1 left'></div>
                                <div className='arrow1 left'></div>
                            </div>

                    <Link to= "/">
                        <div className='flex justify-center mt-[15vh] px-3'>
                            <button onMouseOver={() => {setonHover(true)}} className="">
                            <div className='backToHomePage'>
                            <div className='h-[15vw] w-[15vw] rounded-full border-stone-400 border-2 sm:border-[3px] bg-transparent'>
                            <div className='h-[12vw] w-[12vw] rounded-full border-stone-400 border-2 sm:border-[3px] bg-transparent'>
                                <div className='w-[9.5vw] h-[9.5vw] rounded-full border-stone-400 border-2 sm:border-[3px] bg-transparent'>
                                    <div className='w-[7vw] h-[7vw]  rounded-full border-2 sm:border-[3px] bg-stone-400 flex justify-center items-center animate-spin'>
                                        <div className='w-1 h-3 md:w-1 md:h-5 bg-stone-700'></div>
                                        <div className='w-3 h-1 md:w-5 md:h-1 bg-stone-700'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </button>
                        </div>
                        </Link>

                        <div className={`hoverArrow-MobBreakPoint ${onHover? "arrow-active" : ""} mt-[13vh]`}>
                                <div className='arrow1 right'></div>
                                <div className='arrow1 right'></div>
                            </div>
                    </div>


                    <div className='flex justify-center sm:justify-end text-[4vw] sm:text-[17px] mt-9 sm:pt-2 pb-1 sm:mr-20 text-zinc-700'>
                        <div className='mr-5'>LAGOS, NG</div>
                        <div className='text-red-800'>{`${time}`}</div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch