import * as React from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Platform
} from 'react-native'
import { Constants } from "expo";
import { Provider } from "react-redux";
import store from './redux/store'
import { createAppContainer, createStackNavigator } from "react-navigation";
import { zoomIn } from 'react-navigation-transitions';

import Section from "./components/section";
import Entry from "./components/entry";



const Navigation = createAppContainer(
  createStackNavigator(
    {
      Section: { screen: Section },
      Entry: { screen: Entry }
    },
    {
      initialRouteName: 'Section',
      navigationOptions: {
        cardStack: {
          gesturesEnabled: false
        },
        gesturesEnabled: false
      },
      gesturesEnabled: false,
      transitionConfig:  () => zoomIn(1000),
    }
  )
);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

