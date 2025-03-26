import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setWorkTime: (state, action) => {
            state.workTime = action.payload;
        },
        setShortBreak: (state, action) => {
            state.shortBreak = action.payload;
        },
        setLongBreak: (state, action) => {
            state.longBreak = action.payload;
        },
        resetSessionSettings: (state) => {
            state.workTime = 25;
            state.shortBreak = 5;
            state.longBreak = 15;
        }
    },
});

export const { setWorkTime, setShortBreak, setLongBreak, resetSessionSettings } = sessionSlice.actions;
export default sessionSlice.reducer;
