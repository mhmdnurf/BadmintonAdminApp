import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import InputField from '../InputField';
import SubmitButton from './SubmitButton';

const VerifikasiField = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Pemilik</Text>
      <InputField placeholder="Nama Pemilik" />
      <Text style={styles.label}>Nama GOR</Text>
      <InputField placeholder="Nama GOR" />
      <Text style={styles.label}>Surat Izin Usaha</Text>
      <Pressable style={styles.btnSubmit}>
        <Text style={styles.btnText}>Lihat</Text>
      </Pressable>
      <Text style={styles.label}>Foto GOR</Text>
      <Pressable style={styles.btnSubmit}>
        <Text style={styles.btnText}>Lihat</Text>
      </Pressable>
      <Text style={styles.label}>Catatan</Text>
      <InputField placeholder="Catatan" />
      <SubmitButton />
    </View>
  );
};

export default VerifikasiField;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
  },
  btnSubmit: {
    backgroundColor: '#AAC8A7',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
