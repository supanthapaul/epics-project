import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import { AuthProvider } from "./contexts/AuthContext";
import Products from './components/pages/Products/Products';
import Footer from './components/pages/Footer/Footer';
import Dashboard from './components/auth/Dashboard';
import UpdateProfile from './components/auth/UpdateProfile';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
	return (
		<Router>
			<Navbar />
			<AuthProvider>
				<Routes>
					{/* <Route path='/' exact element={<Home />}/> */}
					<Route path='/products' element={<Products />} />
					<Route exact path='/' element={<PrivateRoute />}>
						<Route exact path='/' element={<Dashboard />} />
					</Route>
					<Route exact path='/update-profile' element={<PrivateRoute />}>
						<Route exact path='/update-profile' element={<UpdateProfile />} />
					</Route>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgot-password" element={<ForgotPassword/>} />
				</Routes>
			</AuthProvider>
			<Footer />
		</Router>
	);
}

export default App;

