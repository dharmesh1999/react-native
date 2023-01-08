import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpcomingIpo from "./screen/UpcomingIpo";
import ListedIpo from "./screen/ListedIpo";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "./constant/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Details from "./screen/Details";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: Colors.black,
        tabBarActiveTintColor: Colors.white,
      }}
    >
      <Tab.Screen
        name="UpcomingIpo"
        component={UpcomingIpo}
        options={{
          title: "Upcoming",
          headerStyle: { backgroundColor: Colors.primary400 },
          tabBarStyle: { backgroundColor: Colors.primary400 },
          tabBarIcon: ({ _, size }) => (
            <MaterialCommunityIcons
              name="calendar-multiple-check"
              size={size}
              color={Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ListedIpo"
        component={ListedIpo}
        options={{
          title: "Listed",
          headerStyle: { backgroundColor: Colors.primary400 },
          tabBarStyle: { backgroundColor: Colors.primary400 },
          tabBarIcon: ({ _, size }) => (
            <FontAwesome
              name="check-square-o"
              size={size}
              color={Colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary400 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              title: "Upcoming IPO",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              backgroundColor: Colors.white,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
