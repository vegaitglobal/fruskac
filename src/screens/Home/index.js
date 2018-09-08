import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'
import Styles from './Styles';

export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      menuItems: [
        {
          screen: "ListWithImage",
          segment: "news",
          key: "Novosti"
        },
        {
          screen: "ListWithImage",
          segment: "monasteries",
          key: "Manastiri"
        },
        {
          screen: "Tracks",
          segment: "tracks",
          key: "Staze"
        },
        {
          screen: "Weather",
          segment: "today",
          key: "Vremenska prognoza"
        },
        {
          screen: "Map",
          segment: "agenda",
          key: "Karta planine"
        }
      ]
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Fruškać",
      headerStyle: {
        backgroundColor: '#2e7d32',
      },
      headerTintColor: '#fff',
    };
  };

  render() {
    return (
      <View style={Styles.greeter}>
        <AutoHeightImage
            width={width}
            source={require('../../assets/images/greeter.png')}
        />
        <FlatList
          data={this.state.menuItems}
          renderItem={
            ({item}) => 
            <TouchableOpacity onPress={() => this.props.navigation.push(item.screen, {segment: item.segment})}>
              <Text style={Styles.listitem}>{item.key}</Text>
            </TouchableOpacity>
        }
        />
      </View>
    );
  }
}