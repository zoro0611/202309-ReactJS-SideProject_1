import { createSlice } from '@reduxjs/toolkit'

const initialState = {};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }) => {
        const { id } = payload;
        if (state[id]) {
          state[id] += 1;
        } else {
          state[id] = 1;
        }
    },
    remove: (state, { payload }) => {
        const { id } = payload;
        if (state[id] > 0) {
            state[id] -= 1;
        }
    },

  },
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer;