import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  replys: [],
  isLoading: false,
  error: null,
};

export const __getReply = createAsyncThunk(
    'replys/getReply',

    async (payload, thunkAPI) => {
        try {
            const data = await axios.get('http://localhost:3001/replys')
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
   })

export const __postReply = createAsyncThunk(
    'replys/postReply',

    async (payload, thunkAPI) => {
        try {
            const data = await axios.post('http://localhost:3001/replys', payload)
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

export const __deleteReply = createAsyncThunk(
    'replys/deleteReply',

    async (payload, thunkAPI) => {
        try {
            const data = await axios.delete(`http://localhost:3001/replys/${payload}`)
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

export const __patchReply = createAsyncThunk(
    'replys/patchReply',

    async (payload, thunkAPI) => {
        try {
            const data = await axios.patch(`http://localhost:3001/replys/${payload.id}`, {...payload, edit: true})
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

export const __patchReply2 = createAsyncThunk(
    'replys/patchReply2',

    async (payload, thunkAPI) => {
        try {
            const data = await axios.patch(`http://localhost:3001/replys/${payload.id}`, {...payload, edit: false, reply: payload.reply})
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })


export const replySlice = createSlice({
  name: "replys",
  initialState,
  reducers: {},
  extraReducers: {
    [__getReply.pending]: (state) => {
        state.isLoading = true; // ???????????? ????????? ???????????? ??????????????? true??? ???????????????!
    },

    [__getReply.fulfilled]: (state, action) => {
        state.isLoading = false; // ???????????? ????????? ????????????, false??? ???????????????!
        state.replys = action.payload; // Store??? ?????? replys??? ???????????? ????????? replys??? ????????????!
    },

    [__getReply.rejected]: (state, action) => {
        state.isLoading = false; // ????????? ???????????????, ???????????? ????????? ????????????, false??? ???????????????!
        state.error = action.payload; // catch ??? error ????????? state.error??? ????????????!
    }
  },
});

export const {} = replySlice.actions;
export default replySlice.reducer;