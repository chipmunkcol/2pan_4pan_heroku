// src/redux/modules/counterSlice.js

import { getDefaultMiddleware, combineReducers, createSlice, createAsyncThunk, configureStore, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
})


export const {} = todoSlice.actions;
export default todoSlice.reducer;