const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    date: [],
  },
  reducers: {
    // get(state, action) {
    //   return state.date;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = productSlice.actions;
export default productSlice.reducer;

export const getProduct = createAsyncThunk("get/product", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = res.json();
  return data;
});
