import { createSlice } from '@reduxjs/toolkit'

export const sportsSlice = createSlice({
  name: 'sports',
  initialState: {
    sports: [],
    loading: false,
  },
  reducers: {
    setSports: (state, action) => {
      state.sports = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
})

export const { setSports, setLoading} = sportsSlice.actions;

export const selectSports = state => state.sports.sports;
export const selectLoading = state => state.sports.loading;

export default sportsSlice.reducer;