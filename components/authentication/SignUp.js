/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
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

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.3:5000/signUp', {
        email,
        password,
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login'); // Navigate to Login screen
      }
    } catch (error) {
      if (error.response) {
        // Check if error.response exists and handle it
        console.log('Error Response:', error.response);
        Alert.alert('Error', error.response.data.message || 'Sign-up failed.');
      } else if (error.request) {
        // The request was made but no response was received
        console.log('Error Request:', error.request);
        Alert.alert('Error', 'No response received. Please try again later.');
      } else {
        // Something else happened in setting up the request
        console.log('Error Message:', error.message);
        Alert.alert('Error', `Something went wrong: ${error.message}`);
      }
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>SignUp</Text>

      <Text style={styles.subtitle}>Healthcare</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoContainerEmail}>
          <Mail name="email-outline" size={28} />
          <TextInput
            style={styles.info}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.infoContainerEmail}>
          <Lock name="lock" size={28} />
          <TextInput
            style={styles.info}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.infoContainerEmail}>
          <Lock name="lock" size={28} />
          <TextInput
            style={styles.info}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
      </View>

      {/* <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.accountText, styles.accountRegistration]}>
            Click here to login
          </Text>
        </TouchableOpacity>
      </View> */}

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
  infoContainerEmail: {
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
