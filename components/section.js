import * as React from "react";
import { View, StyleSheet, Image, FlatList, Text } from "react-native";
import { Colors, Divider, List } from "react-native-paper";
import Swipper from "react-native-swiper";
import { connect } from "react-redux";
import RF from "react-native-responsive-fontsize";

class Section extends React.Component {
  static navigationOptions = {
    header: null
  };
  moveToSection = (section, entry) => {
    const {} = this.props.CPF.cost;
    this.props.navigation.navigate("Entry", { entry: entry, section });
  };
  render() {
    const {
      sections
      // Manpower: { entries }
    } = this.props.CPF.cost;
    return (
      <Swipper>
        {sections.map((section, index) => {
          return (
            <View style={styles.container} key={index}>
              <View style={styles.header}>
                <Image
                  source={this.props.CPF.cost[section].imageSource}
                  alt="workers"
                  resizeMode="center"
                  style={{ height: '50%', width: '50%' }}
                />
                <Text style={styles.headerText}>{section}</Text>
                {section.subtitle && (<Text style={styles.headerText}>{this.props.CPF.cost[section].subtitle}</Text>)}
              </View>
              <View style={styles.content}>
                <FlatList
                  // style={styles.container}
                  keyExtractor={(item, index) => index+''}
                  data={this.props.CPF.cost[section].entries}
                  renderItem={({item:entry,index}) => (
                    <View key={index}>
                      <List.Item
                        titleEllipsizeMode="head"
                        title={entry}
                        activeOpacity={0.7}
                        onPress={evt => this.moveToSection(section, entry)} // description={item.desc}
                        right={props => (
                          <List.Icon {...props} icon={"keyboard-arrow-right"} />
                        )}
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
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 1.5,
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20
  },
  headerText: {
    fontSize: RF(6),
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
