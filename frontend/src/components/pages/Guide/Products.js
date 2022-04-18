import React from 'react';
import Hero from '../../Hero';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import Pricing from '../../Pricing';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
			<HeroSection {...homeObjThree} />
      <Hero {...homeObjFour} />
      <Pricing />
      <HeroSection {...homeObjFive} />
    </>
  );
}

export default Products;
