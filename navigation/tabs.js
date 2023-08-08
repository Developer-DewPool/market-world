import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';
import ContactScreen from '../pages/ContactScreen';
import SettingsScreen from '../pages/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../pages/DetailsScreen';
import ProfileScreen from '../pages/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HOME" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Profile" component={ProfileScreen} />
        </SettingsStack.Navigator>
    );
}

const AboutStack = createNativeStackNavigator();
function AboutStackScreen() {
    return (
        <AboutStack.Navigator>
            <AboutStack.Screen name="ABOUT US" component={AboutScreen} />
        </AboutStack.Navigator>
    );
}

const ContactStack = createNativeStackNavigator();
function ContactStackScreen() {
    return (
        <ContactStack.Navigator>
            <ContactStack.Screen name="CONTACT US" component={ContactScreen} />
        </ContactStack.Navigator>
    );
}


const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
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
                name="HOME"
                component={HomeStackScreen}
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
                name="CONTACT US"
                component={ContactStackScreen}
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
                name="ABOUT US"
                component={AboutStackScreen}
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
                component={SettingsStackScreen} options={{
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
                }} />
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