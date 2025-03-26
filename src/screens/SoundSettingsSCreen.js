import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Switch,
    Vibration
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStageSound, setNotificationSound, setVibration } from '../redux/slices/soundSettingsSlice'; // путь может отличаться

const SoundSettingsScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const { stageSound, notificationSound, vibration } = useSelector(
        (state) => state.soundSettings
    );

    const handleSave = () => {
        if (vibration) {
            Vibration.vibrate(50);
        }
        navigation.goBack();
    };

    return (
        <ScrollView
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 24,
                borderTopColor: '#FF3238',
                borderWidth: 2,
            }}>
            <View
                style={{
                    padding: 12,
                    width: '100%',
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
                        fontWeight: '900',
                    }}>
                    SOUND SETTINGS:
                </Text>
            </View>

            <View
                style={{
                    backgroundColor: '#1B1B1B',
                    borderRadius: 12,
                    padding: 16,
                    marginTop: 20,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 12,
                    }}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>
                        Stage change sound
                    </Text>
                    <Switch
                        value={stageSound}
                        onValueChange={(val) => dispatch(setStageSound(val))}
                        trackColor={{ false: '#444', true: '#34C759' }}
                    />
                </View>

                {/*<View*/}
                {/*    style={{*/}
                {/*        flexDirection: 'row',*/}
                {/*        justifyContent: 'space-between',*/}
                {/*        alignItems: 'center',*/}
                {/*        marginBottom: 12,*/}
                {/*    }}>*/}
                {/*    <Text style={{ color: '#fff', fontSize: 16 }}>*/}
                {/*        Notification sound*/}
                {/*    </Text>*/}
                {/*    <Switch*/}
                {/*        value={notificationSound}*/}
                {/*        onValueChange={(val) => dispatch(setNotificationSound(val))}*/}
                {/*        trackColor={{ false: '#444', true: '#34C759' }}*/}
                {/*    />*/}
                {/*</View>*/}

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Vibration</Text>
                    <Switch
                        value={vibration}
                        onValueChange={(val) => dispatch(setVibration(val))}
                        trackColor={{ false: '#444', true: '#34C759' }}
                    />
                </View>
            </View>

            <TouchableOpacity
                onPress={handleSave}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FF3238',
                    borderRadius: 22,
                    padding: 19,
                    width: '48%',
                    alignSelf: 'center',
                    marginTop: 30,
                }}>
                <Text
                    style={{
                        fontSize: 16,
                        color: '#fff',
                        fontWeight: '900',
                    }}>
                    SAVE
                </Text>
            </TouchableOpacity>

            <View style={{ marginBottom: 160 }} />
        </ScrollView>
    );
};

export default SoundSettingsScreen;
