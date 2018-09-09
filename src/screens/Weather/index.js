import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'
import Styles from './Styles';

export default class Weather extends React.Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Vremenska prognoza",
      headerStyle: {
        backgroundColor: '#a2d7dd',
      },
      headerTintColor: '#2D5154',
      headerRight: <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                      <AutoHeightImage
                          width={20}
                          style={{marginRight: 20}}
                          source={require('../../assets/images/home-wtr.png')}
                      />
                    </TouchableOpacity>
    };
  };

  render() {
    return (
      <View style={Styles.body}>
        <FlatList
          style={Styles.list}
          data={[
            {key: "Danas",    image: require("../../assets/images/sun.png"),    summary: "Sunčano"},
            {key: "Sutra",    image: require("../../assets/images/rain.png"),   summary: "Mestimična kiša"},
            {key: "Utorak",   image: require("../../assets/images/clouds.png"), summary: "Oblačno"},
            {key: "Sreda",    image: require("../../assets/images/clouds.png"), summary: "Oblačno"},
            {key: "Četvrtak", image: require("../../assets/images/rain.png"),   summary: "Pljusak"},
            {key: "Petak",    image: require("../../assets/images/clouds.png"), summary: "Oblačno"},
            {key: "Subota",   image: require("../../assets/images/sun.png"),    summary: "Sunčano"},
          ]}
          renderItem={
            ({item}) => 
            // <TouchableOpacity onPress={() => ''}>
              <View style={Styles.card}>
                <AutoHeightImage
                    width={70}
                    style={Styles.cardImage}
                    source={item.image}
                />
                <Text style={Styles.cardTitle}>{item.key}</Text>
                <Text style={Styles.cardSummary}>{item.summary}</Text>
                <View style={Styles.cardDetails}>
                  <Text style={Styles.cardDetailsKey}>Temperatura</Text>
                  <Text style={Styles.cardDetailsKey}>Mogućnost kiše</Text>
                  <Text style={Styles.cardDetailsKey}>Brzina vetra</Text>
                  <Text style={Styles.cardDetailsKey}>Vlažnost vazduha</Text>
                  <Text style={Styles.cardDetailsKey}>Vazdušni pritisak</Text>
                </View>
                <View style={Styles.cardValues}>
                  <Text style={Styles.cardDetailsValue}>35,7°C</Text>
                  <Text style={Styles.cardDetailsValue}>3%</Text>
                  <Text style={Styles.cardDetailsValue}>3 km/h</Text>
                  <Text style={Styles.cardDetailsValue}>18%</Text>
                  <Text style={Styles.cardDetailsValue}>1020 mb</Text>
                </View>
              </View>
            // </TouchableOpacity>
        }
        />
      </View>
    );
  }
}