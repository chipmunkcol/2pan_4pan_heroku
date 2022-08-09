// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";

export const __addNumber = createAsyncThunk(
  "addNumber",         						    	// 첫번째 인자 : action value
													// 두번째 인자 : 콜백함수 
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 1000);
  }
);




const counterSlice = createSlice({
  name: "counter",
  initialState: {number :0},
  reducers: {
    addNumber(state, action) {
      state.number += action.payload;
    },

    minusNumber(state, action) {
      state.number -= action.payload;
    },
  },
});


export const { addNumber, minusNumber } = counterSlice.actions;
// export default counterSlice.reducer;

export default configureStore({
    reducer: {
		counterSlice: counterSlice.reducer
    }
});