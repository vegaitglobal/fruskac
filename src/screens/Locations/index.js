import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity, Picker, ScrollView } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'
import Styles from './Styles';

export default class Locations extends React.Component {

  constructor() {
    super()
    this.state = {
      type: [
        {
          key: "Razno",
          image: require('../../assets/icons/misc.png')
        },
        {
          key: "Manastiri",
          image: require('../../assets/icons/monasteries.png')
        },
        {
          key: "Jezera",
          image: require('../../assets/icons/lakes.png')
        },
        {
          key: "Izvori",
          image: require('../../assets/icons/springs.png')
        },
        {
          key: "Izletišta",
          image: require('../../assets/icons/picnic-areas.png')
        },
        {
          key: "Vidikovci",
          image: require('../../assets/icons/lookouts.png')
        },
        {
          key: "Livade",
          image: require('../../assets/icons/meadows.png')
        },
        {
          key: "Ribnjaci",
          image: require('../../assets/icons/fishponds.png')
        },
        {
          key: "Spomenici",
          image: require('../../assets/icons/monuments.png')
        },
        {
          key: "Vodopadi",
          image: require('../../assets/icons/waterfalls.png')
        }
      ],
      place: [
        {key: "Banoštor", places: 4},
        {key: "Bačka Palanka", places: 0},
        {key: "Beočin", places: 12},
        {key: "Berkasovo", places: 2},
        {key: "Beška", places: 7},
        {key: "Bikić Do", places: 0},
        {key: "Bingula", places: 1},
        {key: "Brankovac", places: 2},
      ],
      display: 'type'
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Lokacije",
      headerStyle: {
        backgroundColor: '#2daa80',
      },
      headerTintColor: '#fff',
    };
  };

  type() {
    return (
      <View style={Styles.listBox}>
        <FlatList
          style={Styles.list}
          data={this.state.type}
          numColumns={2}
          key={"type"}
          renderItem={
            ({item}) => 
              <TouchableOpacity style={Styles.listItemType} onPress={() => ''}>
                  <AutoHeightImage
                      width={50}
                      source={item.image}
                  />
                  <Text style={Styles.listItemTitleType}>{item.key}</Text>
              </TouchableOpacity>
          }
        />
      </View>
    )
  }

  place() {
    return (
      <View style={Styles.listBox}>
        <FlatList
          style={Styles.list}
          data={this.state.place}
          numColumns={1}
          key={"place"}
          renderItem={
            ({item}) => 
              <TouchableOpacity style={Styles.listItemPlace} onPress={() => ''}>
                  <Text style={Styles.listItemTitlePlace}>{item.key}</Text>
                  <Text style={Styles.listItemCountPlace}>{'  (' + item.places + ')'}</Text>
              </TouchableOpacity>
          }
        />
      </View>
    )
  }

  render() {
    return (
      <View style={Styles.body}>
        
        <View style={Styles.tabBar}>
          <TouchableOpacity
            style={
              (this.state.display == 'type') ? [Styles.tabItem, Styles.tabItemSelected, {borderRightWidth: 1}] : Styles.tabItem
            }
            onPress={() => {
              this.setState({display: 'type'});
            }}
          >
            <View>
              <Text>Tip</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              (this.state.display == 'place') ? [Styles.tabItem, Styles.tabItemSelected] : Styles.tabItem
            }
            onPress={() => {
              this.setState({display: 'place'});
            }}
          >
            <View>
              <Text>Mesto</Text>
            </View>
          </TouchableOpacity>
        </View>
          {
            (this.state.display == 'type') ? this.type() : this.place()
          }
      </View>
    );
  }
}