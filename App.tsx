import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation />
        <StatusBar />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
