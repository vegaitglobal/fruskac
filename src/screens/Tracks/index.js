import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity, Picker, ScrollView } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'
import Styles from './Styles';

export default class Tracks extends React.Component {

  constructor() {
    super()
    this.state = {
      type: [
        {
          key: "Lake",
          image: require('../../assets/icons/misc.png')
        },
        {
          key: "Srednje",
          image: require('../../assets/icons/monasteries.png')
        },
        {
          key: "Teške",
          image: require('../../assets/icons/lakes.png')
        },
        {
          key: "Maraton",
          image: require('../../assets/icons/springs.png')
        },
        {
          key: "Informacije",
          image: require('../../assets/icons/picnic-areas.png')
        }
      ]
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Staze",
      headerStyle: {
        backgroundColor: '#2daa80',
      },
      headerTintColor: '#fff',
      headerRight: <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                      <AutoHeightImage
                          width={20}
                          style={{marginRight: 20}}
                          source={require('../../assets/images/home.png')}
                      />
                    </TouchableOpacity>
    };
  };

  render() {
    return (
      <View style={Styles.body}>
        <View style={Styles.tabBar}>
          <TouchableOpacity style={[Styles.tabItem, Styles.tabItemSelected]} onPress={() => ''}>
            <View>
              <Text>Šetnje</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.tabItem} onPress={() => ''}>
            <View>
              <Text>MTB</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.listBox}>
          <FlatList
            style={Styles.list}
            data={this.state.type}
            numColumns={1}
            renderItem={
              ({item}) => 
              <TouchableOpacity style={Styles.listItem} onPress={() => ''}>
                  <AutoHeightImage
                      width={50}
                      source={item.image}
                  />
                  <Text style={Styles.listItemTitle}>{item.key}</Text>
              </TouchableOpacity>
          }
          />
        </View>
      </View>
    );
  }
}