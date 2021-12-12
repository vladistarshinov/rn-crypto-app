import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Actions = () => {
  return (
    <View style={styles.container}>
      <Text>Actions</Text>
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

export default Actions;
