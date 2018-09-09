import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity } from 'react-native';
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
    };
  };

  render() {
    return (
      <View style={Styles.body}>
        <FlatList
          style={Styles.list}
          data={[
            {key: "Danas", image: require("../../assets/images/sun.png"), summary: "Sunčano"},
            {key: "Sutra", image: require("../../assets/images/rain.png"), summary: "Mestimična kiša"},
            {key: "Prekosutra", image: require("../../assets/images/clouds.png"), summary: "Oblačno"},
          ]}
          renderItem={
            ({item}) => 
            <TouchableOpacity onPress={() => this.props.navigation.push('Article', {title: item.key})}>
              <View style={Styles.card}>
                {item.image &&
                <AutoHeightImage
                    width={100}
                    style={Styles.cardImage}
                    source={item.image}
                />}
                <Text style={Styles.cardTitle}>{item.key}</Text>
                <Text style={Styles.cardSummary}>{item.summary}</Text>
              </View>
            </TouchableOpacity>
        }
        />
      </View>
    );
  }
}