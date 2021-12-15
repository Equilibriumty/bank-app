import React, { useContext } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "../styles/styles";
import Header from "../components/UI/Header";
import Balance from "../components/UI/Balance";
import Buttons from "../components/UI/Buttons";
import ButtonWithText from "../components/UI/ButtonWithText";
import { AuthContext } from "../context/authContex";

const Main = () => {
  const {signOut} = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Header />
      <View style={{height: 280}}>
        <Balance />
      </View>
      <Buttons />
      <ButtonWithText title="aboba" size="big" onPress={() => signOut()}/>
    </SafeAreaView>
  );
};
export default Main;
