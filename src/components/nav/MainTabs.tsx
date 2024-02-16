import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarActiveTintColor: '#AAC8A7',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
            borderRadius: 15,
            position: 'absolute',
            backgroundColor: 'white',
            marginHorizontal: 15,
            marginVertical: 12,
            height: 60,
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="HomeTab"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="account-box" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainTabs;
