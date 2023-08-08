import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const ContactScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#a1285e', flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16
                        }}>
                        You are on ContactScreen
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    React Native Bottom Navigation
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    www.demo.com
                </Text>
            </View>
        </SafeAreaView>
    );
}
export default ContactScreen;