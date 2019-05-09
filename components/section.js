import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Title, IconButton, Colors, Divider, List } from "react-native-paper";
import { Constants } from "expo";

const entries = [
  { title: "Engineer", desc: '"rates & cost"' },
  { title: "Technicien", desc: '"rates & cost"' },
  { title: "Rigger", desc: '"rates & cost"' },
  { title: "Helper", desc: '"rates & cost"' }
];

export default class Section extends React.Component {
  static navigationOptions = {
    header: null
  };
  moveToSection=(index)=>{
    this.props.navigation.navigate('Entry',{title:entries[index].title})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <List.Item
            title={'SECTION #'}
            // description={item.desc}
            right={props => (
              <List.Icon {...props} icon={"keyboard-arrow-down"} />
            )}
          />
        </View>
        <Divider style={{ backgroundColor: Colors.red200 }} />
        <View style={styles.content}>
          {entries.map((item, index) => (
            <React.Fragment key={index}>
              <List.Item
                titleEllipsizeMode="head"
                title={item.title}
                activeOpacity={0.7}
                onPress={(evt)=>this.moveToSection(index)}// description={item.desc}
                right={props => (
                  <List.Icon {...props} icon={"keyboard-arrow-right"} />
                )}
              />
              <Divider />
            </React.Fragment>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    marginTop: Constants.statusBarHeight
  },
  header: {
    flex: 1,
    
  },
  content: {
    flex: 7,
    backgroundColor: Colors.white 
  }
});
