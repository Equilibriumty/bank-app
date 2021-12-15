import React from "react";
import { View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "./Card";
import { styles } from "../../styles/styles";

const Balance = () => {
  return (
    <View style={{paddingLeft: 35, marginTop: 20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <Text style={styles.regular}>Total Balance</Text>
          <Text style={styles.regular}>£ 23,970.30</Text>
          <Text style={styles.regular}>This month</Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="arrowup" size={24} color="#32D74B" />
            <Text style={styles.regular}>£ 5,235.25</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="arrowdown" size={24} color="#FF375F" />
            <Text style={styles.regular}>£ 3,710.80</Text>
          </View>
        </View>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

export default Balance;
