import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

export const store = configureStore({
	reducer: {
		//  reducer con
		productReducer,
		cartReducer,
	},
});
