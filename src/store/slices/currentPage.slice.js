import { createSlice } from '@reduxjs/toolkit';

export const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState: 1,
    reducers: {
        getCurrent: (state, action) => action.payload
    }
});


// Action creators are generated for each case reducer function
export const { getCurrent } = currentPageSlice.actions;
export default currentPageSlice.reducer