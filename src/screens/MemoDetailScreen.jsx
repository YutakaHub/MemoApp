import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <View>
        <AppBar />
        <View style={styles.memoHeader}>
          <Text style={styles.memoTitle}>買い物</Text>
          <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
        </View>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          あああああああああああああああああああ
          あああああああああああああああああああ
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, buttom: 'auto' }} name="edit-2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memotext: {
    fontSize: 16,
    lineHeight: 24,
  },

});
