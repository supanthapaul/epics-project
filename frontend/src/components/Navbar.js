import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { GiOlive } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Button} from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'; 

function Navbar() {

    const [click, setClick]=useState(false);
    const [button, setButton]=useState(true);

    const handleClick=() => setClick(!click);
    const closeMobileMenu=() => setClick(false);

    const showbutton=()=>{
        if(Window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(()=>{
        showbutton();
    },[]);
    //return {
        //window.removeEventListener('resize', showButton)
      //}
    window.addEventListener('resize',showbutton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
          <div className="navbar">
            <div className="navbar-container container">
                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                 <GiOlive className="navbar-icon" />
                    PEACE 
                 </Link> 
                 <div className="menu-icon" onClick={handleClick} >
                {click ? <FaTimes /> : <FaBars />}
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/diary" className="nav-links" onClick={closeMobileMenu}>
                            Diary
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ?(
                            <Link to='/login' className="btn-link">
                                <Button buttonStyle="btn--outline">LOG IN</Button>
                            </Link>
                        ): (
                            <Link to='/login' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">LOG IN</Button>
                            </Link>
                        )}
                    </li>
                    <li className="nav-btn">
                        {button ?(
                            <Link to='/signup' className="btn-link">
                                <Button buttonStyle="btn--outline">SIGN UP</Button>
                            </Link>
                        ): (
                            <Link to='/signup' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SIGN UP</Button>
                            </Link>
                        )}
                    </li>
                 </ul>          
            </div>
          </div>
          </IconContext.Provider>  
        </>
    )
}

export default Navbar
