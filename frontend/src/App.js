import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Guide/Products';
import Footer from './components/pages/Footer/Footer';
// import Auth from './components/auth/Auth'
import PrivateRoute from './components/auth/PrivateRoute';
import { Diary } from './components/diary/Diary';
import DepressionQuiz from './components/DepressionQuiz/DepressionQuiz';
import Adult from './components/pages/Ages/Adult/Adult';
import Child from './components/pages/Ages/Child/Child';
import Teenager from './components/pages/Ages/Teenager/Teenager';
import Type from "./components/pages/Type/Type";

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
					<Route exact path='/assessment' element={<PrivateRoute />}>
						<Route exact path='/assessment' element={<DepressionQuiz />} />
					</Route>
					<Route exact path='/Adult' element={<Adult />} />
              		<Route exact path='/Child' element={<Child />} />
              		<Route exact path='/Teenager' element={<Teenager />} />
					  <Route exact path='/Type' element={<Type />} />
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

