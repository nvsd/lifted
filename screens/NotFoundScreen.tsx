import React from "react";
import { Box, Text, Pressable } from "native-base";

import { RootStackScreenProps } from "../types";

export const NotFoundScreen = ({
  navigation,
}: RootStackScreenProps<"NotFound">) => {
  return (
    <Box>
      <Text>This screen doesn't exist.</Text>
      <Pressable onPress={() => navigation.replace("Root")}>
        <Text>Go to home screen!</Text>
      </Pressable>
    </Box>
  );
};
