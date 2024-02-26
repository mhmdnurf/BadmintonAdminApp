import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import InputField from '../components/verifikasi_gor/InputField';

const DetailVerifikasiGor = () => {
  const [selectedValue, setSelectedValue] = React.useState('Konfirmasi');
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Detail Verifikasi GOR" />
        <InputField
          selectedValue={selectedValue}
          onValueChange={itemValue => setSelectedValue(itemValue)}
        />
      </RootContainer>
    </>
  );
};

export default DetailVerifikasiGor;
