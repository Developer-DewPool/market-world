import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import Communications from 'react-native-communications';

const dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };

 const sendSMS = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `sms:${number}`; }
    else {phoneNumber = `smsprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };



const ContactScreen = () => {
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Make Phone Call, Send SMS or Email
          Using React Native Communication
        </Text>
        <Button
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={()=>{dialCall(7478403552)}}>
          <Text style={styles.buttonTextStyle}>
            Make Phone Call
          </Text>
        </Button>
        <Button
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('mailto:info@softwareinnovationhub.com?subject=SendMail&body=Description') }
          >
          <Text style={styles.buttonTextStyle}>
            Send an Email
          </Text>
        </Button>
        {/* SMS: text(phoneNumber = null, body = null) */}
        <Button
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => sendSMS(7478403552)}>
          <Text style={styles.buttonTextStyle}>
            Send a Text/iMessage
          </Text>
        </Button>
        {/* Web: web(address = null)*/}
        <Button
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={
            () => Linking.openURL('https://market.softwareinnovationhub.com')
          }>
          <Text style={styles.buttonTextStyle}>
            Open softwareinnovationhub
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a1285e',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
  },
});