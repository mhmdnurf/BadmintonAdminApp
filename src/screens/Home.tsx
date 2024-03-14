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
  const [data, setData] = React.useState<Data[]>([]);
  const fetchDaftarGOR = React.useCallback(() => {
    try {
      const query = firestore()
        .collection('users')
        .where('status', '==', 'Aktif')
        .get();

      query.then(snapshot => {
        snapshot.forEach(doc => {
          const fetchedData = {
            id: doc.id,
            namaGOR: doc.data().namaGOR,
            jumlahLapangan: doc.data().jumlahLapangan,
            uri: doc.data().fotoGor,
          };
          setData(prevData => [...prevData, fetchedData]);
        });
      });
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const handleNavigateGORDetail = (id: string) => () => {
    navigation.navigate('InfoGor', {id});
  };

  React.useEffect(() => {
    fetchDaftarGOR();
  }, [fetchDaftarGOR]);
  return (
    <>
      <RootContainer backgroundColor="white">
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
