import React from 'react'
import "./Section4.css"
import img55 from './Img/img55.jpg'
import {Link} from 'react-router-dom'; 

const Section4 = () => {

    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  return (
    <div className='callToAction h-fit mt-0 text-stone-400 pb-5 px-5 6xl:pb-9 6xl:px-9'>


        {/* LET'S TELL YOUR STORY SECTION (SMALL BREAK POINT) */}   
        <div className='flex justify-end items-center lg:[display:none]'>
         <div className='storyContainer flex flex-col text-5xl md:text-7xl'>
            <div className='story flex flex-col tracking-tighter font-bold'>
                
                <div className='flex justify-end'>
                    <span>LET'S</span>
                </div>

                <div className='flex justify-end'>
                    <span>TELL</span>
                </div>
                
                <div className='flex justify-end'>
                    <span>YOUR</span>
                </div>
                
                <div className='flex justify-end'>
                    <span>STORY</span> 
                </div> 
            </div>
        </div>
            <img className='oject-contain h-52 w-96 md:h-72 md:w-3/6' src={img55} alt='building'></img>
        </div>



        {/* LET'S TELL YOUR STORY SECTION (LARGE BREAK POINT) */}
        <div className='storyContainer [display:none] lg:[display:block]'>
            <div className='story1 flex justify-center tracking-tighter font-bold lg:text-[9.4vw] '>
                {/* LET'S TELL YOUR STORY */}
                <span className='flex'>
                    <h1 className='tell'>LET'S</h1>
                </span>

                <span className='flex ml-4'>
                    <h1 className='tell'>TELL</h1>
                </span>

                <span className='flex ml-4'>
                    <h1 className='tell'>YOUR</h1>
                </span>

                <span className='flex ml-4'>
                    <h1 className='tell'>STORY</h1>
                </span>
            </div>
        </div>


                    {/* TINY WRITE UP SECTION */}
        {/* TINY WRITE UP SECTION (TINY TO MEDIUM BREAKPOINT) */}
        <div className='tinyWriteUp flex mt-16 ml-10 md:ml-40 lg:[display:none] text-[10px]'>
            <div className='tiny w-[150px]'>
                <div className='mb-32'>
                    BEGIN TO TAYLOR YOUR EXPERIENCE WITH A BRAND THAT'S YOURS TRUE
                    IDENTITY AND MAKE IT A VIBE!
                </div>

                <div>
                    FOR MORE INQUIRIES, KINDLY CLICK GET IN TOUCH BELOW AND REACH OUT.
                </div>
            </div>
           
           <div className='tiny w-[150px] mt-16'>
                <div className='mb-32'>
                    <div>GOT A QUESTION, PROPOSAL OR PROJECT ?</div>
                    <div>HAVE YOU GOT SOMETHING TO WORK TOGETHER ON ?</div>
                    <div>FEEL FREE TO REACH OUT.</div>
                </div>

                <div>
                    THANK YOU FOR YOUR TIME AND LOOKING THROUGH THE PORTFOLIO
                </div>
           </div>
        </div>



        {/* TINY WRITE UP SECTION (LARGE BREAKPOINT UPWARD) */}
        <div className='tinyWriteUp flex px-3 justify-center font-semibold [display:none] lg:flex text-[0.76vw]'>
            <div className='w-[17vw] mr-[10.2vw]'>
                BEGIN TO TAYLOR YOUR EXPERIENCE WITH A 
                BRAND THAT'S YOURS TRUE IDENTITY
                AND MAKE IT A VIBE!
            </div>

            <div className='mt-32 5xl:mr-5'>
                <div>GOT A QUESTION, PROPOSAL OR PROJECT ?</div>
                <div>HAVE YOU GOT SOMETHING TO WORK TOGETHER ON ?</div>
                <div>FEEL FREE TO REACH OUT.</div>
            </div>

                <div className='w-[17.5vw] mt-44 lg:ml-16 xl:ml-0'>
                    THANK YOU FOR YOUR TIME AND LOOKING
                    THROUGH THE PORTFOLIO
                </div>
            
            
            <div className='ml-48 lg:ml-24 mt-56'>
                FOR MORE INQUIRIES, KINDLY CLICK GET IN TOUCH
                BELOW AND REACH OUT  
            </div>
        </div>



        {/* WORKING ENQUIRIRIES SECTION */}
        <div className='getInTouchSec flex mt-28 flex-col lg:flex-row sm:justify-between md:mb-10 lg:mb-0 font-normal'>
            <div className='forWorkEnqandCollab flex justify-center'>
                <div className='forWorkEnq1 flex flex-col justify-center md:ml-0 [display:none]'>
                    <div>
                        <span className='italic mr-3'>For</span>
                        <span>working enquiries</span>
                    </div>
                    <div className='creatCollab z-20 7xl:mt-[-63px] 5xl:mt-[-53px] 2xl:mt-[-45px] mt-[-20px] lg:mt-[-30px] font-normal'>
                        <span className='italic mr-3'>and</span> 
                        <span>creative collaboration</span>
                    </div>
                </div>

                <div className='forWorkEnq2 flex justify-center text-2xl leading-5'>
                    <div>For working enquiries and creative collaboration</div>
                </div>
            </div>


            <div className='flex sm:items-end justify-center sm:justify-end  mt-8 mb-5 sm:mb-8 md:mb-0 md:mt-0'>
                <Link to="/GetInTouch">
                    <div className='getInTouch tracking-tighter text-stone-200 hover:text-zinc-700'>GET IN TOUCH</div>
                </Link>
            </div>
        </div>

        <div className='flex justify-around text-[17px] 2xl:text-[25px] 3xl:text-[33px] 7xl:text-[40px] pt-1 flex-wrap text-zinc-700 pb-2 text-red-800'>
            <div className='mr-5'>LAGOS, NG</div>
            <div className='textgreen-400'>{`${time}`}</div>
         </div>
    </div>
  )
}

export default Section4