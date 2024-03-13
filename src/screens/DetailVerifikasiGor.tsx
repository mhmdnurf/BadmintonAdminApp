import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import VerifikasiField from '../components/verifikasi_gor/VerifikasiField';

interface DetailVerifikasiGor {
  route: any;
  navigation: any;
}

const DetailVerifikasiGor = ({route, navigation}: DetailVerifikasiGor) => {
  const {data} = route.params;
  console.log(data);
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Detail Verifikasi GOR" />
        <VerifikasiField data={data} navigation={navigation} />
      </RootContainer>
    </>
  );
};

export default DetailVerifikasiGor;
