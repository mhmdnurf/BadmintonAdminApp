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
    try {
      setRefreshing(true);
      let newDataKomisi = []; // Create a new array to hold the data

      // Fetch all documents from the 'komisi' collection
      const komisiQuery = await firestore().collection('komisi').get();

      for (const komisiDoc of komisiQuery.docs) {
        const komisiDocId = komisiDoc.id;

        // Fetch all documents from the 'periode' subcollection
        const periodeQuery = await firestore()
          .collection('komisi')
          .doc(komisiDocId)
          .collection('periode')
          .get();

        for (const periodeDoc of periodeQuery.docs) {
          console.log('data', periodeDoc.data());
          newDataKomisi.push(periodeDoc.data()); // Add new data to the array
        }
      }

      setDataKomisi(newDataKomisi);
    } catch (error) {
      console.log('error', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  React.useEffect(() => {
    fetchKomisi();
  }, [fetchKomisi]);

  const handleNavigateDetailKomisi = () => {
    navigation.navigate('DetailKomisi', {
      data: dataKomisi,
    });
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
