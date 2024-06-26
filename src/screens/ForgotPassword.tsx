import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../assets/svg/forgot_password.svg';
import auth from '@react-native-firebase/auth';

const ForgotPassword = (): React.JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const screenHeight: number = Dimensions.get('window').height;

  const handleForgotPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Berhasil', 'Silahkan cek email anda untuk mereset password');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{...styles.container, height: screenHeight}}>
      <View>
        <View style={styles.imageContainer}>
          <Logo width={250} height={250} />
        </View>
        <Text style={styles.formTitle}>Lupa</Text>
        <Text style={styles.formTitle}>Password?</Text>
        <Text style={styles.formText}>
          Masukkan email anda yang sudah terdaftar.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
      </View>
      <TouchableOpacity style={styles.btnLogin} onPress={handleForgotPassword}>
        <Text style={styles.btnText}>Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  imageSize: {
    height: 250,
    width: 250,
  },
  formTitle: {
    fontSize: 24,
    fontFamily: 'Poppins SemiBold',
    color: '#AAC8A7',
  },
  formText: {
    marginBottom: 10,
    color: 'grey',
    fontFamily: 'Poppins Regular',
  },
  input: {
    height: 44,
    width: Dimensions.get('window').width - 48,
    marginVertical: 10,
    borderWidth: 0.4,
    borderColor: '#2B3499',
    borderRadius: 8,
    padding: 10,
  },
  btnLogin: {
    backgroundColor: '#AAC8A7',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: Dimensions.get('window').width - 48,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins SemiBold',
  },
});
