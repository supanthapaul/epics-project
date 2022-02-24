import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { FcBusinesswoman, FcBusinessman } from 'react-icons/fc';
import { MdChildCare } from 'react-icons/md';
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
            <Link to='/adult' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FcBusinessman />
                </div>
                <h3></h3>
                <h4>Adult</h4>
                <p></p>
                <ul className='pricing__container-features'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Get Clarity
                </Button>
              </div>
            </Link>
            <Link to='/Teenager' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FcBusinesswoman />
                </div>
                <h3></h3>
                <h4>Teenager</h4>
                <p></p>
                <ul className='pricing__container-features'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Get Clarity
                </Button>
              </div>
            </Link>
            <Link to='/Child' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <MdChildCare />
                </div>
                <h3></h3>
                <h4>Child</h4>
                <p></p>
                <ul className='pricing__container-features'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
								Get Clarity
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
