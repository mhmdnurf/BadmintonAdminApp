import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import InputField from '../InputField';
import firestore from '@react-native-firebase/firestore';
import BottomSpace from '../BottomSpace';
interface KomisiField {
  data: any;
}

const KomisiField = ({data}: KomisiField) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSendNotification = async () => {
    try {
      const query = firestore().collection('notifikasi');
      await query.add({
        user_uid: data[0].gor_uid,
        title: 'Pemberitahuan Tagihan Komisi',
        pesan: `Komisi periode ${
          data[0].periode
        } telah dikirimkan sebesar Rp.${data[0].jumlahKomisi.toLocaleString()} kepada ${
          data[0].namaPemilik
        } atas GOR ${data[0].namaGOR}`,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };
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
        <Pressable style={styles.btnPembayaran}>
          <Text style={styles.btnText}>Bukti Pembayaran</Text>
        </Pressable>
        <Pressable style={styles.btnSubmit} onPress={handleSendNotification}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.btnText}>Kirim Notifikasi Tagihan</Text>
          )}
        </Pressable>
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
});
