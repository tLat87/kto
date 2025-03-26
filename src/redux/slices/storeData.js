import { createSlice } from '@reduxjs/toolkit';

const storeData = createSlice({
    name: 'storeData',
    initialState: {
        timerHistory: [],
    },
    reducers: {
        addTimerState: (state, action) => {
            state.timerHistory.push(action.payload);
        },
        deleteTimerState: (state, action) => {
            state.timerHistory.splice(action.payload, 1);
        },
    },
});

export const { addTimerState, deleteTimerState } = storeData.actions;
export default storeData.reducer;
