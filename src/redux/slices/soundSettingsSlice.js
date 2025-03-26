import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stageSound: true,
    notificationSound: true,
    vibration: true,
};

const soundSettingsSlice = createSlice({
    name: 'soundSettings',
    initialState,
    reducers: {
        setStageSound: (state, action) => {
            state.stageSound = action.payload;
        },
        setNotificationSound: (state, action) => {
            state.notificationSound = action.payload;
        },
        setVibration: (state, action) => {
            state.vibration = action.payload;
        },
    },
});

export const { setStageSound, setNotificationSound, setVibration } = soundSettingsSlice.actions;
export default soundSettingsSlice.reducer;
