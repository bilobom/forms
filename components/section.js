import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import { Colors, Divider, List, Chip } from "react-native-paper";
import Swipper from "react-native-swiper";
import { connect } from "react-redux";
import RF from "react-native-responsive-fontsize";
import Icons from "@expo/vector-icons/MaterialIcons";

class Section extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    sector: "",
    sections: []
  };
  moveToEntry = (section, entry) => {
    this.props.navigation.navigate("Entry", {
      navData: {
        entry: entry,
        section,
        sector: this.state.sector
      }
    });
  };
  componentDidMount() {
    const sector = this.props.navigation.getParam("sector", "cost");
    const { sections = [] } = this.props.CPF[sector];
    this.setState({ sector, sections });
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    const { sections, sector } = this.state;
    return sections.length ? (
      <Swipper>
        {sections.map((section, index) => {
          const {
            entries = [],
            imageSource = null,
            subtitle = ""
          } = this.props.CPF[sector][section];
          return (
            <View style={styles.container} key={index}>
              <View style={styles.header}>
                <View style={styles.backButton}>
                  <TouchableOpacity onPress={this.goBack}>
                    <Icons
                      name="keyboard-arrow-left"
                      size={RF(7)}
                      color="#05386B"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 8,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={imageSource}
                    alt="workers"
                    resizeMode="center"
                    style={{ height: "50%", width: "50%" }}
                  />
                  <Text style={styles.headerText}>{section}</Text>

                  <Text style={styles.SubtitleText}>{subtitle}</Text>
                </View>
              </View>
              <View style={styles.content}>
                <FlatList
                  // style={styles.container}
                  keyExtractor={(item, index) => index + ""}
                  data={entries}
                  renderItem={({ item: entry, index }) => (
                    <View key={index}>
                      <List.Item
                        titleEllipsizeMode="head"
                        title={entry}
                        activeOpacity={0.7}
                        onPress={evt => this.moveToEntry(section, entry)} // description={item.desc}
                        right={props => {
                          let entryInstance = this.props.CPF[sector][section][
                            entry
                          ] || { ids: {} };
                          return (
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center"
                              }}
                            >
                              {typeof entryInstance == "object" &&
                              !("chipEnabled" in entryInstance) ? null : (
                                <View
                                  style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                  }}
                                >
                                  {entryInstance.ids.map((id, index) => (
                                    <Chip
                                      key={index}
                                      icon={entryInstance[id].icon}
                                      style={{ backgroundColor: "#8EE4AF" }}
                                    >
                                      {entryInstance[id].value}{" "}
                                      {entryInstance[id].unit}
                                    </Chip>
                                  ))}
                                </View>
                              )}
                              <List.Icon
                                {...props}
                                icon={"keyboard-arrow-right"}
                              />
                            </View>
                          );
                        }}
                      />
                      <Divider />
                    </View>
                  )}
                />
              </View>
            </View>
          );
        })}
      </Swipper>
    ) : (
      <View style={styles.emptySection}>
        <Text style={{ fontSize: RF(4), fontWeight: "bold" }}>
          No Section Yet For This sector
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5CDB95",
    paddingBottom: 10,
    padding: 30
    // marginTop: Constants.statusBarHeight
  },
  emptySection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF5E1"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
    // justifyContent: "center"
  },
  backButton: {
    flex: 1,
    // backgroundColor: "#05386B",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  content: {
    flex: 1.5,
    backgroundColor: "#EDF5E1",
    borderRadius: 15,
    padding: 20
  },
  headerText: {
    fontSize: RF(6),
    fontWeight: "bold",
    fontFamily: "Roboto"
  },
  SubtitleText: {
    fontSize: RF(3),
    fontWeight: "bold",
    fontFamily: "Roboto"
  }
});
const mapStateToProps = state => ({
  CPF: state.CPF
});

export default connect(
  mapStateToProps,
  {
    /*dsdfsdf*/
  }
)(Section);
