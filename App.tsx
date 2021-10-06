import React from "react";
import { NativeBaseProvider, theme } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <Navigation />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
