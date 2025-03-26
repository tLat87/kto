import {Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'; // Импортируем useDispatch для работы с Redux
import TopSvg from '../assets/svg/TopSvg';
import {addTimerState} from '../redux/slices/storeData';
import Sound from 'react-native-sound';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch(); // Инициализируем диспетчер для отправки данных в Redux
    const sessionSettings = useSelector((state) => state.session);
    const [workTimer, setWorkTimer] = useState(sessionSettings.workTime * 60);
    const [shortBreakTimer, setShortBreakTimer] = useState(sessionSettings.shortBreak * 60);
    const [longBreakTimer, setLongBreakTimer] = useState(sessionSettings.longBreak * 60);
    const [currentTimer, setCurrentTimer] = useState('WORK');  // Текущий активный таймер
    const [isRunning, setIsRunning] = useState(false);  // Флаг для проверки, работает ли таймер
    const vibrationEnabled = useSelector((state) => state.soundSettings.vibration);
    const stageSound = useSelector((state) => state.soundSettings.stageSound);


    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                if (currentTimer === 'WORK' && workTimer > 0) {
                    setWorkTimer(prev => prev - 1);
                } else if (currentTimer === 'SHORT BREAK' && shortBreakTimer > 0) {
                    setShortBreakTimer(prev => prev - 1);
                } else if (currentTimer === 'LONG BREAK' && longBreakTimer > 0) {
                    setLongBreakTimer(prev => prev - 1);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, [isRunning, workTimer, shortBreakTimer, longBreakTimer, currentTimer]);

    const clickSound = new Sound('2664.wav', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('Failed to load sound', error);
        }
    });


    const handleModeChange = (mode) => {
        if (vibrationEnabled) {
            Vibration.vibrate(50);
        }

        if (stageSound) {
            clickSound.stop(() => {
                clickSound.play((success) => {
                    if (!success) {
                        console.log('Sound did not play');
                    }
                });
            });
        };

        if (isRunning) {
            setCurrentTimer(mode);
        }
    };

    const startTimer = () => {
        if (vibrationEnabled) {
            // Вибрация при нажатии
            Vibration.vibrate(50); // Вибрация длительностью 50 мс
        }
        setIsRunning(true);
        setCurrentTimer('WORK');
    };

    const endTimer = () => {
        if (vibrationEnabled) {
            // Вибрация при нажатии
            Vibration.vibrate(50); // Вибрация длительностью 50 мс
        }
        const session = {
            date: new Date().toISOString(),
            workTime: workTimer,
            shortBreakTime: shortBreakTimer,
            longBreakTime: longBreakTimer,
        };

        dispatch(addTimerState(session));

        setWorkTimer(25 * 60);
        setShortBreakTimer(5 * 60);
        setLongBreakTimer(15 * 60);
        setIsRunning(false);
        setCurrentTimer('WORK');
    };


    const formatTime = (seconds) => {

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <View
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
                borderTopColor: '#FF3238',
                borderWidth: 2,
            }}>
            <View
                style={{
                    padding: 12,
                    width: '90%',
                    alignSelf: 'center',
                    backgroundColor: '#1B1B1B',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 22,
                    borderWidth: 1,
                    borderColor: '#282828',
                    marginTop: 30,
                }}>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16,
                        textAlign: 'center',
                    }}>
                    12.03.2024
                </Text>
            </View>
            <View
                style={{
                    padding: 20,
                    width: '90%',
                    alignSelf: 'center',
                    backgroundColor: '#1B1B1B',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderTopLeftRadius: 22,
                    borderTopRightRadius: 22,
                    borderWidth: 1,
                    borderColor: '#282828',
                    marginTop: 20,
                }}>
                <View
                    style={{
                        backgroundColor: '#FF3238',
                        padding: 8,
                        position: 'absolute',
                        top: 0,
                        borderBottomRightRadius: 12,
                        borderBottomLeftRadius: 12,
                    }}>
                    <TopSvg />
                </View>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 60,
                        marginTop: 30,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                    {currentTimer === 'WORK' && formatTime(workTimer)}
                    {currentTimer === 'SHORT BREAK' && formatTime(shortBreakTimer)}
                    {currentTimer === 'LONG BREAK' && formatTime(longBreakTimer)}
                </Text>
            </View>

            <View
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    backgroundColor: '#1B1B1B',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderBottomRightRadius: 22,
                    borderBottomLeftRadius: 22,
                    borderWidth: 1,
                    borderColor: '#282828',
                }}>
                <TouchableOpacity
                    onPress={() => handleModeChange('SHORT BREAK')}
                    disabled={!isRunning}
                    style={{
                        backgroundColor:
                            currentTimer === 'SHORT BREAK' ? '#3d3d3d' : 'transparent',
                        width: '100%',
                    }}>
                    <Text
                        style={{
                            color: currentTimer === 'SHORT BREAK' ? '#FF3238' : '#A4A4A4',
                            fontSize: 22,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginVertical: 13,
                        }}>
                        SHORT BREAK
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleModeChange('WORK')}
                    style={{
                        backgroundColor:
                            currentTimer === 'WORK' ? '#3d3d3d' : 'transparent',
                        width: '100%',
                    }}>
                    <Text
                        style={{
                            color: currentTimer === 'WORK' ? '#FF3238' : '#A4A4A4',
                            fontSize: 22,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginVertical: 13,
                        }}>
                        WORK!
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleModeChange('LONG BREAK')}
                    disabled={!isRunning}
                    style={{
                        backgroundColor:
                            currentTimer === 'LONG BREAK' ? '#3d3d3d' : 'transparent',
                        width: '100%',
                    }}>
                    <Text
                        style={{
                            color: currentTimer === 'LONG BREAK' ? '#FF3238' : '#A4A4A4',
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 13,
                            textAlign: 'center',
                        }}>
                        LONG BREAK
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={isRunning ? endTimer : startTimer}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FF3238',
                    borderRadius: 22,
                    padding: 19,
                    marginTop: 13,
                    width: '90%',
                    alignSelf: 'center',
                }}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '900'}}>
                    {isRunning ? 'END' : 'START'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
