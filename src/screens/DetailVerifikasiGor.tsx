import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import VerifikasiField from '../components/verifikasi_gor/VerifikasiField';
import BottomSpace from '../components/BottomSpace';

interface DetailVerifikasiGor {
  route: any;
  navigation: any;
}

const DetailVerifikasiGor = ({route, navigation}: DetailVerifikasiGor) => {
  const {data} = route.params;
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Detail Verifikasi GOR" />
        <VerifikasiField data={data} navigation={navigation} />
        <BottomSpace marginBottom={40} />
      </RootContainer>
    </>
  );
};

export default DetailVerifikasiGor;
