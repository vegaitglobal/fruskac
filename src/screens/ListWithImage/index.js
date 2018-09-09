import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'
import Styles from './Styles';

export default class ListWithImage extends React.Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('segment', "ListWithImage"),
      headerStyle: {
        backgroundColor: '#9b9f2e',
      },
      headerTintColor: '#fff',
    };
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={Styles.list}
          data={[
            {key: "Lorem ipsum", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet consequetur the quick brown fox jumps overthe lazy dog and lorem ipsum..."},
            {key: "Ipsum dolor", summary: "Lorem ipsum dolor sit amet consequetur the quick brown fox jumps overthe lazy dog and lorem ipsum..."},
            {key: "Dolor sit", image: require("../../assets/images/article0.png"), summary: "Lorem ipsum dolor sit amet consequetur the quick brown fox jumps overthe lazy dog and lorem ipsum..."},
            {key: "The quick", summary: "Lorem ipsum dolor sit amet consequetur the quick brown fox jumps overthe lazy dog and lorem ipsum..."},
            {key: "Brown fox", summary: "Lorem ipsum dolor sit amet consequetur the quick brown fox jumps overthe lazy dog and lorem ipsum..."}]}
          renderItem={
            ({item}) => 
            <TouchableOpacity onPress={() => this.props.navigation.push('Article', {title: item.key})}>
              <View style={Styles.card}>
                {item.image &&
                <AutoHeightImage
                    width={width - 30}
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