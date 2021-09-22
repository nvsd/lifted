import React from "react";
import { StatusBar } from "expo-status-bar";
import { Box, Text } from "native-base";
import { Platform } from "react-native";

export const ModalScreen = () => {
  return (
    <Box>
      <Text>Modal</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Box>
  );
};
