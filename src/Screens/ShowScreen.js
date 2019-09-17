import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, WebView} from 'react-native';
import Footer from '../Components/Footer.js';
import RatingComp from '../Components/RatingComp.js';

class Show extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('show_name', 'Show Screen'),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            <Image
              style={{width: '100%', height: 300}}
              source={{
                uri: this.props.navigation.getParam(
                  'show_img_url',
                  'img error',
                ),
              }}
            />
            <View>
              <Text style={{fontSize: 20}}>
                {this.props.navigation.getParam('show_name', 'name error')}
              </Text>
            </View>
            <RatingComp
              rate={this.props.navigation.getParam(
                'show_rate',
                'not good at all',
              )}
            />

            <Text>
              genres: {this.props.navigation.getParam('show_genres', 'genres erroe').map((e)=>e+' ')}
            </Text>

            <Text>
              {this.props.navigation.getParam('show_schedule', 'schedu error').days} {' '}
              {this.props.navigation.getParam('show_schedule', 'schedu error').time}
            </Text>

            <Text>
              {this.props.navigation.getParam('show_summary', 'summary error')}
            </Text>
            <Text>
              <WebView source={{html: '<p>Here I am</p>'}} />
            </Text>
          </View>
        </ScrollView>
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
    alignItems: 'center',
  },
});

export default Show;
