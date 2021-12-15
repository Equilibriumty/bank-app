import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";

const ButtonWithText = (props) => {
  return (
    <TouchableOpacity
      style={props.size == "small" ? styles.smallButton : styles.bigButton}
      onPress={props.onPress}
    >
      <Text style={styles.regular}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithText;
