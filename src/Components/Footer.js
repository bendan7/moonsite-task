import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => (
  <View style={styles.body}>
    <Text style={styles.text}>Ben Dan </Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  body: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});

export default Footer;
