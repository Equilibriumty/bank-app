import React from "react";
import { TextInput } from "react-native";
import { styles } from "../../styles/styles";

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      autoCapitalize="none"
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default Input;
