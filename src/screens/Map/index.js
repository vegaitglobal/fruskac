import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity, Picker } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'
import Styles from './Styles';
import Mapbox from '@mapbox/react-native-mapbox-gl';

// Mapbox.setAccessToken('<your access token here>');

export default class Map extends React.Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Karta planine",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerRight: <Text>TEXT</Text>
    };
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Mapbox.MapView
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}>
        </Mapbox.MapView>
      </View>
    );
  }
}