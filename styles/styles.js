import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
const {height, width} = Dimensions.get("screen")

export const styles = StyleSheet.create({
  androidSafeArea: {
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: height
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 170,
    margin: 15,
    borderRadius: 10,
    backgroundColor: "#1C1C1E",
    paddingLeft: 10,
    color: "white"
  },
  container: {
    height: height,
    width: width,
    backgroundColor: "#000",
    alignItems: "center",
  },
  image: {
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#32D74B",
    width: 64,
    height: 64,
  },
  smallButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 44,
    backgroundColor: "#1C1C1E",
    borderRadius: 8,
  },
  bigButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 44,
    borderRadius: 8,
    backgroundColor: "#1C1C1E",
  },
  card: {
    width: 311,
    height: 214,
    borderRadius: 16,
    padding: 15,
    marginHorizontal: 20,
  },
  semi: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: "white",
  },
  semi32: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    color: "white",
  },
  regular: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "white",
  },
});
