import React from 'react';
import RootContainer from '../components/RootContainer';
import HeaderContainer from '../components/home/HeaderContainer';
import Header from '../components/Header';
import DashboardHeader from '../components/home/DashboardHeader';
import InfoPendapatan from '../components/home/InfoPendapatan';
import DaftarGor from '../components/home/DaftarGor';
import JumlahGOR from '../components/home/JumlahGOR';
import BottomSpace from '../components/BottomSpace';

interface Home {
  navigation: any;
}

const Home = ({navigation}: Home) => {
  const data = [
    {
      id: '1',
      namaGOR: 'GOR Chans',
      jumlahLapangan: 5,
      imageSource: require('../assets/img/lapangan_1.jpg'),
    },
    {
      id: '2',
      namaGOR: 'GOR Mahakam',
      jumlahLapangan: 3,
      imageSource: require('../assets/img/lapangan_2.jpg'),
    },
    {
      id: '3',
      namaGOR: 'GOR Rawasari',
      jumlahLapangan: 4,
      imageSource: require('../assets/img/lapangan_3.jpg'),
    },
  ];

  const handleNavigateGORDetail = (id: string) => () => {
    navigation.navigate('InfoGor', {
      itemId: id,
      namaGOR: 'GOR Chans',
    });
  };
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
