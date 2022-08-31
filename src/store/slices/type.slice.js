import { createSlice } from '@reduxjs/toolkit';

export const typeSlice = createSlice({
    name: 'type',
    initialState: 'All Pokemons',
    reducers: {
        getType: (state, action) => action.payload
    }
});


// Action creators are generated for each case reducer function
export const { getType } = typeSlice.actions;
export default typeSlice.reducer