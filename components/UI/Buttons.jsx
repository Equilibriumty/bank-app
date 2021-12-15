import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles/styles";
import Button from "./Button";

const Buttons = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button size="big" color="white" name="settings-outline" />
        <Button size="big" color="white" name="settings-outline" />
        <Button size="big" color="white" name="settings-outline" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.regular}>Transfer</Text>
        <Text style={styles.regular}>Exchange</Text>
        <Text style={styles.regular}>Payments</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button size="big" color="white" name="settings-outline" />
        <Button size="big" color="white" name="settings-outline" />
        <Button size="big" color="white" name="settings-outline" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.regular}>aboba</Text>
        <Text style={styles.regular}>aboba</Text>
        <Text style={styles.regular}>aboba</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button size="big" color="white" name="settings-outline" />
        <Button size="big" color="white" name="settings-outline" />
        <Button size="big" color="white" name="settings-outline" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.regular}>aboba</Text>
        <Text style={styles.regular}>aboba</Text>
        <Text style={styles.regular}>aboba</Text>
      </View>
    </View>
  );
};

export default Buttons;
