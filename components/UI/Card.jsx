import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../styles/styles'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Card = () => {
    return (
      <LinearGradient style={styles.card} colors={["#BF5AF2", "#4285F4"]}>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.semi}>Europe travel</Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="contactless-payment"
                size={30}
                color="white"
                style={{ marginRight: 10 }}
              />
              <FontAwesome5 name="apple-pay" size={30} color="white" />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.regular}>1882 8245 9831 0505</Text>
            <Ionicons name="finger-print" size={30} color="white" />
          </View>
          <Text style={styles.regular}>05 / 25</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 30
            }}
          >
            <Text style={styles.semi}>€ 7,118.30</Text>
            <FontAwesome name="cc-visa" size={50} color="white" />
          </View>
        </View>
      </LinearGradient>
    );
}
export default Card

