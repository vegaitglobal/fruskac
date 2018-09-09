import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import ListWithImage from './src/screens/ListWithImage';
import ListWithImageInline from './src/screens/ListWithImageInline';
import Article from './src/screens/Article';
import Weather from './src/screens/Weather';
import Locations from './src/screens/Locations';
import Tracks from './src/screens/Tracks';
import Map from './src/screens/Map';

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
    ListWithImageInline: ListWithImageInline,
    Article: Article,
    Locations: Locations,
    Tracks: Tracks,
    Map: Map,
  },
  {
    initialRouteName: 'Home',
  }
);