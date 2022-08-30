import { createSlice } from '@reduxjs/toolkit';

export const nameTrainerSlice = createSlice({
    name: 'nameTrainer',
    initialState: '',
    reducers: {
        getName: (state, action) => action.payload
    }
});


export const { getName } = nameTrainerSlice.actions;
export default nameTrainerSlice.reducer