import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'
import Styles from './Styles';

export default class Weather extends React.Component {

  constructor() {
    super()
    this.state = {
      weather: []
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Vremenska prognoza",
      headerStyle: {
        backgroundColor: '#283593',
      },
      headerTintColor: '#fff',
    };
  };

  componentDidMount() {
    var parseString = require('react-native-xml2js').parseString;
    
    fetch('https://www.yr.no/place/Serbia/Other/Fru%C5%A1ka_Gora/forecast.xml')
        .then(response => response.text())
        .then((response) => {
          var w = []
            parseString(response, function (err, result) {
              result.weatherdata.forecast[0].tabular[0].time.forEach(element => {
                f = {
                  key: element.$.from,
                  start: Date.parse(element.$.from),
                  end: Date.parse(element.$.to),
                  precipitation: element.precipitation[0]['$'].value,
                  pressure: element.pressure[0]['$'].value,
                  temperature: element.temperature[0]['$'].value,
                  wind_direction: element.windDirection[0]['$'].deg,
                  wind_speed: element.windSpeed[0]['$'].mps
                }
                w.push(f)
              }); 
            });
            this.setState({weather: w});
        }).catch((err) => {
            console.log('fetch', err)
        })

  }

  render() {
    return (
      <FlatList
        data={this.state.weather}
        renderItem={
          ({item}) => 
          <TouchableOpacity onPress={() => this.props.navigation.push(item.start)}>
            <Text style={{}}>{item.temperature}</Text>
          </TouchableOpacity>
      }
      />
    );
  }
}