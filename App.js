import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import ListWithImage from './src/screens/ListWithImage';
import Article from './src/screens/Article';
import Weather from './src/screens/Weather';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    Weather: Weather,
    ListWithImage: ListWithImage,
    Article: Article,
  },
  {
    initialRouteName: 'Home',
  }
);