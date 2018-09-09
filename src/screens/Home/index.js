import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity, Picker } from 'react-native';
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
          segment: "goodtoknow",
          key: "Dobro je znati"
        },
        {
          screen: "ListWithImageInline",
          segment: "goodtoknow",
          key: "Dobro je znati (inline)"
        },
        {
          screen: "Locations",
          segment: "locations",
          key: "Lokacije"
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
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerRight: <TouchableOpacity onPress={() => ''}>
                      <AutoHeightImage
                          width={30}
                          style={{marginRight: 15, borderColor: "#ddd", borderWidth: 1, borderRadius: 4}}
                          source={require('../../assets/images/flag-uk.png')}
                      />
                    </TouchableOpacity>
    };
  };

  render() {
    return (
      <View style={Styles.greeter}>
        <View style={Styles.banner}>
          <AutoHeightImage
              width={width}
              source={require('../../assets/images/greeter.png')}
          />
        </View>
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