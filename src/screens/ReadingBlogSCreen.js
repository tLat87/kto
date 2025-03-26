import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React from 'react';
import TopSvg from '../assets/svg/TopSvg';
import {useSelector} from 'react-redux';

const ReadingBlogSCreen = ({navigation, route}) => {
    const {story} = route.params;
    const vibrationEnabled = useSelector((state) => state.soundSettings.vibration);

    return (
        <ScrollView style={{backgroundColor: '#000', flex: 1, paddingHorizontal: 24, borderTopColor: '#FF3238', borderWidth: 2}}>
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
                    Reading
                </Text>
            </View>

            <Text style={{color: '#fff', fontSize: 16, marginTop: 26,fontWeight: '900',marginBottom: 16}}>
                {story.title}
            </Text>

            <Text style={{color: '#fff', fontSize: 16,}}>
                {story.description}
            </Text>


            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
                <TouchableOpacity
                    onPress={() => {
                        if (vibrationEnabled) {
                            // Вибрация при нажатии
                            Vibration.vibrate(50); // Вибрация длительностью 50 мс
                        }
                        navigation.goBack();
                    }}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FF3238',
                        borderRadius: 22,
                        padding: 19,
                        width: '48%',
                        alignSelf: 'center',
                    }}>
                    <Text style={{fontSize: 16, color: '#fff', fontWeight: '900'}}>
                        Back
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{marginBottom: 160}}/>
        </ScrollView>
    )
}

export default ReadingBlogSCreen

