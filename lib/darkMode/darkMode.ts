import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
  value: String;
}

const initialState: DarkModeState = {
  value: "light",
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {},
});

export default darkModeSlice.reducer;
