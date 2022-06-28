import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.conteiner}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log in</Text>
        <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => { setEmail(text); }}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email Address"
        textContentType="emailAddress"
        />
        <TextInput
        style={styles.input}
        value={password}
        onChangeText={(password) => { setPassword(password); }}
        autoCapitalize="none"
        keyboardType="Password"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        />
        <Button
          label="Submit"
          onPress={ () => { navigation.reset({
            index: 0,
            routes: [{ name: 'MemoList'}],
          });
         }}
         />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    color: '#467fd3',
    fontSize: 14,
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
  },
});
