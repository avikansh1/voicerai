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

const GetPharmacy = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);

  const handleFileUpload = async () => {
    try {
      // Open Document Picker
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      });

      const file = {
        uri: res[0].uri,
        type: res[0].type,
        name: res[0].name,
      };

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your_upload_preset'); // Set your Upload Preset here
      formData.append('cloud_name', 'dy0pc1pjb'); // Your Cloud Name here

      setUploading(true);

      // Upload to Cloudinary
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dy0pc1pjb/upload', // Cloudinary API endpoint
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      setUploadedFileUrl(response.data.secure_url); // Save uploaded file URL
      setUploading(false);
      Alert.alert('Upload Successful', 'File uploaded successfully!');
    } catch (error) {
      setUploading(false);
      if (DocumentPicker.isCancel(error)) {
        Alert.alert('Cancelled', 'File upload cancelled.');
      } else {
        Alert.alert('Upload Failed', 'Something went wrong.');
      }
    }
  };

  const handleLinkUpload = () => {
    Alert.alert('Upload Link', 'You can paste your document link here.');
    // Add your logic for link upload, e.g., open a modal or text input for the link
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
      image: require('../../assets/image1.png'), // Replace with your image path
    },
    {
      id: '4',
      name: 'Wellness Pharmacy',
      distance: '7km Away',
      rating: 4.2,
      reviews: 75,
      image: require('../../assets/image1.png'), // Replace with your image path
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
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    // flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginVertical: 8,
    // padding: 10,
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
