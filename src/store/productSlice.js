const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // get(state, action) {
    //   return state.date;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("get/product", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  // console.log(data);
  return data;
});
