import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase';
import firestore from '@react-native-firebase/firestore';

const avatars: Avatar[] = [
  { source: require('./assets/images/avatars/avatar1.png') },
  { source: require('./assets/images/avatars/avatar2.png') },
  { source: require('./assets/images/avatars/avatar3.png') },
  { source: require('./assets/images/avatars/avatar4.png') },
  { source: require('./assets/images/avatars/avatar5.png') },
  { source: require('./assets/images/avatars/avatar6.png') },
];

const UserProfile = ({navigation}) => {

const [age, setAge] = useState()

// getting data from Firebase
const getData = async () =>{
  const usersCollection = await firestore().collection('Users').get()
  console.log(usersCollection.docs[0].data())
  setAge(usersCollection.docs[0].data())
}

useEffect(() => {
  getData()
}, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>BIT PLAZA</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.sidebar}>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('HomePage')}>
                <Image source={require('./assets/images/icons/home.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('AllCourses')}>
                <Image source={require('./assets/images/icons/allcourses.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>All Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('MyCourses')}>
                <Image source={require('./assets/images/icons/mycourses.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>My Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('HomePage')}>
                <Image source={require('./assets/images/icons/compiler.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>Compiler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('UserProfile')}>
                <Image source={require('./assets/images/icons/myprofile.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>My Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image style={styles.avatar} source={require('./assets/images/avatars/avatar6.png')} />
              <Text style={styles.userName}>Name</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
              <View style={styles.userprofilecontent}><Text style={styles.sectionTitle}>My Personal Details</Text>
              <Text style={styles.shortDesc}>Username: name</Text>
              <Text style={styles.shortDesc}>Birthday: birthday</Text>
              <Text style={styles.shortDesc}>Gender: gender</Text>
              </View>
              <View style={styles.userprofilecontent}><Text style={styles.sectionTitle}>My Courses</Text></View>
              <View style={styles.userprofilecontent}><Text style={styles.sectionTitle}>Games/Puzzles Completed:</Text><Text style={styles.gameNumber}>0</Text></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  sidebarText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 20,
    paddingBottom: 5,
  },
  gamesectionTitle: {
    padding: 5,
    fontFamily: 'Rubik-SemiBold',
    fontSize: 24,
  },
  gameNumber: {
    color: 'blue',
    fontSize: 45,
    fontFamily: 'Bungee',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textShadowColor: 'lightblue',
    textShadowOffset: {width: 2, height: 2},
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#FEA60F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    paddingTop: 10,
    fontFamily: 'Bungee',
    fontSize: 45,
    color: 'black',
    textShadowColor: 'white',
    textShadowRadius: 20,
    textShadowOffset: {width: 5, height: 5},
  },
  content: {
    flexDirection: 'row',
  },
  userprofilecontent: {
    flexDirection: 'column',
    flex: 1,
  },
  userprofileAvatar: {
    justifyContent: 'center',
    padding: 5,
  },
  userName: {
    fontFamily: 'Rubik-SemiBold',
    justifyContent: 'center',
    width: 100,
    fontSize: 26,
    padding: 5,
  },
  avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'gold',
    justifyContent: 'center',
  },
  sidebar: {
    width: '20%',
    marginRight: 20,
  },
  sidebarItem: {
    marginBottom: 10,
    alignItems: 'center',
  },
  sidebarImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  mainContent: {
    flex: 1,
  },
  sectionTitle: {
    padding: 5,
    fontFamily: 'Rubik-SemiBold',
    fontSize: 24,
    marginBottom: 10,
    justifyContent: 'center',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  courseBox: {
    width: '30%',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  courseImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  courseTitle: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 5,
  },
  startButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Rubik-SemiBold',
    color: 'white',
    fontSize: 16,
  },
  shortDesc: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    marginTop: 5,
  },
});

export default UserProfile;