import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import WelcomeScreen from "./src/navigation/WelcomeScreen";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import ReadingBlogSCreen from "./src/screens/ReadingBlogSCreen";
import Splash from "./src/screens/Splash";


const Stack = createStackNavigator();

const Left = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>

        </TouchableOpacity>
    )
}


export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerLeft: Left,  headerStyle: { backgroundColor: '#1B1B1B', height: 130 },
                        headerTitleStyle: {
                            color: '#FF3238',
                            fontWeight: '900',
                            fontSize: 52,
                        },
                        headerTitle: "KTO",
                    }}>
                        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />

                        <Stack.Screen name="ReadingBlog" component={ReadingBlogSCreen} options={{ }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
