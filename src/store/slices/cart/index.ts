import { IProduct } from '@models/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart } from './types';

const initialState: ICart = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<IProduct>) {
      const itemInCart: IProduct = state.cart.find(
        (product: IProduct) => product.id === payload.id
      ) as unknown as IProduct;

      if (itemInCart && itemInCart.quantity) {
        itemInCart.quantity++;
      } else {
        state.cart.push(payload);
      }
    },

    incrementQuantity(state, { payload }: PayloadAction<number>) {
      const item = state.cart.find((item) => item.id === payload);
      if (item && item.quantity) {
        item.quantity++;
      }
    },

    decrementQuantity(state, { payload }: PayloadAction<number>) {
      const item = state.cart.find((item) => item.id === payload);

      if (item && item.quantity) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },

    removeItem(state, { payload }: PayloadAction<number>) {
      const removeItem = state.cart.filter(
        (item) => item.id !== payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
