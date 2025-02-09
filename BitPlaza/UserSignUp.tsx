import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Platform, ImageSourcePropType } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

interface Avatar {
  source: ImageSourcePropType;
}

const avatars: Avatar[] = [
  { source: require('./assets/images/avatars/avatar1.png') },
  { source: require('./assets/images/avatars/avatar2.png') },
  { source: require('./assets/images/avatars/avatar3.png') },
  { source: require('./assets/images/avatars/avatar4.png') },
  { source: require('./assets/images/avatars/avatar5.png') },
  { source: require('./assets/images/avatars/avatar6.png') },
];

const UserSignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState<ImageSourcePropType | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const pickAndCropImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const source = result.assets[0].uri;

      try {
        if (Platform.OS === 'web') {
          const response = await fetch(source);
          const blob = await response.blob();
          const file = new File([blob], "cropped.jpg", { type: 'image/jpeg' });
          const reader = new FileReader();

          reader.onloadend = () => {
            setCroppedImage(reader.result);
            setSelectedAvatar(null);
          };
          reader.readAsDataURL(file);
        } else {
          setCroppedImage(source);
          setSelectedAvatar(null);
        }
      } catch (error) {
        console.error("Error cropping/uploading image:", error);
      }
    }
  };

  const handleSubmit = () => {
    if (!name || !age || !gender || (!selectedAvatar && !croppedImage)) {
      setErrorMessage("Please fill in/select all fields.");
      return;
    }

    setErrorMessage(''); // Clear error message

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Selected Avatar:", selectedAvatar);
    console.log("Cropped Image:", croppedImage);

    navigation.replace('HomePage');
  };

  return (
    <ImageBackground
      source={require('./assets/images/bg/titlescreenbg2.png')}
      style={styles.backgroundImage}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Profile</Text>

        <Text style={styles.subTitle}>Enter your name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#ddd"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.subTitle}>Enter your age:</Text>
        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor="#ddd"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />

        <Text style={styles.subTitle}>Select Gender:</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            onPress={() => setGender('Male')}
            style={[styles.genderButton, gender === 'Male' && styles.selected]}
          >
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender('Female')}
            style={[styles.genderButton, gender === 'Female' && styles.selected]}
          >
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender('Other')}
            style={[styles.genderButton, gender === 'Other' && styles.selected]}
          >
            <Text style={styles.genderText}>Other</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitle}>Select an Avatar:</Text>
        <View style={styles.avatarContainer}>
          {avatars.map((avatar, index) => (
            <TouchableOpacity key={index} onPress={() => { setSelectedAvatar(avatar.source); setCroppedImage(null); }}>
              <Image source={avatar.source} style={[styles.avatar, selectedAvatar === avatar.source && styles.selectedAvatar]} />
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={pickAndCropImage} style={styles.avatarButton}>
            <Text style={styles.avatarButtonText}>Upload</Text>
          </TouchableOpacity>
          {croppedImage && (
            <Image source={{ uri: croppedImage }} style={[styles.avatar, styles.selectedAvatar]} />
          )}
        </View>

        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitText}>OK</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 35,
    color: '#fff',
    fontFamily: 'Rubik-SemiBold',
    textShadowColor: 'white',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Rubik-SemiBold',
    marginTop: 20,
  },
  input: {
    width: '30%',
    height: 50,
    backgroundColor: '#222',
    borderRadius: 8,
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  genderButton: {
    padding: 15,
    backgroundColor: '#222',
    borderRadius: 8,
    marginHorizontal: 10,
  },
  genderText: {
    fontSize: 18,
    color: '#fff',
  },
  selected: {
    backgroundColor: '#555',
  },
  avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 35,
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'gold',
  },
  selectedAvatar: {
    borderColor: 'black',
  },
  avatarButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarButtonText: {
    color: 'white',
    fontSize: 16
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default UserSignUp;