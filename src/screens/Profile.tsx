import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import ImageProfile from '../components/profile/ImageProfile';
import BottomSpace from '../components/BottomSpace';
import ProfileField from '../components/profile/ProfileField';
import LogoutButton from '../components/profile/LogoutButton';
import EditButton from '../components/profile/EditButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

interface Profile {
  navigation: any;
}

const Profile = ({navigation}: Profile) => {
  const handleLogout = async () => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        await auth().signOut();
        await AsyncStorage.removeItem('userToken');
        console.log('User signed out!');
        navigation.replace('Login');
      } else {
        console.log('No user is currently signed in.');
      }
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  const handleNavigateToEditProfile = () => {
    console.log('Edit Profile');
  };
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Profile" />
        <ImageProfile />
        <EditButton onPress={handleNavigateToEditProfile} />
        <ProfileField />
        <LogoutButton onPress={handleLogout} />
        <BottomSpace marginBottom={100} />
      </RootContainer>
    </>
  );
};

export default Profile;
