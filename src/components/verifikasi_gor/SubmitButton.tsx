import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface SubmitButton {
  onPressConfirm: () => void;
  onPressTolak: () => void;
  isLoading: boolean;
}

const SubmitButton = ({
  onPressConfirm,
  onPressTolak,
  isLoading,
}: SubmitButton) => {
  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={({pressed}) => [
            {
              borderWidth: pressed ? 3 : 0,
              borderColor: pressed ? '#C7C8CC' : '',
            },
            styles.btnSubmit,
          ]}
          onPress={onPressConfirm}>
          {isLoading ? (
            <ActivityIndicator size={25} color="white" />
          ) : (
            <Text style={styles.btnText}>Konfirmasi</Text>
          )}
        </Pressable>
        <Pressable
          style={({pressed}) => [
            {
              borderWidth: pressed ? 3 : 0,
              borderColor: pressed ? 'gray' : '',
            },
            styles.btnTolak,
          ]}
          onPress={onPressTolak}>
          {isLoading ? (
            <ActivityIndicator size={25} color="white" />
          ) : (
            <Text style={styles.btnText}>Tolak</Text>
          )}
        </Pressable>
      </View>
    </>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnSubmit: {
    backgroundColor: '#AAC8A7',
    paddingVertical: 15,
    borderRadius: 10,
    width: '48%',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins SemiBold',
  },
  btnTolak: {
    backgroundColor: '#FF8080',
    paddingVertical: 15,
    borderRadius: 10,
    width: '48%',
  },
});
