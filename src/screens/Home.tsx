import React from 'react';
import RootContainer from '../components/RootContainer';
import HeaderContainer from '../components/home/HeaderContainer';
import Header from '../components/Header';
import DashboardHeader from '../components/home/DashboardHeader';
import InfoPendapatan from '../components/home/InfoPendapatan';
import DaftarGor from '../components/home/DaftarGor';
import JumlahGOR from '../components/home/JumlahGOR';
import BottomSpace from '../components/BottomSpace';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import {StatusBar} from 'react-native';

interface Home {
  navigation: any;
}

interface Data {
  id: string;
  namaGOR: string;
  jumlahLapangan: number;
  uri: string;
}

const Home = ({navigation}: Home) => {
  const isFocused = useIsFocused();
  const [data, setData] = React.useState<Data[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const fetchDaftarGOR = React.useCallback(() => {
    setRefreshing(true);
    try {
      const query = firestore()
        .collection('gor')
        .where('status', '==', 'Aktif')
        .get();

      query.then(snapshot => {
        const newData: Data[] = [];
        snapshot.forEach(doc => {
          const fetchedData = {
            id: doc.id,
            namaGOR: doc.data().namaGOR,
            jumlahLapangan: doc.data().jumlahLapangan,
            uri: doc.data().fotoGOR,
          };
          newData.push(fetchedData);
        });
        setData(newData);
      });
    } catch (error) {
      console.log('error', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const fetchKomisi = React.useCallback(async () => {
    const date = new Date();
    const monthYear =
      date.toLocaleString('default', {month: 'long'}) +
      date.getFullYear().toString();
    setRefreshing(true);
    try {
      const query = firestore().collection('komisi').doc(monthYear).get();
      const doc = await query;
      if (doc.exists) {
        console.log(doc.data());
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const handleNavigateGORDetail = (id: string) => () => {
    navigation.navigate('InfoGor', {id});
  };

  React.useEffect(() => {
    if (isFocused) {
      fetchDaftarGOR();
      fetchKomisi();
    }
  }, [fetchDaftarGOR, isFocused, fetchKomisi]);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <RootContainer
        backgroundColor="white"
        refreshing={refreshing}
        onRefresh={fetchDaftarGOR}>
        <HeaderContainer>
          <Header title="Dashboard" />
          <DashboardHeader />
          <JumlahGOR />
          <InfoPendapatan pendapatan={1000000} />
          <DaftarGor data={data} onPress={handleNavigateGORDetail} />
        </HeaderContainer>
        <BottomSpace marginBottom={100} />
      </RootContainer>
    </>
  );
};

export default Home;
