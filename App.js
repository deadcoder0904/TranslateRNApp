import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {HomeScreen} from './components/HomeScreen';
import {SettingsScreen} from './components/SettingsScreen';

const Stack = createStackNavigator();

const App = () => (
  <>
    <NavigationNativeContainer>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider>
        <SafeAreaView>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </ThemeProvider>
    </NavigationNativeContainer>
  </>
);

export default App;
