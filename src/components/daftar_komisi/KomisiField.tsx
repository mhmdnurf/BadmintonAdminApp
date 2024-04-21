import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import InputField from '../InputField';

interface KomisiField {
  data: any;
}

const KomisiField = ({data}: KomisiField) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Nama Pemilik</Text>
        <InputField
          placeholder="Nama Pemilik"
          editable={false}
          value={data[0].namaPemilik}
        />
        <Text style={styles.label}>Nama GOR</Text>
        <InputField
          placeholder="Nama GOR"
          editable={false}
          value={data[0].namaGOR}
        />
        <Text style={styles.label}>Periode</Text>
        <InputField
          placeholder="Periode"
          editable={false}
          value={data[0].periode.replace(/(^[a-zA-Z]+)(\d+$)/, '$1 $2')}
        />
        <Text style={styles.label}>Jumlah Komisi</Text>
        <InputField
          placeholder="Jumlah Komisi"
          editable={false}
          value={data[0].jumlahKomisi.toLocaleString()}
        />
        <Text style={styles.label}>Status</Text>
        <InputField
          placeholder="Status"
          editable={false}
          value={data[0].status}
        />
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
    color: 'grey',
    fontFamily: 'Poppins SemiBold',
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
    fontFamily: 'Poppins SemiBold',
  },
});
