import React from 'react';
import FlatContainer from '../components/FlatContainer';
import Header from '../components/Header';
import ListVerifikasi from '../components/verifikasi_gor/ListVerifikasi';

interface VerifikasiGor {
  navigation: any;
}

const VerfikasiGor = ({navigation}: VerifikasiGor) => {
  const data = [
    {
      id: '1',
      fullName: 'John Doe',
      namaGOR: 'GOR Saparua',
      status: 'Menunggu',
    },
    {
      id: '2',
      fullName: 'John Doe',
      namaGOR: 'GOR Saparua',
      status: 'Menunggu',
    },
    {
      id: '3',
      fullName: 'John Doe',
      namaGOR: 'GOR Saparua',
      status: 'Menunggu',
    },
  ];

  const handleNavigate = () => {
    navigation.navigate('DetailVerifikasiGor');
  };
  return (
    <>
      <FlatContainer backgroundColor="white">
        <Header title="Verifikasi GOR" />
        <ListVerifikasi data={data} onPress={handleNavigate} />
      </FlatContainer>
    </>
  );
};

export default VerfikasiGor;
