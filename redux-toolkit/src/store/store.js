import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/TodoSlice/TodoSlice";

export const store = configureStore({
    reducer : reducer
})