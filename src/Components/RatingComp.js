import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RatingComp = props => (
  <View style={{alignItems: 'center'}}>
    <View style={{flexDirection: 'row'}}>
      {[...Array(Math.round(props.rate))].map((e, i) => (
        <Icon
          name="ios-star"
          size={30}
          color="#4F8EF7"
          key={i}
          style={{padding: 5}}
        />
      ))}
    </View>
    <Text style={{fontSize: 20}}>{props.rate}/10</Text>
  </View>
);

export default RatingComp;
