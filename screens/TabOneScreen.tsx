import React from "react";
import { Box, Text } from "native-base";

import { RootTabScreenProps } from "../types";

export const TabOneScreen = ({ navigation }: RootTabScreenProps<"TabOne">) => {
  return (
    <Box height="full" width="full" backgroundColor="gray.900">
      <Text fontWeight="bold">Tab One</Text>
    </Box>
  );
};
