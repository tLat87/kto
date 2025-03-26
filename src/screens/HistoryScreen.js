// import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import TopSvg from '../assets/svg/TopSvg';
//
// const HistoryScreen = ({navigation}) => {
//
//     return (
//         <ScrollView style={{backgroundColor: '#000', flex: 1, paddingHorizontal: 16, borderTopColor: '#FF3238', borderWidth: 2}}>
//             <View
//                 style={{
//                     padding: 12,
//                     width: '90%',
//                     alignSelf: 'center',
//                     backgroundColor: '#1B1B1B',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     borderRadius: 22,
//                     borderWidth: 1,
//                     borderColor: '#282828',
//                     marginTop: 30,
//                 }}>
//                 <Text
//                     style={{
//                         color: '#fff',
//                         fontSize: 16,
//                         textAlign: 'center',
//                         fontWeight: '900',
//                     }}>
//                     SESSION HISTORY
//                 </Text>
//             </View>
//
//             <View
//                 style={{
//                     padding: 20,
//                     width: '90%',
//                     alignSelf: 'center',
//                     backgroundColor: '#1B1B1B',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     borderRadius: 22,
//                     borderWidth: 1,
//                     borderColor: '#282828',
//                     marginTop: 20,
//                 }}>
//                 <View style={{padding: 8, marginBottom: 10,}}>
//                     <Text style={{fontSize: 16, color: '#fff'}}>
//                         12.03.2024
//                     </Text>
//                 </View>
//
//                 <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginBottom: 12}}>
//                     <Text style={{fontSize: 16, color: '#fff'}}>
//                         Work:
//                     </Text>
//                     <View style={{backgroundColor: '#fff', borderRadius: 4, borderWidth: 1, borderColor: '#FF3238', padding: 6}}>
//                         <Text style={{fontSize: 16, color: '#FF3238'}}>
//                             25
//                         </Text>
//                     </View>
//                 </View>
//
//                 <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginBottom: 12}}>
//                     <Text style={{fontSize: 16, color: '#fff'}}>
//                         Short break:
//                     </Text>
//                     <View style={{backgroundColor: '#fff', borderRadius: 4, borderWidth: 1, borderColor: '#FF3238', padding: 6}}>
//                         <Text style={{fontSize: 16, color: '#FF3238'}}>
//                             25
//                         </Text>
//                     </View>
//                 </View>
//
//                 <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginBottom: 12}}>
//                     <Text style={{fontSize: 16, color: '#fff'}}>
//                         Long break:
//                     </Text>
//                     <View style={{backgroundColor: '#fff', borderRadius: 4, borderWidth: 1, borderColor: '#FF3238', padding: 6}}>
//                         <Text style={{fontSize: 16, color: '#FF3238'}}>
//                             25
//                         </Text>
//                     </View>
//                 </View>
//                 <TouchableOpacity
//                     onPress={()=>{}}
//                     style={{
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: '#FF3238',
//                         borderRadius: 22,
//                         padding: 19,
//                         marginTop: 13,
//                         width: '100%',
//                         alignSelf: 'center',
//                     }}>
//                     <Text style={{fontSize: 16, color: '#fff', fontWeight: '900'}}>
//                         Delete
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//
//             <View style={{marginBottom: 160}}/>
//         </ScrollView>
//     )
// }
//
// export default HistoryScreen
//

import React from 'react';
import {ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTimerState } from '../redux/slices/storeData';
import TopSvg from '../assets/svg/TopSvg';

const HistoryScreen = ({ navigation }) => {
    const history = useSelector(state => state.storeData.timerHistory);
    const dispatch = useDispatch();
    const vibrationEnabled = useSelector((state) => state.soundSettings.vibration);

    const formatMinutes = (seconds) => Math.floor(seconds / 60);

    console.log('session.shortBreakTime: ', history)
    return (
        <ScrollView style={{ backgroundColor: '#000', flex: 1, paddingHorizontal: 16, borderTopColor: '#FF3238', borderWidth: 2 }}>
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
                        fontWeight: '900',
                    }}>
                    SESSION HISTORY
                </Text>
            </View>

            {history.map((session, index) => {
                const date = new Date(session.date).toLocaleDateString();
                return (
                  <View
                    key={index}
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
                      marginTop: 20,
                    }}>
                    <View style={{padding: 8, marginBottom: 10}}>
                      <Text style={{fontSize: 16, color: '#fff'}}>{date}</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginBottom: 12,
                      }}>
                      <Text style={{fontSize: 16, color: '#fff'}}>Work:</Text>
                      <View
                        style={{
                          backgroundColor: '#fff',
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: '#FF3238',
                          padding: 6,
                        }}>
                        <Text style={{fontSize: 16, color: '#FF3238'}}>
                          {formatMinutes(session.workTime)}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginBottom: 12,
                      }}>
                      <Text style={{fontSize: 16, color: '#fff'}}>
                        Short Break:
                      </Text>
                      <View
                        style={{
                          backgroundColor: '#fff',
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: '#FF3238',
                          padding: 6,
                        }}>
                        <Text style={{fontSize: 16, color: '#FF3238'}}>
                          {formatMinutes(session.shortBreakTime)}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginBottom: 12,
                      }}>
                      <Text style={{fontSize: 16, color: '#fff'}}>
                        Long Break:
                      </Text>
                      <View
                        style={{
                          backgroundColor: '#fff',
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: '#FF3238',
                          padding: 6,
                        }}>
                        <Text style={{fontSize: 16, color: '#FF3238'}}>
                          {formatMinutes(session.longBreakTime)}
                        </Text>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                          if (vibrationEnabled) {
                              // Вибрация при нажатии
                              Vibration.vibrate(50); // Вибрация длительностью 50 мс
                          }
                        dispatch(deleteTimerState(index));
                      }}
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FF3238',
                        borderRadius: 22,
                        padding: 19,
                        marginTop: 13,
                        width: '100%',
                        alignSelf: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#fff',
                          fontWeight: '900',
                        }}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
            })}
            <View style={{ marginBottom: 160 }} />
        </ScrollView>
    );
};

export default HistoryScreen;
