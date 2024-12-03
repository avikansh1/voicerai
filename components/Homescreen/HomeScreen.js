/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.mainComponent}>
        <View style={styles.headerContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: 'red',
              padding: 10,
              justifyContent: 'space-evenly',
            }}>
            <Image
              style={{marginRight: 25}}
              source={require('../../assets/burger_bar.png')}
            />
            <Image source={require('../../assets/logo.png')} />
          </View>
          <TouchableOpacity
            style={{
              // backgroundColor: 'green',
              padding: 15,
              borderRadius: 25,
              borderWidth: 2,
            }}>
            <Image source={require('../../assets/mic_logo.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.optionContainer}>
          <View style={styles.otionsUpperContainer}>
            <Pressable style={styles.optionContainerButton}>
              <Text style={styles.optionText}>Questions</Text>
              <Image source={require('../../assets/questionIcon.png')} />
            </Pressable>
            <Pressable style={styles.optionContainerButton}>
              <Text style={styles.optionText}>Reminders</Text>
              <Image source={require('../../assets/remindersIcon.png')} />
            </Pressable>
          </View>
          <View style={styles.otionsUpperContainer}>
            <Pressable style={styles.optionContainerButton}>
              <Text style={styles.optionText}>Messages</Text>
              <Image source={require('../../assets/humanMessageIcon.png')} />
            </Pressable>
            <Pressable style={styles.optionContainerButton}>
              <Text style={styles.optionText}>Calendar</Text>
              <Image source={require('../../assets/colorCalendar.png')} />
            </Pressable>
          </View>
        </View>

        <View style={styles.PrescriptionContainer}>
          <View>
            <Text style={styles.PrescriptionText}>Upload Prescription</Text>
            <Text style={styles.PrescriptionSmallText}>
              Upload a Prescription and Tell Us What you Need. We do the Rest. !
            </Text>
          </View>

          <View style={styles.PrescriptionLowerContainer}>
            <View style={styles.offerContainer}>
              <Text style={styles.offerText}>Flat 25% OFF ON </Text>
              <Text style={styles.offerText}>MEDICINES </Text>
            </View>
            <TouchableOpacity style={styles.oderNow}>
              <Text style={styles.oderText}>OrderNow</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainBottomContainer}>
          <View style={styles.medicalServiceContainer}>
            <View style={{width: '70%'}}>
              <Text style={styles.medicalServiceUpperText}>Get the Best</Text>
              <Text style={styles.medicalServiceUpperText}>
                Medical Service
              </Text>
              <Text style={styles.medicalServiceBottomText}>
                Rem illum facere quo corporis Quis in saepe itaque ut quos
                pariatur. Qui numquam rerum hic repudiandae rerum id amet
                tempore nam molestias omnis qui earum voluptatem!
              </Text>
            </View>
            <Image style={{}} source={require('../../assets/docImage.png')} />
          </View>
          <Image
            style={styles.backgroundImage}
            source={require('../../assets/backgroundImage.png')}
          />
          <View style={styles.offerBottomContainer}>
            <View style={{}}>
              <View style={styles.offerBottomInfoContainer}>
                <Image source={require('../../assets/UPTO.png')} />
                <View style={{padding: 5}}>
                  <Text style={{fontWeight: '700', fontSize: 40}}>80 %</Text>
                  <Text style={{fontWeight: '700', fontSize: 20}}>Offer</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: '700', fontSize: 16}}>
                  On Health Products
                </Text>
                <TouchableOpacity
                  style={{
                    width: 137,
                    backgroundColor: '#1C82DF',
                    // padding: 15,
                    borderRadius: 10,
                    height: 38,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 20,
                      color: '#fff',
                      lineHeight: 32,
                    }}>
                    Shop Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Image
              style={{resizeMode: 'contain', width: '100%', height: '100%'}}
              //   resizeMethod="resize"
              source={require('../../assets/Vitamins.png')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 10,
    alignItems: 'center',
    // marginTop: 10,
    margin: 10,
  },
  optionContainer: {
    flex: 0.25,
    marginTop: 20,
    justifyContent: 'space-around',
    padding: 5,
  },
  otionsUpperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionContainerButton: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-around',
    width: '48%',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
  },
  optionText: {
    fontWeight: '500',
    fontSize: 20,
  },
  PrescriptionContainer: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    margin: 15,
  },
  PrescriptionText: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 32,
  },
  PrescriptionSmallText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
  },
  PrescriptionLowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  offerText: {
    fontWeight: '700',
    fontSize: 14,
    marginTop: 5,
  },
  offerContainer: {},
  oderNow: {
    backgroundColor: '#1C82DF',
    justifyContent: 'center',
    borderRadius: 10,
    width: 170,
    alignItems: 'center',
    textAlign: 'center',
  },
  oderText: {
    fontWeight: '700',
    fontSize: 22,
    color: '#fff',
  },

  mainBottomContainer: {
    flex: 0.5,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  backgroundImage: {
    // width: '70%',
    // height: 150,
    position: 'absolute',
    // alignSelf: 'center',
    marginTop: 100,
  },
  imageBorderRadius: {
    borderRadius: 15, //
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  medicalServiceContainer: {
    flex: 0.4,
    backgroundColor: '#C8F5C4',
    zIndex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    margin: 15,
  },
  medicalServiceUpperText: {
    fontWeight: '700',
    fontSize: 20,
  },
  medicalServiceBottomText: {
    fontWeight: '700',
    fontSize: 12,
    marginTop: 15,
    width: 255,
  },
  offerBottomContainer: {
    backgroundColor: '#D7D0FF',
    flex: 0.5,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  offerBottomInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    // width: '50%',
    // backgroundColor: 'green',
  },
});
