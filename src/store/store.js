import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reducer/reducer'

export const store = configureStore({
    reducer: {
        userRED:userReducer
    },
})