import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import ButtonWithText from "../components/UI/ButtonWithText";
import Input from "../components/UI/Input";
import { AuthContext } from "../context/authContex";
import { styles } from "../styles/styles";


const Auth = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    secureEntry: true,
  });

  const { signIn } = useContext(AuthContext)

  const handleLoginChange = (val) => {
    setUser({
      ...user,
      username: val,
    });

  };
  const handlePasswordChange = (val) => {
    setUser({
      ...user,
      password: val,
    });
  };
  const loginHandle = (username, password) => {
      signIn(username, password)
  }
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.center}>
        <Input
          placeholder="Login"
          onChangeText={(val) => handleLoginChange(val)}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(val) => handlePasswordChange(val)}
        />
        <ButtonWithText
          onPress={() => {
            loginHandle(user.username, user.password);
          }}
          title="Log in"
          size="big"
        />
      </View>
    </SafeAreaView>
  );
};

export default Auth;
