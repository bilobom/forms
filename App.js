import * as React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { zoomIn } from "react-navigation-transitions";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { ScreenOrientation } from "expo";

import Section from "./components/section";
import Entry from "./components/entry";
import Sectors from "./components/sectors";
const Navigation = createAppContainer(
  createStackNavigator(
    {
      Sectors: { screen: Sectors },
      Section: { screen: Section },
      Entry: { screen: Entry }
    },
    {
      initialRouteName: "Sectors",
      navigationOptions: {
        cardStack: {
          gesturesEnabled: false
        },
        gesturesEnabled: false
      },
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#05386b"
        },
        headerTintColor: "#EDF5E1",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      },
      gesturesEnabled: false,
      transitionConfig: () => zoomIn(400)
    }
  )
);

const theme = {
  ...DefaultTheme,
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: "#05386b",
    accent: "#379683",
    text: "#05386b",
    background: "#5CDB95",
    placeholder: "#379683"
  }
};

export default class App extends React.Component {
  componentDidMount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL);
  }
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </Provider>
    );
  }
}
