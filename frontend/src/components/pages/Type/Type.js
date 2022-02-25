import React from 'react';
import Hero from '../../Hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix, homeObjSeven } from './Data';


function Type(){
    return(
        <>
        <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjFour} />
      <Hero {...homeObjFive} />
      <Hero {...homeObjSix} />
      <Hero {...homeObjSeven} />
      {/* <Hero {...homeObjEight} />
      <Hero {...homeObjNine} />
      <Hero {...homeObjTen} /> */}
        </>
    );
}

export default Type;