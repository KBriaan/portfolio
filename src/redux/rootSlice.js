import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
  },

  reducers: {
    showloading: (state, action) => {
      state.loading = true;
    },
    hideloading: (state, action) => {
      state.loading = false;
    },
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export default rootSlice.reducer;
export const { showloading, hideloading, setPortfolioData } =
  rootSlice.actions;
