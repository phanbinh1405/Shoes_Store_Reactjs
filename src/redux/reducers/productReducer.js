import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosTimeout } from "../../utils/tools";

const initialState = {
	arrProduct: [],
	productDetail: {},
};

const productReducer = createSlice({
	name: "productReducer",
	initialState,
	reducers: {
		// action here
		getProductAction: (state, action) => {
			const arrProduct = action.payload;
			state.arrProduct = arrProduct;
		},

		getProductDetailAction: (state, action) => {
			const productDetail = action.payload;
			state.productDetail = productDetail;
		},
	},
});
// export action
// export const {action} = productReducer.actions

export const { getProductAction, getProductDetailAction } =
	productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
	return async (dispatch) => {
		try {
			const result = await axiosTimeout.get("/Product");
			const arrProduct = result?.data?.content;

			dispatch(getProductAction(arrProduct));
		} catch (error) {
			console.log(error);
		}
	};
};

export const getProductDetailApi = (productId, setLoading) => {
	return async (dispatch) => {
		try {
			const resutl = await axiosTimeout.get(`/Product/getbyid?id=${productId}`);
			setLoading(false);
			dispatch(getProductDetailAction(resutl.data.content));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const likeProductApi = createAsyncThunk(
	"product/like",
	async (payload, thunkApi) => {
		const {values, cb} = payload

		try {
			await axiosTimeout.get(`/Users/like?productId=${values}`)
			toast('Đã thêm vào yêu thích', {type: 'success'})

		} catch (error) {
			console.log(error.response)
			toast('Like thất bại!', {type: 'error'})
		}
		
	}
);
