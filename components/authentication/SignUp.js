/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Mail from 'react-native-vector-icons/MaterialCommunityIcons';
import Lock from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const API_URL = 'http://192.168.1.3:5000/signUp';

  const handleSignUp = async () => {
    console.log('SignUp button pressed'); // Debug: Confirm button is pressed

    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      console.log('Sending signup request to server...'); // Debug: Track API call
      const response = await axios.post(API_URL, {
        email,
        password,
      });

      console.log('Response received:', response.data); // Debug: Log server response

      if (response.status === 201) {
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login'); // Navigate to Login screen
      } else {
        Alert.alert('Error', 'Unexpected response. Please try again.');
      }
    } catch (error) {
      console.error('SignUp Error:', error); // Debug: Log full error for analysis

      if (error.response) {
        // Server error response
        console.error('Error Response:', error.response);
        Alert.alert('Error', error.response.data.message || 'Sign-up failed.');
      } else if (error.request) {
        // No response received
        console.error('Error Request:', error.request);
        Alert.alert('Error', 'No response received. Please try again later.');
      } else {
        // Other errors
        console.error('Error Message:', error.message);
        Alert.alert('Error', `Something went wrong: ${error.message}`);
      }
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>SignUp</Text>
      <Text style={styles.subtitle}>Healthcare</Text>

      <View style={styles.infoContainer}>
        <View style={styles.inputRow}>
          <Mail name="email-outline" size={28} />
          <TextInput
            style={styles.info}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.inputRow}>
          <Lock name="lock" size={28} />
          <TextInput
            style={styles.info}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.inputRow}>
          <Lock name="lock" size={28} />
          <TextInput
            style={styles.info}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="black"
          />
        </View>
      </View>

      <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 50,
    fontWeight: '500',
    fontStyle: 'italic',
    margin: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
  infoContainer: {
    padding: 10,
    justifyContent: 'space-around',
    flex: 1,
    borderRadius: 10,
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    padding: 6,
    borderRadius: 10,
    margin: 5,
    width: '100%',
    height: 68,
  },
  info: {
    marginLeft: 10,
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  signUpButton: {
    backgroundColor: '#5391B4',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    height: 66,
  },
  signUpText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
  },
});
