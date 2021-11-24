import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Group</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>lorem ipsum</h3>
                <h4>Adult</h4>
                <p>lorem ipsum</p>
                <ul className='pricing__container-features'>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Get Started
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>lorem ipsum</h3>
                <h4>Teenager</h4>
                <p>lorem ipsum</p>
                <ul className='pricing__container-features'>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Get Started
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>lorem ipsum</h3>
                <h4>Child</h4>
                <p>lorem ipsum</p>
                <ul className='pricing__container-features'>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Get Started
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;