import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles/styles'
import { Ionicons } from "@expo/vector-icons";

const Button = (props) => {
    return (
      <View>
        <TouchableOpacity
          style={props.size == "small" ? styles.smallButton : styles.bigButton}
          onPress={props.onPress}
        >
          <Ionicons
            name={props.name}
            size={30}
            color={props.color}
          />
        </TouchableOpacity>
      </View>
    );
}
export default Button
