import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import DaftarKomisi from '../../screens/DaftarKomisi';
import VerfikasiGor from '../../screens/VerifikasiGor';

interface Tab {
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const HomeIcon = ({color, size}: Tab) => (
  <Icon name="home" color={color} size={size} />
);
const ProfileIcon = ({color, size}: Tab) => (
  <Icon name="account-box" color={color} size={size} />
);
const VerifikasiGOR = ({color, size}: Tab) => (
  <Icon name="account-box-multiple" color={color} size={size} />
);
const KomisiIcon = ({color, size}: Tab) => (
  <Icon name="account-cash" color={color} size={size} />
);

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
            tabBarIcon: HomeIcon,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="VerifikasiGor"
          component={VerfikasiGor}
          options={{
            tabBarIcon: VerifikasiGOR,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="DaftarKomisi"
          component={DaftarKomisi}
          options={{
            tabBarIcon: KomisiIcon,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ProfileIcon,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainTabs;
