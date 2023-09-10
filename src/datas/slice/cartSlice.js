import { createSlice } from '@reduxjs/toolkit'

const initialState = []; //初始化為空陣列，因為一開始購物車是空的

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state, { payload } )=> {
        
        if (state[payload.id]) { //如果已經有這個id的商品，就在原本的數量上+1
            state[payload.id] += 1;
        } 
        else { //如果沒有這個id的商品，就直接設定數量為1
            state[payload.id] = 1;
        }
    },
    remove: (state, { payload } ) => {
        if (state[payload.id]) {
            state[payload.id] -= 1;
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions

export default cartSlice.reducer;