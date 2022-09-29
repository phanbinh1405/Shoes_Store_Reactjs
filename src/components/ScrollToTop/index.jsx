import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { signInSuccess } from "../../redux/reducers/accountReducer";
import { ACCESS_TOKEN, getStoreJson } from "../../utils/tools";

function ScrollToTop({ children }) {
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	const accessToken = getStoreJson(ACCESS_TOKEN);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		if (accessToken) {
			dispatch(signInSuccess({ accessToken }));
		}
	});

	return <>{children}</>;
}

export default ScrollToTop;
