import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './navigation/stack';

export default function App() {
  
  return (
      <HomeStack/>
  );
}

// create a bottom nav bar and connect all screens to each other
// home, hamburger, weather - future, light pollution map -> these are not stacked
// pages that orignate from main pages are stacked
// create a login page
//