import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import InputField from '../InputField';

const InfoField = () => {
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Pemilik</Text>
        <InputField value="Pedry" editable={false} />
        <Text style={styles.label}>Jenis Kelamin</Text>
        <InputField value="Laki-Laki" editable={false} />
        <Text style={styles.label}>Email</Text>
        <InputField value="zaldebarenz@gmail.com" editable={false} />
        <Text style={styles.label}>Nomor HP</Text>
        <InputField value="083801310191" editable={false} />
        <Text style={styles.label}>Alamat GOR</Text>
        <InputField value="KP. AIR RAJA" editable={false} />
        <Text style={styles.label}>Waktu Buka</Text>
        <InputField value="08.00" editable={false} />
        <Text style={styles.label}>Waktu Tutup</Text>
        <InputField value="22.00" editable={false} />
        <Text style={styles.label}>Jumlah Lapangan</Text>
        <InputField value="5" editable={false} />
        <Text style={styles.label}>Foto GOR</Text>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Lihat Foto</Text>
        </Pressable>
        <Text style={styles.label}>Surat Izin GOR</Text>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Lihat Foto</Text>
        </Pressable>
      </View>
    </>
  );
};

export default InfoField;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  btnContainer: {
    backgroundColor: '#AAC8A7',
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
