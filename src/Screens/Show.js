import React from 'react';
import {View, Text} from 'react-native';
import Footer from '../Components/Footer.js';

class Show extends React.Component {

  static navigationOptions = {
    title: 'Show',
  };

  render() {
    return (
      <View>
        <Text>this is the show page </Text>
        <Footer />
      </View>
    );
  }
}

export default Show;
