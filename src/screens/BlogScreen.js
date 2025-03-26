

import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React from 'react';
import TopSvg from '../assets/svg/TopSvg';
import Share from 'react-native-share';
import {useSelector} from 'react-redux';
const blogs = [
    {
        title: 'Mastering the Pomodoro Technique: A Simple Way to Boost Productivity',
        description:'The Pomodoro technique has been a game-changer for many people trying to improve their time management. But how exactly does it work, and why is it so effective?\n' +
            '    The Pomodoro method divides your work into 25-minute focused intervals, followed by a 5-minute break. These short bursts of intense focus prevent burnout and keep your mind fresh. The key is to eliminate distractions during these 25 minutes and give yourself a mental reset during the break.\n' +
            'Studies show that working in chunks of time helps to improve concentration and mental stamina. It also allows you to track your progress, making even the most daunting tasks feel manageable. Whether you’re tackling a work project or studying for exams, the Pomodoro method can make a huge difference in how you approach tasks.\n',
    },
    {
        title: 'How to Customize Your Pomodoro Timer for Maximum Focus',
        description:'One of the most powerful features of the KTO app is the ability to customize your Pomodoro timer to fit your unique work style. But what’s the best setup for you? Here\'s a guide to help you tweak the timer for optimal results:\n' +
            '    Adjust Session Length: While 25 minutes is the standard for Pomodoro, some people prefer longer or shorter sessions. If you find that 25 minutes isn’t enough time, extend it to 30 or 40 minutes. On the other hand, if you’re feeling overwhelmed, try shorter sessions to build up your focus gradually.\n' +
            '    Set Longer Breaks: If you need a more substantial break after a few sessions, adjust your break times. You might find that 10 minutes after each cycle or a longer 30-minute break after four sessions works best for you.\n',
    },
    {
        title: 'Why Time Management Matters: Unlocking Your Full Potential',
        description:'Time management isn’t just about checking off tasks—it’s about working smarter, not harder. By learning how to manage your time effectively, you can reduce stress, increase productivity, and even make more time for relaxation and self-care.\n' +
            '    The Pomodoro technique is just one way to approach time management, but it offers a simple yet highly effective method for maintaining focus and staying organized. By breaking your day into focused intervals, you can avoid the trap of procrastination and make steady progress toward your goals.\n' +
            '    Effective time management also involves setting clear priorities. It’s easy to get overwhelmed by a long to-do list, but using tools like the KTO app can help you break tasks into manageable steps. With a clear structure and the right tools, you’ll be amazed at how much you can accomplish—and how much more time you’ll have for the things you enjoy.\n',
    },
]

const BlogScreen = ({ navigation }) => {
    const vibrationEnabled = useSelector((state) => state.soundSettings.vibration);
    const handleShare = async (story) => {
        if (vibrationEnabled) {
            // Вибрация при нажатии
            Vibration.vibrate(50); // Вибрация длительностью 50 мс
        }
        try {
            await Share.open({
                title: story.title,
                message: `${story.title}\n\n${story.description}`,
                subject: 'Check out this blog from KTO!',
            });
        } catch (error) {
            console.log('Share error:', error);
        }
    };

    return (
      <ScrollView
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
              fontWeight: '900',
            }}>
            BLOG
          </Text>
        </View>

        {blogs.map((story, index) => (
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
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                {story.title}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                    if (vibrationEnabled) {
                        // Вибрация при нажатии
                        Vibration.vibrate(50); // Вибрация длительностью 50 мс
                    }
                  navigation.navigate('ReadingBlog', {story});
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
                  Read
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleShare(story)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 22,
                  padding: 19,
                  width: '48%',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '900'}}>
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={{marginBottom: 160}} />
      </ScrollView>
    );
};

export default BlogScreen;
