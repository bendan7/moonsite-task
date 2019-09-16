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

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Swiper from 'react-native-swiper';

import Footer from '../Components/Footer.js';
import ShowCard from '../Components/ShowCard.js';
import Show from '../Screens/Show.js';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    fetch('http://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(responseJson => {
        console.log('!!!!!!!!!!!!!!!!!!!!!' + responseJson.length);
        //return responseJson.movies;
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Swiper showsButtons={true} showsPagination={false}>
            <ShowCard />
            <ShowCard />
            <ShowCard />
          </Swiper>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Show: {
    screen: Show,
  },
});

export default createAppContainer(AppNavigator);
