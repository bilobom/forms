import React, { Component } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Text } from "react-native";
import { Colors, Button, TextInput, Divider } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";

import { connect } from "react-redux";
import RF from "react-native-responsive-fontsize";

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
    const sector = this.props.navigation.getParam("sector", "NavSector");
    const next = this.props.navigation.getParam("next", "NavNext");
    this.setState({
      entries: this.props.CPF[sector][section][entry],
      sector,
      next,
      section
    });
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
  goForward = () => {
    this.goBack();
    // this.props.navigation.navigate("Entry",{entry});
  };
  render() {
    const { entries = {} } = this.state;
    return entries.hasOwnProperty("ids") ? (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          {entries.ids.map((id, index) => {
            if (!entries[id]) {
              return (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-evenly"
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: RF(4) }}>
                    No Entries yet for {id}
                  </Text>
                </View>
              );
            }
            const { type, value = "", unit = "" } = entries[id];
            return (
              <View key={index}>
                <TextInput
                  key={index}
                  mode="outlined"
                  label={id}
                  keyboardType={type || "default"}
                  value={value}
                  onChangeText={text => this.onInputChange(id, text)}
                  render={props => (
                    <TextInputMask
                      {...props}
                      type={type !== "default" ? "money" : "custom"}
                      options={{
                        precision: null,
                        separator: "",
                        delimiter: "",
                        unit: unit + "  "
                      }}
                    />
                  )}
                />
                <Divider />
              </View>
            );
          })}
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
            <Button onPress={this.goForward} icon="check" mode="contained">
              Next
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    ) : (
      <View style={styles.emptyEntry}>
        <Text style={{ fontSize: RF(4), fontWeight: "bold" }}>
          No Entrie Yet For This section
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF5E1",
    padding: 20
    //marginTop: Constants.statusBarHeight
  },
  emptyEntry: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF5E1"
  }
});
const mapStateToProps = state => ({
  CPF: state.CPF
});
export default connect(
  mapStateToProps,
  {}
)(Entry);
