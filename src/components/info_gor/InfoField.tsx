import React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import InputField from '../InputField';
import InAppBrowser from 'react-native-inappbrowser-reborn';

type InfoData = {
  jumlahLapangan: number;
  namaLengkap: string;
  jenisKelamin: string;
  email: string;
  nomor: string;
  alamat: string;
  waktuBuka: string;
  waktuTutup: string;
  fotoGor: string;
  suratIzin: string;
  status: string;
};

interface InfoField {
  data: InfoData | undefined;
}

const InfoField = ({data}: InfoField) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Pemilik</Text>
        <InputField value={data?.namaLengkap} editable={false} />
        <Text style={styles.label}>Jenis Kelamin</Text>
        <InputField value={data?.jenisKelamin} editable={false} />
        <Text style={styles.label}>Email</Text>
        <InputField value={data?.email} editable={false} />
        <Text style={styles.label}>Nomor HP</Text>
        <InputField value={data?.nomor} editable={false} />
        <Text style={styles.label}>Alamat GOR</Text>
        <InputField value={data?.alamat} editable={false} />
        <Text style={styles.label}>Waktu Buka</Text>
        <InputField value={data?.waktuBuka} editable={false} />
        <Text style={styles.label}>Waktu Tutup</Text>
        <InputField value={data?.waktuTutup} editable={false} />
        <Text style={styles.label}>Jumlah Lapangan</Text>
        <InputField value={data?.jumlahLapangan.toString()} editable={false} />
        <Text style={styles.label}>Status GOR</Text>
        <InputField value={data?.status} editable={false} />
        <Text style={styles.label}>Foto GOR</Text>
        <Pressable
          style={styles.btnContainer}
          onPress={() => {
            if (data?.fotoGor) {
              InAppBrowser.open(data.fotoGor);
            } else {
              Alert.alert('Error', 'No link available');
            }
          }}>
          <Text style={styles.btnText}>Lihat Foto</Text>
        </Pressable>
        <Text style={styles.label}>Surat Izin GOR</Text>
        <Pressable
          style={styles.btnContainer}
          onPress={() => {
            if (data?.suratIzin) {
              InAppBrowser.open(data.suratIzin);
            } else {
              Alert.alert('Error', 'No link available');
            }
          }}>
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
