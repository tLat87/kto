import {View, Text, TouchableOpacity, TextInput, Vibration} from 'react-native';
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setWorkTime, setShortBreak, setLongBreak, resetSessionSettings } from '../redux/slices/sessionSlice';

const SessionScreen = () => {
    const dispatch = useDispatch();
    const vibrationEnabled = useSelector((state) => state.soundSettings.vibration);

    // Локальные состояния
    const [workTime, setWorkTimeLocal] = useState(25);
    const [shortBreak, setShortBreakLocal] = useState(5);
    const [longBreak, setLongBreakLocal] = useState(15);

    // Обработчики ввода
    const handleWorkTimeChange = (value) => {
        if (!isNaN(value)) {
            setWorkTimeLocal(Number(value));
        }
    };

    const handleShortBreakChange = (value) => {
        if (!isNaN(value)) {
            setShortBreakLocal(Number(value));
        }
    };

    const handleLongBreakChange = (value) => {
        if (!isNaN(value)) {
            setLongBreakLocal(Number(value));
        }
    };

    // Сохранение в Redux
    const saveSessionSettings = () => {
        if (vibrationEnabled) {
            // Вибрация при нажатии
            Vibration.vibrate(50); // Вибрация длительностью 50 мс
        }
        dispatch(setWorkTime(workTime));
        dispatch(setShortBreak(shortBreak));
        dispatch(setLongBreak(longBreak));
    };

    // Сброс
    const resetSessionSettingsLocal = () => {
        if (vibrationEnabled) {
            // Вибрация при нажатии
            Vibration.vibrate(50); // Вибрация длительностью 50 мс
        }
        setWorkTimeLocal(25);
        setShortBreakLocal(5);
        setLongBreakLocal(15);
        dispatch(resetSessionSettings());
    };

    return (
        <View style={{ backgroundColor: '#000', flex: 1, paddingHorizontal: 16, borderTopColor: '#FF3238', borderWidth: 2 }}>
            <View style={{
                padding: 12, width: '90%', alignSelf: 'center', backgroundColor: '#1B1B1B',
                flexDirection: 'column', alignItems: 'center', borderRadius: 22, borderWidth: 1, borderColor: '#282828', marginTop: 30
            }}>
                <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', fontWeight: '900' }}>
                    SESSION SETTINGS:
                </Text>
            </View>

            <View style={{
                padding: 20, width: '90%', alignSelf: 'center', backgroundColor: '#1B1B1B',
                flexDirection: 'column', alignItems: 'center', borderRadius: 22, borderWidth: 1, borderColor: '#282828', marginTop: 20
            }}>
                <View style={{ padding: 8, marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Time (MINUTES)</Text>
                </View>

                {/* Work Time */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 12 }}>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Work:</Text>
                    <TextInput
                        value={workTime.toString()}
                        onChangeText={handleWorkTimeChange}
                        keyboardType="numeric"
                        style={inputStyles}
                    />
                </View>

                {/* Short Break */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 12 }}>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Short break:</Text>
                    <TextInput
                        value={shortBreak.toString()}
                        onChangeText={handleShortBreakChange}
                        keyboardType="numeric"
                        style={inputStyles}
                    />
                </View>

                {/* Long Break */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 12 }}>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Long break:</Text>
                    <TextInput
                        value={longBreak.toString()}
                        onChangeText={handleLongBreakChange}
                        keyboardType="numeric"
                        style={inputStyles}
                    />
                </View>

                {/* Save Button */}
                <TouchableOpacity
                    onPress={saveSessionSettings}
                    style={{
                        alignItems: 'center', justifyContent: 'center', backgroundColor: '#4CAF50',
                        borderRadius: 22, padding: 16, marginTop: 8, width: '100%', alignSelf: 'center',
                    }}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '900' }}>Save</Text>
                </TouchableOpacity>

                {/* Reset Button */}
                <TouchableOpacity
                    onPress={resetSessionSettingsLocal}
                    style={{
                        alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF3238',
                        borderRadius: 22, padding: 16, marginTop: 10, width: '100%', alignSelf: 'center',
                    }}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '900' }}>Reset</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 160 }} />
        </View>
    );
};

const inputStyles = {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF3238',
    padding: 6,
    textAlign: 'center',
    width: 60,
    fontSize: 16,
};

export default SessionScreen;
