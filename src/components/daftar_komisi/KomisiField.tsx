import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import InputField from '../InputField';

import BottomSpace from '../BottomSpace';
import InAppBrowser from 'react-native-inappbrowser-reborn';
interface KomisiField {
  data: any;
  isLoading: boolean;
  onPressNotification: () => void;
  onPressTolak: () => void;
  onPressConfirm: () => void;
}

const KomisiField = ({
  data,
  isLoading,
  onPressNotification,
  onPressConfirm,
  onPressTolak,
}: KomisiField) => {
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
        <Pressable
          style={styles.btnPembayaran}
          onPress={() => InAppBrowser.open(data[0].buktiPembayaran)}>
          <Text style={styles.btnText}>Bukti Pembayaran</Text>
        </Pressable>
        <Pressable style={styles.btnSubmit} onPress={onPressNotification}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.btnText}>Kirim Notifikasi Tagihan</Text>
          )}
        </Pressable>
        <View style={styles.btnRootContainer}>
          <Pressable style={styles.btnConfirm} onPress={onPressConfirm}>
            <Text style={styles.btnText}>Konfirmasi</Text>
          </Pressable>
          <Pressable style={styles.btnTolak} onPress={onPressTolak}>
            <Text style={styles.btnText}>Tolak</Text>
          </Pressable>
        </View>
      </View>
      <BottomSpace marginBottom={100} />
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
  btnPembayaran: {
    backgroundColor: '#B4B4B8',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  btnTolak: {
    backgroundColor: '#FD4949',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '48%',
  },
  btnConfirm: {
    backgroundColor: '#AAC8A7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '48%',
  },
  btnRootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
