import React from 'react'
import Section1 from './Section1/Section1'
import Navmenu from './Navmenu/Navmenu'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'


const Home = () => {
  return (
    <div>
       <Navmenu/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
    </div>
  )
}

export default Home