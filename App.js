import { createAppContainer, createAppNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SearchScreen } from "./src/screens/SearchScreen";
import { ResultsShowScreen } from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Screen2: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Businss Search",
    },
  }
);

export default createAppContainer(navigator);
