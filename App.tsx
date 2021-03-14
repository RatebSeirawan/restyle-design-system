import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { MyScreen } from "./test";
import { ThemeProvider } from "theme";
import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import Navigation from "screens/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return <MyScreen />;
    return (
      <ThemeProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
