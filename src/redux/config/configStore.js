import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import replys from "../modules/replySlice";
import todos from '../../store'





const store = configureStore({
    reducer: { replys: replys, todos: todos },
})


export default store;