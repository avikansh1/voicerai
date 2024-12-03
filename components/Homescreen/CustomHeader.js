import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Menu from 'react-native-vector-icons/Entypo';

const CustomHeader = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      {/* Hamburger Menu */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        {/* <Image
          source={require('./assets/menu-icon.png')} // Replace with your menu icon
          style={styles.menuIcon}
        /> */}
        <Menu name="menu" />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../../assets/logo.png')} // Replace with your logo image
        style={styles.logo}
      />

      {/* Microphone Icon */}
      <TouchableOpacity onPress={() => console.log('Microphone pressed')}>
        <Image
          source={require('../../assets/mic.png')} // Replace with your microphone icon
          style={styles.microphoneIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

// Styles
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: '#fff', // Adjust the background color
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: 'black', // Optional: Change color if needed
  },
  logo: {
    width: 120, // Adjust to fit your logo
    height: 40,
    resizeMode: 'contain',
  },
  microphoneIcon: {
    width: 30,
    height: 30,
    tintColor: 'black', // Optional: Change color if needed
  },
});
