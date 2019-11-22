import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationNativeContainer} from '@react-navigation/native';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Home} from './screens/Home';
import {Settings} from './screens/Settings';

const Tab = createBottomTabNavigator();

const isIOS = Platform.OS === 'ios';

const App = () => (
  <>
    <NavigationNativeContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <ThemeProvider>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = `${isIOS ? 'ios' : 'md'}-information-circle${
                    focused ? '' : '-outline'
                  }`;
                } else if (route.name === 'Settings') {
                  iconName = `${isIOS ? 'ios' : 'md'}-options`;
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationNativeContainer>
  </>
);

export default App;
