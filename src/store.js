import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addList = createAsyncThunk("ADD_TODO", async (newList) => {
  const response = await axios.post("http://localhost:3001/todos", newList);
  return response.data;
});

export const deleteList = createAsyncThunk("DELETE_TODO", async (id) => {
  const response = await axios.delete(`http://localhost:3001/todos/${id}`);
  return id;
});

export const updateList = createAsyncThunk("UPDATE_TODO", async ({id, newPost}) => {
  const response = await axios.patch(`http://localhost:3001/todos/${id}`, newPost);
  return { id, newPost }
});




export const todosSlice = createSlice({
  name: "todos",
	initialState: {
    todos: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    },
  extraReducers: (builder) => {
    builder
    .addCase(__getTodos.pending, (state, action) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    });
    builder.addCase(__getTodos.fulfilled, (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    });
    builder.addCase(__getTodos.rejected, (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    });
    builder.addCase(addList.fulfilled, (state, action) => { 
      state.todos = [...state.todos, action.payload];
      console.log(state.todos);
    });
    builder.addCase(deleteList.fulfilled, (state, action) => {
      state.todos =  state.todos.filter((todo) => todo.id !== action.payload);
      console.log(state.todos)
    });
    builder.addCase(updateList.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, content: action.payload.content, title: action.payload.title };
        } else {
          return todo;
        }
      })
    }
    );
  },
});


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
        state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다!
    },

    [__getReply.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다!
        state.replys = action.payload; // Store에 있는 replys에 서버에서 가져온 replys를 넣습니다!
    },

    [__getReply.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다!
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다!
    }
  },
});


// export const { __getTodos } = todosSlice.actions;

export default configureStore({
  reducer: {
		todos: todosSlice.reducer,
    replys: replySlice.reducer,
    
  },
});
