import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';

const GetPharmacy = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);

  // Updated handleFileUpload to integrate with Cloudinary
  const handleFileUpload = async () => {
    try {
      // Open the image picker to select an image
      const result = await launchImageLibrary({
        mediaType: 'photo', // Allow photos only
        quality: 0.5, // Set the image quality
        includeBase64: true, // If you want to upload images in base64
      });

      if (result.didCancel) {
        Alert.alert('Cancelled', 'File upload was cancelled.');
        return;
      }

      const file = {
        uri: result.assets[0].uri, // The file URI
        type: result.assets[0].type, // The file type
        name: result.assets[0].fileName, // The file name
      };

      // Create a new FormData object and append the file and other parameters
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your_upload_preset'); // Replace with your preset
      formData.append('cloud_name', 'dy0pc1pjb'); // Your Cloudinary cloud name

      // Log the FormData to inspect its contents before making the API request
      console.log('FormData:', formData);

      // Directly use Cloudinary URL in the API call
      const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dy0pc1pjb/upload'; // Cloudinary upload endpoint

      // Perform the upload using axios
      const response = await axios.post(cloudinaryUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        Alert.alert('Success', 'File uploaded successfully!');
        console.log(response.data.secure_url); // Print the uploaded file URL
        setUploadedFileUrl(response.data.secure_url); // Optionally store the URL
      } else {
        Alert.alert('Error', 'Something went wrong during upload.');
      }
    } catch (error) {
      console.error('Error uploading file: ', error);
      Alert.alert('Error', 'An error occurred while uploading.');
    }
  };

  const handleLinkUpload = () => {
    Alert.alert('Upload Link', 'You can paste your document link here.');
  };

  const DATA = [
    {
      id: '1',
      name: 'Path lab pharmacy',
      distance: '5km Away',
      rating: 4.5,
      reviews: 120,
      image: require('../../assets/image1.png'),
    },
    {
      id: '2',
      name: 'City Health Store',
      distance: '3km Away',
      rating: 4.8,
      reviews: 98,
      image: require('../../assets/image1.png'),
    },
    {
      id: '3',
      name: 'Wellness Pharmacy',
      distance: '7km Away',
      rating: 4.2,
      reviews: 75,
      image: require('../../assets/image1.png'),
    },
    {
      id: '4',
      name: 'Wellness Pharmacy',
      distance: '7km Away',
      rating: 4.2,
      reviews: 75,
      image: require('../../assets/image1.png'),
    },
  ];

  const PharmacyCard = ({name, distance, rating, reviews, image}) => (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.distance}>{distance}</Text>
        <Text style={styles.rating}>
          ⭐ {rating} ({reviews} reviews)
        </Text>
      </View>
    </View>
  );

  const navigation = useNavigation();
  return (
    <View style={styles.mainComponent}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{marginLeft: 5}}
            source={require('../../assets/leftArrow.png')}
          />
        </TouchableOpacity>

        <Image
          style={{marginLeft: 10}}
          source={require('../../assets/locationIcon.png')}
        />

        <Text style={{fontWeight: '500', fontSize: 20, marginLeft: 5}}>
          Mohali
        </Text>
      </View>
      <Text style={{fontWeight: '600', fontSize: 24, marginTop: 15}}>
        Pharmacy Nearby
      </Text>

      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PharmacyCard
              name={item.name}
              distance={item.distance}
              rating={item.rating}
              reviews={item.reviews}
              image={item.image}
            />
          )}
        />
      </View>

      <View style={styles.prescriptionContainer}>
        <Text style={{fontWeight: '500', fontSize: 32}}>
          Upload Prescription
        </Text>
        <Text style={{fontWeight: '400', fontSize: 20, marginTop: 10}}>
          We will show the pharmacy that fits as
        </Text>
        <Text style={{fontWeight: '400', fontSize: 20}}>
          per your prescription.
        </Text>
      </View>

      <View style={styles.uploadPrescriptionContainer}>
        <View style={styles.uploadPrescriptionLeftContainer}>
          <TouchableOpacity onPress={handleLinkUpload}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/coloredFile.png')}
            />
            <Text style={styles.uploadPrescriptionText}>Upload Link</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.uploadPrescriptionLeftContainer}>
          <TouchableOpacity onPress={handleFileUpload}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/topArrow.png')}
            />
            <Text style={styles.uploadPrescriptionText}>Upload File</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleFileUpload} style={styles.btn}>
        <Text style={{fontSize: 32, fontWeight: '500', color: '#fff'}}>
          {uploading ? 'Uploading...' : 'Upload Prescription'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetPharmacy;

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 8,
    width: 190,
    height: 190,
  },
  image: {
    width: 180,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  distance: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    color: '#FFA500',
    marginTop: 4,
  },
  container: {
    marginTop: 10,
  },
  prescriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    flex: 0.3,
    margin: 10,
  },
  uploadPrescriptionContainer: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
  },
  uploadPrescriptionLeftContainer: {
    padding: 15,
    justifyContent: 'space-evenly',
    borderRadius: 15,
  },

  uploadPrescriptionText: {
    fontWeight: '500',
    fontSize: 20,
    marginTop: 15,
  },
  btn: {
    backgroundColor: '#41B592',
    padding: 10,
    borderRadius: 15,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
