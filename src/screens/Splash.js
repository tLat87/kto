import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();

    const white1 = useRef(new Animated.Value(300)).current;
    const white2 = useRef(new Animated.Value(300)).current;
    const white3 = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        // Анимация и переход после завершения
        Animated.stagger(300, [
            Animated.timing(white1, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(white2, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(white3, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(() => {
            navigation.navigate('Welcome');
        });
    }, []);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#000',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingVertical: 40,
            }}>
            <View style={{ paddingLeft: '30%' }}>
                {/* KEEP */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -20 }}>
                    <Text style={{ color: '#FF3238', fontSize: 70, fontWeight: '900' }}>K</Text>
                    <Animated.Text
                        style={{
                            color: '#fff',
                            fontSize: 70,
                            fontWeight: '900',
                            transform: [{ translateX: white1 }],
                        }}>
                        EEP
                    </Animated.Text>
                </View>

                {/* TIME */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -20 }}>
                    <Text style={{ color: '#FF3238', fontSize: 70, fontWeight: '900' }}>T</Text>
                    <Animated.Text
                        style={{
                            color: '#fff',
                            fontSize: 70,
                            fontWeight: '900',
                            transform: [{ translateX: white2 }],
                        }}>
                        IME
                    </Animated.Text>
                </View>

                {/* ON */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#FF3238', fontSize: 70, fontWeight: '900' }}>O</Text>
                    <Animated.Text
                        style={{
                            color: '#fff',
                            fontSize: 70,
                            fontWeight: '900',
                            transform: [{ translateX: white3 }],
                        }}>
                        N
                    </Animated.Text>
                </View>
            </View>
        </View>
    );
};

export default Splash;
