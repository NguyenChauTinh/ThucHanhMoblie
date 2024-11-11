import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBikesAPI, addBikeAPI } from './api';

export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async () => {
  const response = await fetchBikesAPI();
  return response;
});

export const addBike = createAsyncThunk('bikes/addBike', async (bikeData) => {
  const response = await addBikeAPI(bikeData);
  return response;
});

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    bikes: [],
    favorites: [],
    cart: [],
    status: 'idle',
    error: null
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favorites.indexOf(action.payload);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
    addToCart: (state, action) => {
      const { id, name, price } = action.payload;
      state.cart.push({ id, name, price });
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    checkout: (state) => {
      state.cart = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bikes = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBike.fulfilled, (state, action) => {
        state.bikes.push(action.payload);
      });
  }
});

export const { toggleFavorite, addToCart, removeFromCart, checkout } = bikeSlice.actions;
export default bikeSlice.reducer;