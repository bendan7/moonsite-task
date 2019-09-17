import React from 'react';
import {View, Text} from 'react-native';
import Footer from '../Components/Footer.js';

class Show extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('show_name', 'Show Screen'),
    };
  };

  render() {
    return (
      <View>
        <Text>this is the show page </Text>
        <Text>
          {console.log(
            this.props.navigation.getParam('show_id', 'not good at all'),
          )}
        </Text>
        <Footer />
      </View>
    );
  }
}

export default Show;
