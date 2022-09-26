import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, axiosTimeout, setStoreJson } from "../../utils/tools";

const initialState = {
	myAccount: {
		accessToken: "",
		loading: false,
		error: "",
	},
	signIn: {
		loading: false,
		error: "",
	},
};

const accountReducer = createSlice({
	initialState,
	name: "account",
	reducers: {
		signInRequest: (state) => {
			state.signIn.loading = true;
			state.signIn.error = "";
		},
		signInSuccess: (state, data) => {
			state.signIn.loading = false;
			state.signIn.error = "";
			state.myAccount.accessToken = data.payload.accessToken;
		},
		signInFailure: (state, data) => {
			state.signIn.loading = false;
			state.signIn.error = data.payload.error;
		},
	},
});

export const signInFacebookAction = createAsyncThunk(
	"account/sign-in-facebook",
	async (payload, thunkAPI) => {
		const { values, cb } = payload;
		try {
			thunkAPI.dispatch(signInRequest());
			const data = await axiosTimeout.post("/Users/facebooklogin", {
				facebookToken: values,
			});
			const { accessToken } = data.data.content;

			setStoreJson(ACCESS_TOKEN, accessToken);

			thunkAPI.dispatch(signInSuccess({ accessToken }));
			cb(true);
		} catch (error) {
			console.log(error.respones);
		}
	}
);

export const signIn = createAsyncThunk(
	"account/sign-in",
	async (payload, thunkAPI) => {
		const { values, cb } = payload;
		const { email, password } = values;
		thunkAPI.dispatch(signInRequest());

		const data = await axiosTimeout.post("/Users/signin", {
			email,
			password,
		});

		const { accessToken } = data.data.content;

		setStoreJson(ACCESS_TOKEN, accessToken);

		thunkAPI.dispatch(signInSuccess({ accessToken }));
		cb(true);
	}
);



export const { signInRequest, signInSuccess, signInFailure } =
	accountReducer.actions;

export default accountReducer.reducer;
