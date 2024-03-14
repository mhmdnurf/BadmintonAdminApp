import React from 'react';
import FlatContainer from '../components/FlatContainer';
import Header from '../components/Header';
import ListVerifikasi from '../components/verifikasi_gor/ListVerifikasi';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import NoData from '../components/verifikasi_gor/NoData';

interface VerifikasiGor {
  navigation: any;
}

interface Data {
  id: string;
  namaLengkap: string;
  namaGOR: string;
  status: string;
  suratIzin: string;
  fotoGOR: string;
  catatan: string;
}

const VerfikasiGor = ({navigation}: VerifikasiGor) => {
  const isFocused = useIsFocused();
  const [dataGOR, setDataGOR] = React.useState<Data[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const fetchGOR = React.useCallback(async () => {
    setRefreshing(true);
    const query = await firestore()
      .collection('gor')
      .where('status', '!=', 'Aktif')
      .get();

    const fetchedData = await Promise.all(
      query.docs.map(async doc => {
        const data = doc.data() as FirebaseFirestoreTypes.DocumentData;
        const userDoc = await firestore()
          .collection('users')
          .doc(data.user_uid)
          .get();
        const userData = userDoc.data() as FirebaseFirestoreTypes.DocumentData;

        return {
          id: doc.id,
          namaLengkap: userData.namaLengkap,
          namaGOR: data.namaGOR,
          status: data.status,
          suratIzin: data.suratIzin,
          fotoGOR: data.fotoGOR,
          catatan: data.catatan,
        };
      }),
    );

    setDataGOR(fetchedData);
    setRefreshing(false);
  }, []);
  console.log(dataGOR);

  React.useEffect(() => {
    if (isFocused) {
      fetchGOR();
    }
  }, [fetchGOR, isFocused]);

  const handleNavigate = () => {
    navigation.navigate('DetailVerifikasiGor', {data: dataGOR});
  };
  return (
    <>
      <FlatContainer backgroundColor="white">
        <Header title="Verifikasi GOR" />
        {dataGOR.length === 0 ? (
          <NoData />
        ) : (
          <ListVerifikasi
            data={dataGOR}
            onPress={handleNavigate}
            refreshing={refreshing}
            onRefresh={fetchGOR}
          />
        )}
      </FlatContainer>
    </>
  );
};

export default VerfikasiGor;
