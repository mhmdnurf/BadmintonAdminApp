import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import KomisiField from '../components/daftar_komisi/KomisiField';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

interface DetailKomisi {
  route: any;
  navigation: any;
}

const DetailKomisi = ({route, navigation}: DetailKomisi) => {
  const {data} = route.params;
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSendNotification = async () => {
    try {
      const query = firestore().collection('notifikasi');
      await query.add({
        user_uid: data.gor_uid,
        title: 'Pemberitahuan Tagihan Komisi',
        pesan: `Komisi periode ${
          data.periode
        } telah dikirimkan sebesar Rp.${data.jumlahKomisi.toLocaleString()} kepada ${
          data.namaPemilik
        } atas GOR ${data.namaGOR}`,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert(
        'Notifikasi berhasil dikirim',
        'Pemberitahuan pelunasan tagihan komisi akan masuk ke aplikasi pemilik GOR',
      );
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmRequest = async () => {
    setIsLoading(true);
    try {
      const query = firestore().collection('komisi').doc(data.gor_uid);
      await query.collection('periode').doc(data?.periode).update({
        status: 'Lunas',
      });

      const notifikasiQuery = firestore().collection('notifikasi');
      await notifikasiQuery.add({
        user_uid: data.gor_uid,
        title: 'Pemberitahuan Pelunasan Tagihan',
        pesan: `
        Tagihan komisi periode ${
          data.periode
        } telah dilunasi sebesar Rp.${data.jumlahKomisi.toLocaleString()} dan disetujui oleh Admin
        `,
        status: 'success',
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert('Data berhasil diverifikasi', 'Tagihan menjadi lunas');
      navigation.goBack();
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTolakRequest = async () => {
    setIsLoading(true);
    try {
      const query = firestore().collection('komisi').doc(data.gor_uid);
      await query.collection('periode').doc(data?.periode).update({
        status: 'Belum Lunas',
      });

      const notifikasiQuery = firestore().collection('notifikasi');
      await notifikasiQuery.add({
        user_uid: data.gor_uid,
        title: 'Pemberitahuan Pelunasan Tagihan',
        pesan: `Bukti pembayaran tagihan komisi periode ${
          data.periode
        } sebesar Rp.${data.jumlahKomisi.toLocaleString()} telah ditolak oleh Admin. Jika ada kesalahan silahkan hubungi Admin.
      `,
        status: 'failed',
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert(
        'Data berhasil ditolak',
        'Tagihan menjadi belum lunas kembali',
      );
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
      navigation.goBack();
    }
  };

  const handleConfirm = async () => {
    try {
      Alert.alert(
        'Data akan diverifikasi!',
        'Apakah anda yakin untuk setujui?',
        [
          {
            text: 'Confirm',
            onPress: handleConfirmRequest,
          },
          {
            text: 'Batal',
            style: 'cancel',
          },
        ],
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleTolak = async () => {
    try {
      Alert.alert(
        'Data akan diverifikasi!',
        'Apakah anda yakin untuk menolak?',
        [
          {
            text: 'Confirm',
            onPress: handleTolakRequest,
          },
          {
            text: 'Batal',
            onPress: () => console.log('Batal'),
            style: 'cancel',
          },
        ],
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Detail Komisi" />
        <KomisiField
          data={data}
          onPressNotification={handleSendNotification}
          isLoading={isLoading}
          onPressConfirm={handleConfirm}
          onPressTolak={handleTolak}
        />
      </RootContainer>
    </>
  );
};

export default DetailKomisi;
