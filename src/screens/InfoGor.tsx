import React from 'react';
import Header from '../components/Header';
import RootContainer from '../components/RootContainer';
import BottomSpace from '../components/BottomSpace';
import InfoField from '../components/info_gor/InfoField';
import ImageProfile from '../components/profile/ImageProfile';

interface InfoGor {
  route: any;
}

const InfoGor = ({route}: InfoGor) => {
  const {namaGOR} = route.params;
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title={namaGOR} />
        <ImageProfile />
        <InfoField />
        <BottomSpace marginBottom={40} />
      </RootContainer>
    </>
  );
};

export default InfoGor;
