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
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ShowCard extends React.Component {
  constructor() {
    super();
    this.title = 'Titanic';
    this.img_url = 'https://facebook.github.io/react-native/img/tiny_logo.png';
    this.stars_num = 5;
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{paddingBottom: 20}}>
          <Image
            style={{width: 300, height: 300}}
            source={{
              uri: this.img_url,
            }}
            onClick={console.log('!')}
          />
        </View>
        <View>
          <Text style={{fontSize: 30}}>{this.title}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {[...Array(this.stars_num)].map((e, i) => (
            <Icon
              name="ios-star"
              size={30}
              color="#4F8EF7"
              key={i}
              style={{padding: 5}}
            />
          ))}
        </View>
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
    justifyContent: 'center',
  },
});

export default ShowCard;
