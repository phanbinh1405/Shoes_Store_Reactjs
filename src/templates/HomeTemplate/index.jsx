import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

export default function HomeTemplate() {
	return (
		<Fragment>
			<Header />
			<div className='container min-vh-50'>
				<Outlet />
				<ToastContainer />

			</div>
			<Footer />
		</Fragment>
	);
}
