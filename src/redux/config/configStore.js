import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import counter from "../modules/counterSlice";
import todos from "../modules/todosSlice";





const store = configureStore({
    reducer: { counter: counter, todos: todos },
})


export default store;