import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrProduct: [],
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    // action here
  }
})
// export action
// export const {action} = productReducer.actions

export default productReducer.reducer