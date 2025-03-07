import React from "react";
import { View, Text } from "react-native";
import StackNavigator from "./src/navigation/StackNavigator"; // Import the stack navigator

// Main App component
const App = () => {
  return (
    <StackNavigator />  // Render the StackNavigator to handle navigation
  );
};

export default App;
