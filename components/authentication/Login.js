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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.3:5000/login', {
        email,
        password,
      });

      const data = response.data;

      if (response.status === 200) {
        Alert.alert('Success', 'Login successful!');
        // You can store tokens or other necessary data here if required
        navigation.navigate('HomeScreen'); // Navigate to HomeScreen
      }
    } catch (error) {
      if (error.response) {
        Alert.alert('Error', error.response.data.message || 'Login failed.');
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>Login</Text>
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
            placeholderTextColor="#000"
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
            placeholderTextColor="#000"
          />
        </View>
        <Text style={{alignSelf: 'flex-end'}}>Forgot Password !</Text>
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Don’t Have an Account:</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.accountText, styles.accountRegistration]}>
            Click here to register
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.signUpButton}>
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
    height: 68,
  },
  info: {
    marginLeft: 10,
    flex: 1,
    fontSize: 18,
    color: 'black',
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
    marginTop: 100,
    height: 66,
  },
  signUpText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
  },
});
