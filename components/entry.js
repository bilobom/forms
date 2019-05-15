import React, { Component } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Text } from "react-native";
import { Button } from "react-native-paper";
import Empty, { Input, CheckBoxes } from "./empty";
import { connect } from "react-redux";
import RF from "react-native-responsive-fontsize";

import { toggleCheckBox,updateInput } from "../redux/actionCreators";
class Entry extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("navData").entry
    };
  };
  state = {
    entries: {
      ids: []
    }
  };
  componentWillReceiveProps(nextProps) {
    this.setState(pr => ({
      entries: nextProps.CPF[pr.sector][pr.section][pr.entry]
    }));
  }
  componentDidMount() {
    const { entry, section, sector } = this.props.navigation.getParam(
      "navData",
      {}
    );
    this.setState({
      entries: this.props.CPF[sector][section][entry],
      sector,
      section,
      entry
    });
  }
  onInputChange = (id, value) => {
    
    const { sector, section, entry } = this.state;
    this.props.updateInput(sector, section, entry, id, value);
  };
  onCheckBox = id => {
    const { sector, section, entry } = this.state;
    this.props.toggleCheckBox(sector, section, entry, id);
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  goForward = () => {
    this.goBack();
    // this.props.navigation.navigate("Entry",{entry});
  };
  render() {
    const { entries = {}} = this.state;
    return entries.hasOwnProperty("ids") ? (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          {entries.ids.map((id, index) => {
            if (!entries[id]) {
              return <Empty key={index} text={"No Fields yet for " + id} />;
            } else if (entries[id].type == "checkbox") {
              const {checked}=entries[id]
              return (
                <View key={index} style={styles.checkBox}>
                  <CheckBoxes
                    data={{
                      onCheckBox: () => this.onCheckBox(id),
                      checked,
                      id
                    }}
                  />
                </View>
              );
            } else
              return (
                <View key={index}>
                  <Input
                    data={{
                      ...entries[id],
                      id,
                      onInputChange: this.onInputChange
                    }}
                  />
                  {/* <Divider /> */}
                </View>
              );
          })}
        </View>
        <View style={styles.DoneButton}>
          <View>
            <Button
              onPress={this.goBack}
              icon="check"
              mode="contained"
              // style={{ borderRadius: 20 }}
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
  },
  DoneButton: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  checkBox: {
    // flexDirection: "row"
  }
});
const mapStateToProps = state => ({
  CPF: state.CPF
});
export default connect(
  mapStateToProps,
  { toggleCheckBox,updateInput }
)(Entry);
