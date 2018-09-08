import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home'
import News from './src/screens/News'

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    News: News,
  },
  {
    initialRouteName: 'Home',
  }
);