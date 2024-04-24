import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import MainTabs from './src/components/nav/MainTabs';
import InfoGor from './src/screens/InfoGor';
import DetailVerifikasiGor from './src/screens/DetailVerifikasiGor';
import DetailKomisi from './src/screens/DetailKomisi';
import EditProfile from './src/screens/EditProfile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: '',
            headerShown: true,
            headerTintColor: '#AAC8A7',
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: '',
            headerShown: true,
            headerTintColor: '#AAC8A7',
          }}
        />
        <Stack.Screen
          name="Home"
          component={MainTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InfoGor"
          component={InfoGor}
          options={{headerShown: true, title: '', headerTintColor: '#AAC8A7'}}
        />
        <Stack.Screen
          name="DetailVerifikasiGor"
          component={DetailVerifikasiGor}
          options={{
            title: '',
            headerShown: true,
            headerTintColor: '#AAC8A7',
          }}
        />
        <Stack.Screen
          name="DetailKomisi"
          component={DetailKomisi}
          options={{
            title: '',
            headerShown: true,
            headerTintColor: '#AAC8A7',
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: '',
            headerShown: true,
            headerTintColor: '#AAC8A7',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
