import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Colors, Button } from "react-native-paper";

export default class Entry extends Component {
  static navigationOptions=({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Entry'),
    };
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <Button onPress={this.goBack}>goBack To Section</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red
  }
});
