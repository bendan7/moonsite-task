import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
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
              rate={this.props.navigation.getParam('show_rate', 'error rate')}
            />
            <View style={{padding: 20}}>
              <Text style={{fontSize:20, paddingTop: 20}}>
                Genres: {this.props.navigation.getParam('show_genres', 'genres erroe').map((e)=>e+' ')}
              </Text>
              <Text style={{fontSize:20, paddingTop: 20}}>
                {this.props.navigation.getParam('show_schedule', 'schedu error').days} {' '}
                {this.props.navigation.getParam('show_schedule', 'schedu error').time}
              </Text>
              <Text style={{fontSize:20, paddingTop: 20}}>
                Network: {this.props.navigation.getParam('show_network', 'network error')}
              </Text>
              <Text style={{fontSize:18, paddingTop: 20}}>
                {this.props.navigation.getParam('show_summary', 'summary error')}
              </Text>
            </View>
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
