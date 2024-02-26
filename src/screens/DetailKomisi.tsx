import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import KomisiField from '../components/daftar_komisi/KomisiField';

const DetailKomisi = () => {
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Detail Komisi" />
        <KomisiField />
      </RootContainer>
    </>
  );
};

export default DetailKomisi;
