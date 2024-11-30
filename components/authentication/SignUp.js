/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.mainContainer}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          fontStyle: 'italic',
          margin: 10,
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        Hey! Let's start with your an intro
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <TextInput style={styles.name} placeholder="Enter Your First Name" />
          <TextInput style={styles.name} placeholder="Enter Your Last Name" />
        </View>
        <View style={styles.line}></View>
        <TextInput style={styles.info} placeholder="Email" />
        <View style={styles.line}></View>
        <TextInput style={styles.info} placeholder="Age" />
        <View style={styles.line}></View>
        <TextInput style={styles.info} placeholder="Number" />
        <View style={styles.line}></View>
        <View style={styles.nameContainer}>
          <TextInput style={styles.name} placeholder="Country" />
          <TextInput style={styles.name} placeholder="City" />
        </View>
        <View style={styles.line}></View>
        <TextInput style={styles.info} placeholder="Gender" />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.SignUpButton}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'space-between',
    flex: 1,
    // borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    borderRadius: 10,
    borderWidth: 1,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    margin: 5,
  },
  info: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 10,
  },
  line: {
    width: '95%',
    borderWidth: 0.5,
    margin: 5,
    alignSelf: 'center',
  },
  SignUpButton: {
    backgroundColor: '#ff8c00',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});
