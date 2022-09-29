import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileAction } from "../../redux/reducers/accountReducer";
import { ACCESS_TOKEN, getStoreJson } from "../../utils/tools";
import ProfileInfo from "./ProfileInfo";

export default function Profile() {
	const dispatch = useDispatch();
	const { myProfile } = useSelector((state) => state.accountReducer);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
			setLoading(false);
	}, [myProfile]);

	const accessToken = getStoreJson(ACCESS_TOKEN);

	useEffect(() => {
		accessToken && dispatch(fetchProfileAction());
	}, []);

	return (
		<div className='row'>
			{loading ? (
				<div className='pt-5 mb-5 pb-5 d-flex align-items-center justify-content-center'>
					<div className='spinner-border ' role='status'></div>
				</div>
			) : (
				<>
					<div className='col-2 p-3'>
						<div
							className='avatar'
							style={{
								width: "100%",
								borderRadius: "50%",
								overflow: "hidden",
							}}
						>
							<img
								src={myProfile?.avatar}
								alt=''
								width={"100%"}
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
					<div className='col-10 p-3'>
						<ProfileInfo />
					</div>
				</>
			)}
		</div>
	);
}
