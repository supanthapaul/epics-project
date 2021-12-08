import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useStoreState } from 'easy-peasy';

export default function PrivateRoute({ component: Component, ...rest }) {
	const authState = useStoreState(state => state.auth.user);
	const isAuthenticated = authState.uid ? true : false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useStoreState } from 'easy-peasy';

// export const PrivateRoute = ({
// 	component: Component,
// 	...rest
// }) => {
// 	const authState = useStoreState(state => state.auth.user);
// 	const isAuthenticated = authState.uid ? true : false;
// 	return (
// 		<Route {...rest} component={(props) => (
// 			isAuthenticated ? (
// 				<div>
// 					<Component {...props} />
// 				</div>
// 			) : (
// 					<Navigate to="/" />
// 				)
// 		)} />
// 	)
// }

// export default PrivateRoute;