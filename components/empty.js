import React from "react";
import { Text, View, TextInput } from "react-native";
import {
  TextInput as PaperTextInput,
  Checkbox,
  List
} from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import RF from "react-native-responsive-fontsize";

const empty = props => {
  const { text } = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: RF(3.6) }}>
        {/* No Entries yet for {id} */}
        {text}
      </Text>
    </View>
  );
};
export default empty;

export const Input = props => {
  const { id, type, value, unit, onInputChange } = props.data;
  return (
    <PaperTextInput
      mode="outlined"
      label={id}
      keyboardType={type || "default"}
      value={value}
      onChangeText={text => onInputChange(id, text)}
      render={props => {
        return type !== "default" ? (
          <TextInputMask
            {...props}
            type={"money"}
            options={{
              precision: null,
              separator: "",
              delimiter: "",
              unit: unit + "  "
            }}
          />
        ) : (
          <TextInput {...props} />
        );
      }}
    />
  );
};

export const CheckBoxes = props => {
  const { checked, onCheckBox, id } = props.data;
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Text style={{ fontSize: RF(3.5), fontWeight: "bold" }}>{id}</Text>
      <Checkbox
        {...props}
        status={checked ? "checked" : "unchecked"}
        onPress={onCheckBox}
        color="#05386b"
      />
    </View>
  );
};
