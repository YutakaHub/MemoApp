import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';

import firebase from 'firebase';
import CircleButton from '../components/CircleButton';

export default function MemoCreateScreen(props) {
  const {navigation} = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('Created!', docRef.id);
      })
      .catch((error) => { 
        console.log('Error!', error);
      })
    navigation.goBack()
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.container}>
        <View style={styles.inputConainer}>
          <TextInput
            value={bodyText}
            multiline
            style={styles.input}
            onChangeText={(text) => { setBodyText(text); }}
            autoFocus
            />
        </View>
        <CircleButton
          name="check"
          onPress={handlePress}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputConainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
