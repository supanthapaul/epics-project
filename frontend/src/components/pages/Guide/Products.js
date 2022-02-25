import React from 'react';
import Hero from '../../Hero';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
			<HeroSection {...homeObjThree} />
      <Hero {...homeObjFour} />
      <Pricing />
    </>
  );
}

export default Products;
