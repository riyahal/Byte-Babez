// TitleScreen.tsx

import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import RenderHtml from 'react-native-render-html';

const TitleScreen = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    'Bungee': require('./assets/fonts/Bungee_Shade/BungeeShade-Regular.ttf'),
    'Rubik-Regular': require('./assets/fonts/Rubik/static/Rubik-Regular.ttf'),
    'Rubik-SemiBold': require('./assets/fonts/Rubik/static/Rubik-SemiBold.ttf'),
    'Rubik-SemiBoldItalic': require('./assets/fonts/Rubik/static/Rubik-SemiBoldItalic.ttf'),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('UserSignUp');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const htmlContent = `
    <style>
      .square-to-circle {
        width: 300px;
        height: 300px;
        background-color: rgb(127, 23, 255);
        border: 30px dashed white;
        animation: square-to-circle 4s .83s infinite cubic-bezier(1,.015,.295,1.225);
      }
      @keyframes square-to-circle {
        0% { border-radius: 0; background: rgb(127, 23, 255); transform: rotate(0deg); }
        25% { border-radius: 25%; background: gold; transform: rotate(25deg); }
        45% { border-radius: 45%; background: lightgrey; transform: rotate(45deg); }
        75% { border-radius: 75%; background: rgb(0, 210, 0); transform: rotate(75deg); }
        90% { border-radius: 90%; background: rgb(0, 183, 255); transform: rotate(90deg); }
      }
    </style>

    <div class="square-to-circle"></div> 

  `;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('./assets/images/bg/titlescreenbg.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.apptitleText}>Bit Plaza</Text>
        <Text style={styles.taglineText}>Learn and play locally</Text>
        <RenderHtml source={{ html: htmlContent }} />
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
  },
  apptitleText: {
    fontSize: 90,
    color: '#fff',
    fontFamily: 'Bungee',
    textAlign: 'center',
    textShadowColor: 'yellow',
    textShadowRadius: 20,
    textShadowOffset: {width: 5, height: 5},
  },
  taglineText: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Rubik-SemiBoldItalic',
    textAlign: 'center',
    textShadowColor: 'white',
    textShadowRadius: 40,
    textShadowOffset: {width: 5, height: 5},
  },
});

export default TitleScreen;