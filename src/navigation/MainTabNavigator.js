import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

import HomeSvg from '../assets/svg/HomeSvg';
import SoundSettingsSCreen from '../screens/SoundSettingsSCreen';
import SoundSvg from '../assets/svg/SoundSvg';
import SessionScreen from '../screens/SessionScreen';
import SettingsSvg from '../assets/svg/SettingsSvg';
import BlogScreen from '../screens/BlogScreen';
import BookSvg from '../assets/svg/BookSvg';
import HistoryScreen from '../screens/HistoryScreen';
import PlaySvg from '../assets/svg/PlaySvg';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#1B1B1B', height: 130 },
                headerTitleStyle: {
                    color: '#FF3238',
                    fontWeight: '900',
                    fontSize: 52,
                },
                headerTitle: "KTO",
                headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    width: '70%',
                    marginLeft: '15%',
                    backgroundColor: '#1E1E1E',
                    borderRadius: 22,
                    paddingHorizontal: 1,
                    borderWidth: 3,
                    borderColor: '#282828',
                    paddingTop: 20,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,

                },
                tabBarIcon: ({ focused }) => {
                    let IconComponent;

                    if (route.name === 'Home') {
                        return (
                            <View style={{
                                backgroundColor: '#FF3238',
                                borderRadius: 12,
                                padding: 10,
                            }}>
                                <PlaySvg color={focused ? '#fff' : '#000'} />
                            </View>
                        );
                    }if (route.name === 'SoundSettings') {
                        IconComponent = SoundSvg;
                    }if (route.name === 'Session') {
                        IconComponent = SettingsSvg;
                    }if (route.name === 'Blog') {
                        IconComponent = BookSvg;
                    }if (route.name === 'History') {
                        IconComponent = HomeSvg;
                    }

                    return <IconComponent color={focused ? '#FF3238' : '#fff'} />;
                },
            })}
        >

            <Tab.Screen
                name="History"
                component={HistoryScreen}
                options={{
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen
                name="SoundSettings"
                component={SoundSettingsSCreen}
                options={{
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen
                name="Blog"
                component={BlogScreen}
                options={{
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen
                name="Session"
                component={SessionScreen}
                options={{
                    tabBarLabel: '',
                }}
            />


        </Tab.Navigator>
    );
};

export default MainTabNavigator;
