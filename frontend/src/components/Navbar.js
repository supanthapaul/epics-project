import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GiOlive } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import { useStoreActions, useStoreState } from 'easy-peasy';

import './Navbar.css';
import firebase from '../firebase'
import { IconContext } from 'react-icons/lib';
// import AuthContext from '../contexts/AuthContext';


function Navbar() {

	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const navigate = useNavigate();
	const startLogin = useStoreActions(actions => actions.auth.startLogin);
	const startLogout = useStoreActions(actions => actions.auth.startLogout);
	const setLogin = useStoreActions(actions => actions.auth.login);
	const setLogout = useStoreActions(actions => actions.auth.logout);
	const authState = useStoreState(state => state.auth.user);
	// const {login} = useAuth();

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showbutton = () => {
		if (Window.innerWidth <= 960) {
			setButton(false);
		}
		else {
			setButton(true);
		}
	}
	useEffect(() => {

		// Listen for firebase auth change event
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				// store user in store
				setLogin(user);
				navigate('/');
			}
			else {
				setLogout();
				navigate('/');
			}
		})
	}, []);

	const logoutUser = () => {
		startLogout();
	}

	useEffect(() => {
		showbutton();
	}, []);
	//return {
	//window.removeEventListener('resize', showButton)
	//}
	window.addEventListener('resize', showbutton);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className="navbar-epics">
					<div className="navbar-epics-container container">
						<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
							<GiOlive className="navbar-icon" />
							MindPeace
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
									Guides
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/diary" className="nav-links" onClick={closeMobileMenu}>
									Diary
								</Link>
							</li>
							{
								authState.uid == null ? (
								<li className="nav-btn">
									{button ? (
										<Button buttonStyle="btn--outline" onClick={e => startLogin()}>Login with Google</Button>
									) : (
										<Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={e => startLogin()}>Login with Google</Button>
									)}
								</li>

								) : (
								<li className="nav-btn">
									{button ? (
										<Button buttonStyle="btn--outline" onClick={e => logoutUser()}>Logout</Button>
									) : (
										<Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={e => logoutUser()}>Logout</Button>
									)}
								</li>

								)
							}
							{/* <li className="nav-btn">
                        {button ?(
                            <Link to='/signup' className="btn-link">
                                <Button buttonStyle="btn--outline">SIGN UP</Button>
                            </Link>
                        ): (
                            <Link to='/signup' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SIGN UP</Button>
                            </Link>
                        )}
                    </li> */}
						</ul>
					</div>
				</div>
			</IconContext.Provider>
		</>
	)
}

export default Navbar
