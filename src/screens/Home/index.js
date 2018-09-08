import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from '../../utils/screen'

export default class Home extends React.Component {
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
      <View style={{
              flex: 1,
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}>
        <AutoHeightImage
            width={width}
            source={require('../../assets/images/greeter.png')}
        />
        <Text>Home</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}