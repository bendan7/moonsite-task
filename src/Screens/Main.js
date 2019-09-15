/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Component,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

class Main extends React.Component {
  shows_list = [];

  render() {
    return (
      <View>
        <Header />
        <Text>this is the Main screen !!!!</Text>
        <Footer />
      </View>
    );
  }
}

export default Main;
