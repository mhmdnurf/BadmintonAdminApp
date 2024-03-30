import React from 'react';
import FlatContainer from '../components/FlatContainer';
import Header from '../components/Header';
import ListKomisi from '../components/daftar_komisi/ListKomisi';
import firestore from '@react-native-firebase/firestore';

interface DaftarKomisi {
  navigation: any;
}

const DaftarKomisi = ({navigation}: DaftarKomisi) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [dataKomisi, setDataKomisi] = React.useState([] as any);

  const fetchKomisi = React.useCallback(async () => {
    const date = new Date();
    const monthYear =
      date.toLocaleString('default', {month: 'long'}) +
      date.getFullYear().toString();

    try {
      setRefreshing(true);
      const subCollectionId = monthYear;
      let newDataKomisi = [];
      const gorQuery = await firestore().collection('gor').get();

      for (const gorDoc of gorQuery.docs) {
        const gorDocId = gorDoc.id;

        const subQuerySnapshot = await firestore()
          .collection('komisi')
          .doc(gorDocId)
          .collection(subCollectionId)
          .doc(gorDocId)
          .get();

        if (subQuerySnapshot.exists) {
          console.log(subQuerySnapshot.data());
          newDataKomisi.push(subQuerySnapshot.data()); // Add new data to the temporary array
        }
      }

      setDataKomisi((prevDataKomisi: any) => [
        ...prevDataKomisi,
        ...newDataKomisi,
      ]);
    } catch (error) {
      console.log('error', error);
    } finally {
      setRefreshing(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchKomisi();
  }, [fetchKomisi]);

  const handleNavigateDetailKomisi = () => {
    navigation.navigate('DetailKomisi');
  };
  return (
    <>
      <FlatContainer backgroundColor="white">
        <Header title="Daftar Komisi" />
        <ListKomisi
          data={dataKomisi}
          onPress={handleNavigateDetailKomisi}
          refreshing={refreshing}
          onRefresh={fetchKomisi}
        />
      </FlatContainer>
    </>
  );
};

export default DaftarKomisi;
