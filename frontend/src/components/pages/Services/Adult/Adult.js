import React from 'react';
import Hero from '../../../Hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Adult(){
    return(
        <>
        <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjFour} />
        </>
    );
}

export default Adult;