import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TFavs } from "../../types/types";
import axios from "axios";
import { RootState } from "../store";

type TStateStatus = "idle" | "loading" | "success" | "failed";

type TInitialStateType = {
  favs: TFavs[];
  status: TStateStatus;
  error: string;
};

const initialState: TInitialStateType = {
  //   favs: [],
  favs: [
    {
      description: "this",
      id: 1,
      image: "https://picsum.photos/500/300?random=1",
      name: "Fav 1",
      price: 700,
      rating: 5,
    },
  ],
  error: "",
  status: "idle",
};

// Async thunk for fetching favs from an API
export const fetchFavs = createAsyncThunk("favs/fetchFavs", async () => {
  const response = await axios.get<TFavs[]>("https://api.example.com/favs");
  return response.data;
});

const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<TFavs>) => {
      state.favs.push(action.payload);
    },
    removeFav: (state, action: PayloadAction<number>) => {
      state.favs = state.favs.filter((fav) => fav.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFavs.fulfilled, (state, action) => {
        state.status = "success";
        state.favs = action.payload;
      })
      .addCase(fetchFavs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const { addFav, removeFav } = favsSlice.actions;

export const selectFavs = (state: RootState) => state.favs.favs;

const favsReducer = favsSlice.reducer;

export default favsReducer;
