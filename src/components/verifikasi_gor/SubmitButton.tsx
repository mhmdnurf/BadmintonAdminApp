import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const SubmitButton = () => {
  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.btnSubmit}>
          <Text style={styles.btnText}>Konfirmasi</Text>
        </Pressable>
        <Pressable style={styles.btnTolak}>
          <Text style={styles.btnText}>Tolak</Text>
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
