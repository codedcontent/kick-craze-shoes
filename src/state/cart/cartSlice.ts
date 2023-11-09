import { TCartItem } from "./../../types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type TStateErrors = "idle" | "loading" | "success" | "failed";

type InitialStateType = {
  cart: TCartItem[];
  status: TStateErrors;
  error: string;
};

const initialState: InitialStateType = {
  // cart: [],
  cart: [
    {
      id: 1,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ca0fcd7b-6537-4736-8a23-38b6c7104c24/dunk-low-shoes-f5ThGW.png",
      name: "Nike Zoom Pegasus 38",
      description:
        "Get ready to fly with the Nike Zoom Pegasus 38. These running shoes provide excellent cushioning and support for your daily runs.",
      price: 129.99,
      rating: 5,
      likes: 0,
      shareCount: 0,
      quantity: 0,
    },
    {
      id: 2,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ca0fcd7b-6537-4736-8a23-38b6c7104c24/dunk-low-shoes-f5ThGW.png",
      name: "Nike Zoom Pegasus 38",
      description:
        "Get ready to fly with the Nike Zoom Pegasus 38. These running shoes provide excellent cushioning and support for your daily runs.",
      price: 129.99,
      rating: 5,
      likes: 0,
      shareCount: 0,
      quantity: 0,
    },
  ],
  error: "",
  status: "idle",
};

// Define an async thunk for fetching the cart from an external API
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get("/api/cart");
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },

    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status === "success";
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status === "failed";
        state.error = action.error.message as string;
      });
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;
export const selectCartStatus = (state: RootState) => state.cart.status;
export const selectCartError = (state: RootState) => state.cart.error;

const cartReducer = cartSlice.reducer;

export default cartReducer;
