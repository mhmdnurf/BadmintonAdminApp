import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import InputField from '../InputField';

const KomisiField = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Nama Pemilik</Text>
        <InputField placeholder="Nama Pemilik" />
        <Text style={styles.label}>Nama GOR</Text>
        <InputField placeholder="Nama GOR" />
        <Text style={styles.label}>Periode</Text>
        <InputField placeholder="Periode" />
        <Text style={styles.label}>Jumlah Komisi</Text>
        <InputField placeholder="Jumlah Komisi" />
        <Pressable style={styles.btnSubmit}>
          <Text style={styles.btnText}>Cetak Invoice</Text>
        </Pressable>
      </View>
    </>
  );
};

export default KomisiField;

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
