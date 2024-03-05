import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface LoginButton {
  onPress: () => void;
  loading: boolean;
}

const LoginButton = ({onPress, loading}: LoginButton) => {
  return (
    <View style={styles.btnContainer}>
      <Pressable onPress={onPress}>
        {loading ? (
          <ActivityIndicator size={30} color="white" />
        ) : (
          <Text style={styles.btnText}>Login</Text>
        )}
      </Pressable>
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    width: '100%',
    backgroundColor: '#AAC8A7',
    borderRadius: 15,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins SemiBold',
    color: 'white',
  },
});
