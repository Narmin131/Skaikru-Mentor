import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "../reducer/appReducer";

export const store = configureStore({
    reducer:{
       CounterReducer
    }
})


// store (reducer)
// reducer (state, action)