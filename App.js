import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WardrobeStateProvider } from './Context';
import AddItemList from './AddItemList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchItemsList from './MatchItemsList';
import AllLooksList from './AllLooksList';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <WardrobeStateProvider>
        <Stack.Navigator>
          <Stack.Screen name="Add Item to Match" component={AddItemList} options={{ headerShown: false }} />
          <Stack.Screen name="Match Items" component={MatchItemsList} options={{ headerTitle: " " }} />
          <Stack.Screen name="All Looks" component={AllLooksList} />
        </Stack.Navigator>
      </WardrobeStateProvider>
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
