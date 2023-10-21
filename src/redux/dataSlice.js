// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialNavigation = [
    { name: "ALL", key: "ALL", href: "#", current: true },
    { name: "LAF", key: "Lost and Found", href: "#", current: false },
    { name: "ELE", key: "Electronic", href: "#", current: false },
    { name: "STD", key: "Study", href: "#", current: false },
    { name: "OT", key: "Others", href: "#", current: false },
  ];
const productSlice = createSlice({
  name: 'product',
  initialState: {
    ads: [],
    category: 'ALL',
    searchInput: '',
  },
  reducers: {
    setData: (state, action) => {
      state.ads = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    
  },
});

export const { setData, setCategory, setSearchInput } = productSlice.actions;
export default productSlice.reducer;
