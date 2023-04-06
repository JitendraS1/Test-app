const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];



const userDetailSlice = createSlice({
    name: 'user-card',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
    }
})

export const { add, remove } = userDetailSlice.actions

export default userDetailSlice.reducer