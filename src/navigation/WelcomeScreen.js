import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
            title: "Welcome to KTO – Keep Time On!",
            description: "Optimize your time with the Pomodoro method. Ready to work effectively? Let's get started!",
        },
        {
            title: "Use the Pomodoro Timer",
            description: "Break your work into 25-minute sessions to stay focused and productive. After each session, take a short break.",
        },
        {
            title: "Setup Sound Effects",
            description: "Turn on/off the sounds that help you track time and stay focused. The choice is yours!",
        },
        {
            title: "Session Settings",
            description: "Set your own timer preferences or choose from preset options for a quick start.",
        },
        {
            title: "Read Our Blog",
            description: "Learn more about the Pomodoro method and how to manage your time effectively through our blog.",
        },
        {
            title: "Get Started!",
            description: "Ready for productive work? Start now and take control of your time!",
        }
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigation.navigate('MainTab');
        }
    };

    return (
      <View style={styles.container}>
        <View style={{paddingLeft: '30%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: -20,
            }}>
            <Text style={{color: '#FF3238', fontSize: 70, fontWeight: '900'}}>
              K
            </Text>
            <Text style={{color: '#fff', fontSize: 70, fontWeight: '900'}}>
              EEP
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: -20,
            }}>
            <Text style={{color: '#FF3238', fontSize: 70, fontWeight: '900'}}>
              T
            </Text>
            <Text style={{color: '#fff', fontSize: 70, fontWeight: '900'}}>
              IME
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#FF3238', fontSize: 70, fontWeight: '900'}}>
              O
            </Text>
            <Text style={{color: '#fff', fontSize: 70, fontWeight: '900'}}>
              N
            </Text>
          </View>
        </View>

        <View
          style={{
            padding: 20,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: '#1B1B1B',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 22,
            borderWidth: 1,
            borderColor: '#282828',
            marginTop: 50,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {steps[currentStep].title}
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
              marginBottom: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
            }}>
              {steps[currentStep].description}
          </Text>

          <TouchableOpacity
            onPress={handleNext}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FF3238',
              borderRadius: 12,
              padding: 16,
              width: '100%',
            }}>
            <Text style={{fontSize: 16, color: '#fff', fontWeight: '900'}}>
                Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    image: {},
    indicatorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    indicatorActive: {
        width: 60,
        height: 18,
        backgroundColor: '#B80041',
        borderRadius: 5,
    },
    indicatorInactive: {
        width: 60,
        height: 18,
        backgroundColor: '#80334a',
        borderRadius: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
    },
});

export default WelcomeScreen;
