import React, { useState } from "react";
import { AppLoading } from "expo";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Color from "../Colors/colors";

import CategoriesScreen from "../screens/CategoriesScreens";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import HeaderButton from "../components/HeaderButton";

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    Nerko: require("../assets/fonts/NerkoOne-Regular.ttf"),
    Fjalla: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });
};

const MealsNavigator = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories",
            headerTitleStyle: {
              fontFamily: "Fjalla",
            },
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: Color.primary,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealScreen}
          options={{
            headerTitleStyle: {
              fontFamily: "Fjalla",
            },
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: Color.primary,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={{
            title: "Meal Details",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favourite"
                  iconName="ios-star"
                  onPress={() => {
                    console.log("Mark as favourite");
                  }}
                />
                <Item
                  title="Favourite"
                  iconName="ios-star-outline"
                  onPress={() => {
                    console.log("Mark as favourite");
                  }}
                />
              </HeaderButtons>
            ),
            headerTitleStyle: {
              fontFamily: "Fjalla",
            },
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: Color.primary,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginRight: 15,
    width: 25,
    resizeMode: "contain",
  },
});
export default MealsNavigator;
