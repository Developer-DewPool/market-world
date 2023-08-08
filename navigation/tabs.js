import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';
import ContactScreen from '../pages/ContactScreen';
import SettingsScreen from '../pages/SettingsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text 
                            style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                                HOME
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
            name="Contact Us" 
            component={ContactScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/icons/contact-us.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        <Text 
                        style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                            CONTACT US
                        </Text>
                    </View>
                )
            }}
            />
            <Tab.Screen 
            name="About Us" 
            component={AboutScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/icons/about-us.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        <Text 
                        style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                            ABOUT US
                        </Text>
                    </View>
                )
            }}
            />
            <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/icons/free-settings.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        <Text 
                        style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                            SETTINGS
                        </Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})


export default Tabs;