import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
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

export default Portfolio;
