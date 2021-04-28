import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FirstScreen from "../screens/FirstScreen";
import QuestionsScreen from "../screens/QuestionsScreen";
import FinalScreen from "../screens/FinalScreen";
import Colors from "../constants/Colors";

const Navigator = createStackNavigator(
  {
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: {
        headerTitle:'Covid-19 Testine Hoşgeldiniz',
      },
    },
    QuestionsScreen: {
      screen: QuestionsScreen,
      navigationOptions: {
        headerTitle:'Sorular',
      },
    },
    FinalScreen: {
      screen: FinalScreen,
      navigationOptions: {
        headerTitle:'Sonuç',
      },
    },
  },
  {
    initialRouteName: "FirstScreen",
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(Navigator);
