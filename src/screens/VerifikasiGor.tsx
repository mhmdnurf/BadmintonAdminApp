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
}

const VerfikasiGor = ({navigation}: VerifikasiGor) => {
  const isFocused = useIsFocused();
  const [dataGOR, setDataGOR] = React.useState<Data[]>([]);
  const fetchGOR = React.useCallback(async () => {
    const belumTerverifikasiRef = firestore()
      .collection('users')
      .where('status', '==', 'Belum Terverifikasi');

    const ditolakRef = firestore()
      .collection('users')
      .where('status', '==', 'Ditolak');

    const [belumTerverifikasiSnapshot, ditolakSnapshot] = await Promise.all([
      belumTerverifikasiRef.get(),
      ditolakRef.get(),
    ]);

    const mapData = (
      snapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
    ) =>
      snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        namaLengkap: doc.data().namaLengkap,
        namaGOR: doc.data().namaGOR,
        status: doc.data().status,
      }));

    const belumTerverifikasiData = mapData(belumTerverifikasiSnapshot);
    const ditolakData = mapData(ditolakSnapshot);

    setDataGOR([...belumTerverifikasiData, ...ditolakData]);
  }, []);

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
          <ListVerifikasi data={dataGOR} onPress={handleNavigate} />
        )}
      </FlatContainer>
    </>
  );
};

export default VerfikasiGor;
