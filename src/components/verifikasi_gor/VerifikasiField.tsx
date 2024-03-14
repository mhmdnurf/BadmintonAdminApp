import React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import InputField from '../InputField';
import SubmitButton from './SubmitButton';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import firestore from '@react-native-firebase/firestore';

interface Data {
  namaLengkap: string;
  namaGOR: string;
  suratIzin: string;
  fotoGOR: string;
  catatan: string;
  id: string;
}
interface VerifikasiField {
  data: Data[];
  navigation: any;
}

const VerifikasiField = ({data, navigation}: VerifikasiField) => {
  const [catatan, setCatatan] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleConfirmRequest = async () => {
    setIsLoading(true);
    try {
      const userUID = data[0].id;
      await firestore().collection('gor').doc(userUID).update({
        status: 'Aktif',
        catatan: 'Verifikasi GOR telah dikonfirmasi',
      });
      console.log('Data berhasil diupdate', {
        status: 'Terverifikasi',
        catatan: catatan,
        userUID: userUID,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      navigation.navigate('VerifikasiGor');
    }
  };

  const handleTolakRequest = async () => {
    setIsLoading(true);
    try {
      const userUID = data[0].id;
      await firestore().collection('gor').doc(userUID).update({
        status: 'Ditolak',
        catatan: catatan,
      });
      console.log('Data berhasil diupdate', {
        status: 'Ditolak',
        catatan: catatan,
        userUID: userUID,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      navigation.navigate('VerifikasiGor');
    }
  };

  const handleConfirm = async () => {
    try {
      Alert.alert(
        'Data akan diverifikasi!',
        'Apakah anda yakin untuk setujui?',
        [
          {
            text: 'Batal',
            style: 'cancel',
          },
          {
            text: 'Confirm',
            onPress: handleConfirmRequest,
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
            text: 'Batal',
            onPress: () => console.log('Batal'),
            style: 'cancel',
          },
          {
            text: 'Confirm',
            onPress: handleTolakRequest,
          },
        ],
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Pemilik</Text>
      <InputField placeholder={data[0].namaLengkap} editable={false} />
      <Text style={styles.label}>Nama GOR</Text>
      <InputField placeholder={data[0].namaGOR} editable={false} />
      <Text style={styles.label}>Surat Izin Usaha</Text>
      <Pressable
        style={styles.btnSubmit}
        onPress={() => InAppBrowser.open(data[0].suratIzin)}>
        <Text style={styles.btnText}>Lihat</Text>
      </Pressable>
      <Text style={styles.label}>Foto GOR</Text>
      <Pressable
        style={styles.btnSubmit}
        onPress={() => InAppBrowser.open(data[0].fotoGOR)}>
        <Text style={styles.btnText}>Lihat</Text>
      </Pressable>
      <Text style={styles.label}>Catatan</Text>
      <InputField
        placeholder={'Catatan'}
        value={data[0].catatan ? data[0].catatan : '-'}
        onChangeText={setCatatan}
      />
      <SubmitButton
        onPressConfirm={handleConfirm}
        onPressTolak={handleTolak}
        isLoading={isLoading}
      />
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
    fontFamily: 'Nunito Regular',
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
