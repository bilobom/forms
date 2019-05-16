import React, { Component } from "react";

import {
  FlatList,
  StyleSheet,
  View,
  Animated,
  Text,
  Platform,
  Dimensions
} from "react-native";
import RF from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

const Header_Maximum_Height = height / 2;

const Header_Minimum_Height = 50;

export default class Mynewproject extends Component {
  constructor() {
    super();
    this.AnimatedHeaderValue = new Animated.Value(0);
  }

  render() {
    const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],

      outputRange: ["#EDF5E1", "#EDF5E1"],

      extrapolate: "clamp"
    });

    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],

      outputRange: [Header_Maximum_Height, Header_Minimum_Height],

      extrapolate: "clamp"
    });
    const AnimatedText = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],

      outputRange: [RF(5), RF(3)],

      extrapolate: "clamp"
    });
    const textHeaderOpacity = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],

      outputRange: [1, 0]
    });

    return (
      <View style={styles.MainContainer}>
        <FlatList
          {...this.props}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: Header_Maximum_Height }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } }
          ])}
        />

        <Animated.View
          style={[
            styles.HeaderStyle,
            {
              height: AnimateHeaderHeight,
              backgroundColor: AnimateHeaderBackgroundColor
            }
          ]}
        >
          <Animated.Text
            style={[styles.HeaderInsideTextStyle, { fontSize: AnimatedText }]}
          >
            Control Price Form
          </Animated.Text>
          <Animated.View style={[styles.infoHeaderStyle]}>
            <Animated.Text
              style={[styles.headerText, { opacity: textHeaderOpacity }]}
            >
              Proposal Name:
            </Animated.Text>
            <Animated.Text
              style={[styles.headerText, { opacity: textHeaderOpacity }]}
            >
              Costomer: B&B LLC
            </Animated.Text>
            <Animated.Text
              style={[styles.headerText, { opacity: textHeaderOpacity }]}
            >
              Tender Reference: B55OP
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 20 : 0
  },

  HeaderStyle: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: Platform.OS == "ios" ? 20 : 0
  },
  infoHeaderStyle: {
    alignSelf: "stretch"
  },
  headerText: {
    fontSize: RF(2)
  },
  HeaderInsideTextStyle: {
    // fontSize: RF(5),
    fontWeight: "bold",
    textAlign: "center"
    //color:"#05"
  },

  TextViewStyle: {
    textAlign: "center",
    color: "#000",
    fontSize: 20,
    margin: 5,
    padding: 7,
    backgroundColor: "#ECEFF1"
  }
});
