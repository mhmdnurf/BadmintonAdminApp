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
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import {Alert} from 'react-native';

interface Profile {
  navigation: any;
}

const Profile = ({navigation}: Profile) => {
  const [profileData, setProfileData] = React.useState({} as any);
  const [imageProfile, setImageProfile] = React.useState('');
  const isFocused = useIsFocused();

  const fetchUser = React.useCallback(async () => {
    const user = auth().currentUser;
    if (user) {
      const userUID = user.uid;
      const userRef = firestore().collection('users').doc(userUID);
      const userData = await userRef.get();
      setProfileData(userData.data());
    }
  }, []);

  const fetchImageProfile = React.useCallback(() => {
    const user = auth().currentUser;
    try {
      const query = firestore().collection('users').doc(user?.uid).get();
      query.then(doc => {
        const fetchedData = doc.data();
        setImageProfile(fetchedData?.fotoUser);
      });
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      'Confirmation',
      'Anda yakin ingin keluar?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              const currentUser = auth().currentUser;
              if (currentUser) {
                await auth().signOut();
                await AsyncStorage.removeItem('userToken');
                console.log('User signed out!');
                Alert.alert('Success', 'User signed out!');
                navigation.replace('Login');
              } else {
                console.log('No user is currently signed in.');
                Alert.alert('Error', 'No user is currently signed in.');
              }
            } catch (error) {
              console.log('Error signing out:', error);
              Alert.alert('Error', 'Error signing out: ' + error);
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleNavigateToEditProfile = () => {
    console.log('Edit Profile');
  };

  React.useEffect(() => {
    if (isFocused) {
      fetchUser();
      fetchImageProfile();
    }
  }, [fetchUser, fetchImageProfile, isFocused]);
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Profile" />
        <ImageProfile uri={imageProfile} />
        <EditButton onPress={handleNavigateToEditProfile} />
        <ProfileField data={profileData} />
        <LogoutButton onPress={handleLogout} />
        <BottomSpace marginBottom={100} />
      </RootContainer>
    </>
  );
};

export default Profile;
