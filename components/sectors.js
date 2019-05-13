import React, { Component } from "react";
import { View, StyleSheet, Image, Text,Dimensions } from "react-native";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import RF from "react-native-responsive-fontsize";
import { Constants } from 'expo';
const {height,width}=Dimensions.get('window')
export class sectors extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const {
      CPF: { sectors },
      CPF
    } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={sectors}
          keyExtractor={(item, index) => index + ""}
          renderItem={({ item: sector, index }) => {
            return (
              <View style={styles.sectorHolder}>
                <View style={{flex:1}}>
                  <Image
                    source={CPF[sector].imageSource}
                    alt={"dsf"}
                    style={{ height:height/6 , width: null, flex: 1 }}
                  />
                </View>

                <View style={{ flex: 1}}>
                  <Text style={styles.sectorText}>{sector}</Text>
                  <Text style={styles.subtitleText}>{CPF[sector].subtitle}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  CPF: state.CPF
});

const mapDispatchToProps = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight+RF(2),
    backgroundColor: "#05386b",
    padding: RF(2),
    justifyContent: "space-around",
    
  },
  sectorHolder: {
    flex: 1,
    marginBottom:RF(2),
    backgroundColor: "#5CDB95",
    flexDirection: "row",
    justifyContent:'space-around',
    borderRadius: RF(2),
    padding: RF(2)
  },
  sectorText: {
    fontSize: RF(4.5),
    fontWeight: "bold",
    fontFamily: "Roboto"
  },
  subtitleText:{
    fontSize: RF(2.5),
    fontWeight: "bold",
    fontFamily: "Roboto"
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sectors);
