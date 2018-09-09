import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'
import Styles from './Styles';

export default class ListWithImageInline extends React.Component {

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
            {key: "Lorem ipsum 1", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Ipsum dolor 2", summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Dolor sit 3", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "The quick 4", image: require("../../assets/images/article0.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Brown fox 5", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Lorem ipsum 6", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Ipsum dolor 7", summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Dolor sit 8", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "The quick 9", image: require("../../assets/images/article0.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Brown fox 10", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Lorem ipsum 11", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Ipsum dolor 12", summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Dolor sit 13", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "The quick 14", image: require("../../assets/images/article0.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."},
            {key: "Brown fox 15", image: require("../../assets/images/article1.png"), summary: "Lorem ipsum dolor sit amet overthe lazy dog and lorem ipsum..."}
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