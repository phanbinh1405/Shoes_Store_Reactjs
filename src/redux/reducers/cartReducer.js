import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [
		{
			id: 6,
			name: "Adidas Tenisky Super Star",
			price: 250,
			quantity: 1,
			image: "https://shop.cyberlearn.vn/images/adidas-tenisky-super-star.png",
		},
		{
			id: 7,
			name: "Adidas Tenisky Super Star",
			price: 250,
			quantity: 1,
			image: "https://shop.cyberlearn.vn/images/adidas-tenisky-super-star.png",
		},
	],
};

const cartReducer = createSlice({
	name: "cartReducer",
	initialState,
	reducers: {
		changeQuantityAction: (state, action) => {
			const { productId, value } = action.payload;

			const findItem = state.cart.find((product) => product.id === productId);
			if (findItem.quantity >= 1) {
				findItem.quantity += value;
			}
			if (findItem.quantity < 1) {
				findItem.quantity = 1;
			}
		},

		deleteProductAction: (state, action) => {
      state.cart = state.cart.filter(i => i.id !== action.payload)
    },
	},
});

export const { changeQuantityAction, deleteProductAction } = cartReducer.actions;

export default cartReducer.reducer;
