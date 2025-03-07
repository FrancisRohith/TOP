import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import screens
import SignUpScreen from "../screens/SignUpScreen";
import CreatePetProfile from "../screens/CreatePetProfile";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerShown: false, // Hides header for a cleaner UI
        }}
      >
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="CreatePetProfile" component={CreatePetProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
