import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import LightPolScreen from './screens/LightPolScreen';
import HamburgerScreen from './screens/HamburgerScreen';
import WeatherScreen from './screens/WeatherScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

//Screen names
const homeName = "Home";
const weatherName = "Weather";
const lightPolName = "Light Pollution";
const hamburgerName = "Account"
var istele = 0;

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
              istele = 0;

            } else if (rn === weatherName) {
              iconName = focused ? 'cloudy-night' : 'cloudy-night-outline';
              istele = 0;

            } else if (rn === lightPolName) {
              iconName = focused ? 'telescope' : 'telescope';
              istele = 1;
            }
            else if (rn === hamburgerName) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            istele = 0;
            }

            // You can return any component that you like here!
            if (istele == 0)
            {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
            else {
              return<MaterialIcons name={iconName} size={size} color={color} />
            }
          },
          headerShown: false,
        })}
        screenOptions2={{
          "tabBarActiveTintColor": "blue",
          "tabBarInactiveTintColor": "grey",
          "tabBarLabelStyle": {
            "paddingBottom": 20,
            "fontSize": 10
          },
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={weatherName} component={WeatherScreen} />
        <Tab.Screen name={lightPolName} component={LightPolScreen} />
        <Tab.Screen name={hamburgerName} component={HamburgerScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;