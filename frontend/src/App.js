import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Footer from './components/pages/Footer/Footer';
// import Auth from './components/auth/Auth'
import PrivateRoute from './components/auth/PrivateRoute';
import { Diary } from './components/diary/Diary';

function App() {
	return (
		<Router>
			<Navbar />
				<Routes>
					{/* <Route path='/' exact element={<Home />}/> */}
					<Route path='/products' element={<Products />} />
						<Route exact path='/' element={<Home />} />
				{/* <PrivateRoute path='/diary' component={Diary} /> */}

					{/* <Route exact path='/' element={<PrivateRoute />}>
					</Route> */}
					<Route exact path='/diary' element={<PrivateRoute />}>
						<Route exact path='/diary' element={<Diary />} />
					</Route>
					{/* <Route exact path='/update-profile' element={<PrivateRoute />}>
						<Route exact path='/update-profile' element={<UpdateProfile />} />
					</Route>
					<Route path="/signup" element={<Signup />} />
				<Route path="/forgot-password" element={<ForgotPassword/>} /> */}
				{/* <Route path="/login" element={<Auth />} /> */}
				</Routes>
			<Footer />
		</Router>
	);
}

export default App;

