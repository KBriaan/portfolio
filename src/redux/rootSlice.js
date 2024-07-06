import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
    reloadData: false
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
    ReloadData:(state, action) =>{state.reloadData = action.payload;

    }
  },
});

export default rootSlice.reducer;
export const { showloading, hideloading, setPortfolioData, ReloadData } =
  rootSlice.actions;
