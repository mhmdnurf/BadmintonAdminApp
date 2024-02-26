import React from 'react';
import {Text} from 'react-native';
import FlatContainer from '../components/FlatContainer';
import Header from '../components/Header';
import ListVerifikasi from '../components/daftar_komisi/ListVerifikasi';

const DaftarKomisi = () => {
  return (
    <>
      <FlatContainer backgroundColor="white">
        <Header title="Daftar Komisi" />
        <ListVerifikasi />
      </FlatContainer>
    </>
  );
};

export default DaftarKomisi;
