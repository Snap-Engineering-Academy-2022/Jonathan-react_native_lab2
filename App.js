import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Snap Eating Account</Text>
      {/* TODO (part 1): update these props with your favorite food item */}
      <MenuItem name={"Texas BBQ Ribs"} price={"18.99"} imageSource={{uri: "https://womenoftoday.com/app/uploads/2020/04/aaron-franklin-pork-ribs-fb-1-copy-2-645x661.jpg"}} />
      {/* TODO (part 2): add another MenuItem! */}
      <MenuItem name={"Texas BBQ Smoked brisket"} price={"15.99"} imageSource={{uri: "https://assets.epicurious.com/photos/54af436b4074bdfd06837a2d/master/pass/51175220_smoked-brisket_1x1.jpg"}} />
      <MenuItem name={"Pulled Pork Sandwich"} price={"10.99"} imageSource={{uri: "https://howtofeedaloon.com/wp-content/uploads/2018/08/pulled-pork-instagram.jpg"}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#1c9a95",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
