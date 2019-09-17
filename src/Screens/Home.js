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
import ShowScreen from '../Screens/ShowScreen.js';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  state = {data: []};

  componentDidMount() {
    fetch('http://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(responseJson => {
        //slice the big data array into only [0...20] shows
        responseJson = responseJson.slice(0, 20);
        let newdata = responseJson.map((e, i) => {
          return (
            <ShowCard
              key={i}
              showId={e.id}
              navigation={this.props.navigation}
              showName={e.name}
              img_url={e.image.medium}
              rate={e.rating.average}
              summary={e.summary}
              genres={e.genres}
              schedule={e.schedule}
              network={e.network.name}
            />
          );
        });
        this.setState({data: newdata});
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
            {this.state.data}
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
  HomeScreen: {
    screen: Home,
  },
  ShowScreen: {
    screen: ShowScreen,
  },
});

export default createAppContainer(AppNavigator);
