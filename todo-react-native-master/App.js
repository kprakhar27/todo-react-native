import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyAG0Lh0x-lewuHJpJ4H_-i_IlPoi6-gBWw",
      authDomain: "react-native-notesapp.firebaseapp.com",
      databaseURL: "https://react-native-notesapp.firebaseio.com",
      projectId: "react-native-notesapp",
      storageBucket: "react-native-notesapp.appspot.com",
      messagingSenderId: "904408585722",
      appId: "1:904408585722:web:68519ff1dfe6577a490043"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LoginScreenComponent/>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      {/* <NotesScreenComponent/> */}
      <LoginScreenComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
