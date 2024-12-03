import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Gender = () => {
  return (
    <View style={styles.mainComponent}>
      <Text style={{fontSize: 22, fontWeight: '500'}}>
        Avikansh, It's greate been connecting with you.
      </Text>
      <Text style={{fontSize: 18, fontWeight: '400', marginTop: 20}}>
        Please Select your gender.
      </Text>

      <View style={styles.selectGenderContainer}></View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  selectGenderContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
