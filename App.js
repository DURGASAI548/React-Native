import React from "react";
import { Text } from "react-native-paper";
import Home from "./Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = () => {
  return (
  <SafeAreaProvider>
    <Home />
  </SafeAreaProvider>
  );
};

export default App;