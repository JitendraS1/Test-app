import { configureStore } from "@reduxjs/toolkit";
import detailRducer from './detailSlice'
import userDetailReducer from './userDetalSlice'


const store = configureStore({
    reducer: {
        detail: detailRducer,
        userDetail: userDetailReducer,
    },
})

export default store