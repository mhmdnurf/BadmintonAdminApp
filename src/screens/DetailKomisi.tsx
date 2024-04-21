import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import KomisiField from '../components/daftar_komisi/KomisiField';

interface DetailKomisi {
  route: any;
}

const DetailKomisi = ({route}: DetailKomisi) => {
  const {data} = route.params;
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Detail Komisi" />
        <KomisiField data={data} />
      </RootContainer>
    </>
  );
};

export default DetailKomisi;
