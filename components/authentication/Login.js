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
import LeftArrow from 'react-native-vector-icons/AntDesign';
import Mail from 'react-native-vector-icons/MaterialCommunityIcons';
import Lock from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.mainContainer}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          fontStyle: 'italic',
          // margin: 10,
          alignSelf: 'center',
          alignItems: 'center',
          // marginTop: 20,
        }}>
        Login
      </Text>

      <Text
        style={{
          fontSize: 50,
          fontWeight: '500',
          fontStyle: 'italic',
          margin: 10,
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        Healthcare
      </Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoContainerEmail}>
          <Mail name="email-outline" size={28} />
          <TextInput style={styles.info} placeholder="Email" />
        </View>

        <View style={styles.infoContainerEmail}>
          <Lock name="lock" size={28} />
          <TextInput style={styles.info} placeholder="Number" />
        </View>
        <Text
          style={{alignSelf: 'flex-end', right: 'right', textAlign: 'right'}}>
          Forgot Password !
        </Text>
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Don’t Have an Account :</Text>
        <TouchableOpacity>
          <Text style={[styles.accountText, styles.accountRegistration]}>
            Click here to register
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.SignUpButton}>
        <Text style={styles.signUpText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  infoContainer: {
    // backgroundColor: 'yellow',
    padding: 10,
    justifyContent: 'space-around',
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
    // borderWidth: 1,
    // borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 10,
    // backgroundColor: 'green',
    fontSize: 20,
    fontWeight: '400',
  },
  line: {
    width: '95%',
    borderWidth: 0.5,
    margin: 5,
    alignSelf: 'center',
  },
  SignUpButton: {
    backgroundColor: '#5391B4',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    height: 66,
  },
  signUpText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
  },
  infoContainerEmail: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    borderWidth: 1,
    alignItems: 'center',
    padding: 6,
    borderRadius: 10,
    margin: 5,
    width: '100%',
    height: 68,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    marginTop: 50,
  },
  accountText: {fontWeight: '500', fontSize: 16, lineHeight: 25},
  accountRegistration: {
    color: '#04238E',
    marginLeft: 4,
  },
});
