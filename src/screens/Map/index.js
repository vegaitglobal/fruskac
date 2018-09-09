import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity, ScrollView, WebView } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width, height } from '../../utils/screen'
import Styles from './Styles';

export default class Map extends React.Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'karta planine',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#222',
    };
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: 'https://www.google.com/maps/@45.1443847,19.5829608,11.25z'}}
          style={{}}
        />
      </View>
    );
  }
}