import React, { useEffect, useMemo, useReducer } from "react";
import { Text, ActivityIndicator } from "react-native";
import { styles } from "./styles/styles";
import { useFonts } from "@expo-google-fonts/poppins";
import Main from "./screens/Main";
import { View } from "react-native";
import { AuthContext } from "./context/authContex";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackScreen from "./screens/RootStackScreens";

export default function App() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (userName, password) => {
        let userToken;
        userToken = null;
        if (userName == "test" && password == "pass") {
          try {
            userToken = "aboba";
            await AsyncStorage.setItem("token", userToken);
          } catch (e) {
            console.error(e);
          }
        }
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("token");
        } catch (e) {
          console.error(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setUserToken("aboba");
        setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("token");
      } catch (e) {
        console.error(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular: require("./assets/Poppins-Regular.ttf"),
    Poppins_600SemiBold: require("./assets/Poppins-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>aboba</Text>;
  }
  if (loginState.isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  const Stack = createNativeStackNavigator();
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Stack.Navigator headerShown={false}>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
