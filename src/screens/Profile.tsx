import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import ImageProfile from '../components/profile/ImageProfile';
import BottomSpace from '../components/BottomSpace';
import ProfileField from '../components/profile/ProfileField';
import LogoutButton from '../components/profile/LogoutButton';
import EditButton from '../components/profile/EditButton';

interface Profile {
  navigation: any;
}

const Profile = ({navigation}: Profile) => {
  const handleLogout = () => {
    console.log('Logout');
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
