import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import MainContainer, { HomeStack } from './navigation/stack';

export default function App() {
  
  return (
      <MainContainer/>
  );
}
// I did this today
// create a bottom nav bar and connect all screens to each other
// home, hamburger, weather - future, light pollution map -> these are not stacked
// pages that orignate from main pages are stacked
// create a login page
//
