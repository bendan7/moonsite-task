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
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RatingComp from '../Components/RatingComp.js';

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
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              this.props.navigation.navigate('ShowScreen', {
                show_id: this.props.showId,
                show_name: this.props.showName,
                show_rate: this.props.rate,
                show_img_url: this.props.img_url,
                show_summary: this.props.summary,
                show_genres: this.props.genres,
                show_schedule: this.props.schedule,
                show_network: this.props.network,
              })
            }>
            <Image
              style={{width: 300, height: 300}}
              source={{
                uri: this.props.img_url,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize: 20}}>{this.props.showName}</Text>
        </View>
        <RatingComp rate={this.props.rate} />
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
