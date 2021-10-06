import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { linking } from "./LinkingConfiguration";
import { RootNavigator } from "./RootNavigator";

export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}
