import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TotalWardrobeStateProvider } from './Context';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './StackNavigator';




export default function App() {

  return (
    <NavigationContainer>
      <TotalWardrobeStateProvider>
        <StackNavigator />
      </TotalWardrobeStateProvider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
