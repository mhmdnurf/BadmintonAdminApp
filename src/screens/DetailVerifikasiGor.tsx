import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import VerifikasiField from '../components/verifikasi_gor/VerifikasiField';

const DetailVerifikasiGor = () => {
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Detail Verifikasi GOR" />
        <VerifikasiField />
      </RootContainer>
    </>
  );
};

export default DetailVerifikasiGor;
