import React from 'react';
import FlatContainer from '../components/FlatContainer';
import Header from '../components/Header';
import ListKomisi from '../components/daftar_komisi/ListKomisi';

interface DaftarKomisi {
  navigation: any;
}

const DaftarKomisi = ({navigation}: DaftarKomisi) => {
  const data = [
    {
      id: '1',
      date: 'Januari 2024',
      totalKomisi: 100000,
      namaGOR: 'GOR A',
    },
    {
      id: '2',
      date: 'Januari 2024',
      totalKomisi: 200000,
      namaGOR: 'GOR B',
    },
    {
      id: '3',
      date: 'Januari 2024',
      totalKomisi: 300000,
      namaGOR: 'GOR C',
    },
  ];

  const handleNavigateDetailKomisi = () => {
    navigation.navigate('DetailKomisi');
  };
  return (
    <>
      <FlatContainer backgroundColor="white">
        <Header title="Daftar Komisi" />
        <ListKomisi data={data} onPress={handleNavigateDetailKomisi} />
      </FlatContainer>
    </>
  );
};

export default DaftarKomisi;
