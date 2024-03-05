import React from 'react';
import {Alert, StatusBar, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Logo from '../assets/svg/login.svg';
import LoginButton from '../components/login/LoginButton';
import LoginField from '../components/login/LoginField';
import RootContainer from '../components/RootContainer';
import BottomSpace from '../components/BottomSpace';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Login {
  navigation: any;
}

interface ExtendedError extends Error {
  code?: string;
}

const Login = ({navigation}: Login) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );

      const userDoc = firestore()
        .collection('users')
        .doc(userCredential.user.uid);

      try {
        const docSnapshot = await userDoc.get();

        if (docSnapshot.exists) {
          const userData = docSnapshot.data();
          if (userData) {
            console.log(userData);

            const userRole = userData.role;
            if (userRole === 'admin') {
              console.log('User logged in successfully!');
              const userToken = userCredential.user.uid;
              await AsyncStorage.setItem('userToken', userToken);
              navigation.navigate('Home');
            } else {
              Alert.alert('Error', 'Login failed. Please try again later.');
            }
          } else {
            console.error('No user data found');
          }
        }
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      const err = error as ExtendedError;
      if (err.code === 'auth/user-not-found') {
        Alert.alert('Peringatan', 'Email/Password salah');
      } else if (err.code === 'auth/wrong-password') {
        Alert.alert('Peringatan', 'Email/Password salah');
      } else {
        Alert.alert('Error', 'Login failed. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
    navigation.navigate('Home');
  };

  const handleForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <>
      <RootContainer backgroundColor="white">
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <Header title="Login" />
        <View style={styles.svgContainer}>
          <Logo width={300} height={300} />
        </View>
        <View style={styles.loginFieldContainer}>
          <Text style={styles.loginTitle}>Masukkan akun admin</Text>
          <LoginField
            onPress={handleForgot}
            emailValue={email}
            passwordValue={password}
            onChangeTextEmail={setEmail}
            onChangeTextPassword={setPassword}
          />
          <LoginButton onPress={handleLogin} loading={isLoading} />
        </View>
        <BottomSpace marginBottom={40} />
      </RootContainer>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  svgContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  loginFieldContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  loginTitle: {
    fontSize: 20,
    fontFamily: 'Poppins SemiBold',
    color: '#6F7789',
  },
});
