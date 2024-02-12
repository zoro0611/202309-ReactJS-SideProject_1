import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../datas/slice/cartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
})