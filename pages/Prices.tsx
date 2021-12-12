import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Prices = () => {
  return (
    <View style={styles.container}>
      <Text>Prices</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Prices;
