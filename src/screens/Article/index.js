import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'
import Styles from './Styles';

export default class Article extends React.Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', "Article"),
      headerStyle: {
        backgroundColor: '#2e7d32',
      },
      headerTintColor: '#fff',
    };
  };

  render() {
    return (
      <View style={{flex: 1}}>
        
        <AutoHeightImage
            width={width}
            style={}
            source={require("../../assets/images/article1.png")}
        />

      </View>
    );
  }
}