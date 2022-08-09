// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";


const reply = createSlice({
  name: "reply",
  initialState: [],
  reducers: {
    addNumber(state, action) {
      state.number += action.payload;
    },

  },
});


export const { addNumber } = reply.actions;

export default configureStore({
    reducer: {
		reply: reply.reducer,
    
    }
});