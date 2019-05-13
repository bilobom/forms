import React, { Component } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Colors, Button, TextInput, Divider } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";

import { connect } from "react-redux";
// const engineer = [
//   { name: "Rates DZD", value: "10 Dzd" },
//   { name: "Men/Moth", value: "10" },
//   { name: "Cost Euros", value: "10 £" }
// ];
class Entry extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("entry", "Entry")
    };
  };
  state = {
    entries: {
      ids: ["Rate Dzd", "Men/Month", "Cost Euros"],
      "Rate Dzd": { value: "", unit: "Dzd", type: "numeric" },
      "Men/Month": { value: "", unit: "", type: "numeric" },
      "Cost Euros": { value: "", unit: "  €", type: "numeric" }
    }
  };
  componentDidMount() {
    const entry = this.props.navigation.getParam("entry", "NavEntry");
    const section = this.props.navigation.getParam("section", "NavSection");
    this.setState({ entries: this.props.CPF.cost[section][entry] });
  }
  onInputChange = (id, input) => {
    this.setState(pr => {
      return {
        ...pr,
        entries: {
          ...pr.entries,
          [id]: { ...pr.entries[id], value: input }
        }
      };
    });
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    const { entries } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={{ flex: 1,justifyContent:'space-between' }}>
          {entries.ids.map((id, index) => (
            <View key={index}>
              <TextInput
                key={index}
                mode="outlined"
                label={id}
                keyboardType={entries[id].type || "default"}
                value={entries[id].value}
                onChangeText={text => this.onInputChange(id, text)}
                // style={{ margin: 30 }}
                // (index== entry.length-1)
                render={props => (
                  <TextInputMask
                    {...props}
                    type={entries[id].type !== "default" ? "money" : "custom"}
                    options={{
                      precision: null,
                      separator: "",
                      delimiter: "",
                      unit: entries[id].unit + "  "
                    }}
                  />
                )}
              />
              <Divider />
            </View>
          ))}
        </View>
        <View
          style={{
            alignSelf: "stretch",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <View>
            <Button
              onPress={this.goBack}
              icon="check"
              mode="contained"
              style={{ borderRadius: 20 }}
            >
              Done
            </Button>
          </View>
          <View>
            <Button onPress={this.goBack} icon="check" mode="contained">
              Next
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
    padding:20
    //marginTop: Constants.statusBarHeight
  }
});
const mapStateToProps = state => ({
  CPF: state.CPF
});
export default connect(
  mapStateToProps,
  {}
)(Entry);
