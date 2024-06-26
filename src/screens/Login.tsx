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

const Login = ({navigation}: Login) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    if (!email || !password) {
      setIsLoading(false);
      Alert.alert('Login gagal', 'Email dan password tidak boleh kosong');
      return;
    }
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
              navigation.replace('Home');
            } else {
              console.error('User is not an admin');
              Alert.alert('Login gagal', 'Anda bukan admin');
            }
          } else {
            console.error('No user data found');
          }
        }
      } catch (error) {
        console.error(error);
      }
    } catch (e: any) {
      console.log(e);
      setIsLoading(false);
      if (e.code === 'auth/invalid-email') {
        Alert.alert('Login gagal', 'Format email tidak valid');
      } else if (e.code === 'auth/user-disabled') {
        Alert.alert('Login gagal', 'Pengguna ini telah dinonaktifkan');
      } else if (e.code === 'auth/user-not-found') {
        Alert.alert('Login gagal', 'Pengguna tidak ditemukan');
      } else if (e.code === 'auth/wrong-password') {
        Alert.alert('Login gagal', 'Password salah');
      } else if (e.code === 'auth/network-request-failed') {
        Alert.alert('Login gagal', 'Tidak ada koneksi internet');
      } else if (e.code === 'auth/invalid-credential') {
        Alert.alert('Login gagal', 'Email atau password tidak valid');
      } else {
        Alert.alert('Login gagal', 'Terjadi kesalahan');
      }
      return;
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
