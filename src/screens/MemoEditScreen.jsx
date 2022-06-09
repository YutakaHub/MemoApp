import React from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.container}>
        <AppBar />
        <View style={styles.inputConainer}>
          <TextInput value="買い物リスト" multiline style={styles.input} />
        </View>
        <CircleButton name="check" />
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