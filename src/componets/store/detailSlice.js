const { createSlice } = require("@reduxjs/toolkit");



const detailSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
    },
    reducers: {
        setUser(state, action) {
            state.data = action.payload
        },

    }
})


export const { setUser } = detailSlice.actions

export default detailSlice.reducer

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        try {
            const res = await fetch('https://63d0c1bc3f08e4a8ff89b455.mockapi.io/react-test')
            const data = await res.json()
            dispatch(setUser(data))

        } catch (err) {
            console.log(err)

        }
    }

}