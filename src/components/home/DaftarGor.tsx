import React from 'react';
import {FlatList, Pressable} from 'react-native';
import ContentHeader from './ContentHeader';
import LapanganCard from './LapanganCard';

interface GorData {
  id: string;
  namaGOR: string;
  jumlahLapangan: number;
  imageSource: any;
}

interface DaftarGor {
  data: GorData[];
  onPress: (id: string) => () => void;
}

const DaftarGor = ({data, onPress}: DaftarGor) => {
  return (
    <>
      {/* Lapangan Start */}
      <ContentHeader title="Daftar Gelanggang Olahraga" />
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Pressable onPress={onPress(item.id)}>
            <LapanganCard
              imageSource={item.imageSource}
              namaGOR={item.namaGOR}
              jumlahLapangan={item.jumlahLapangan}
            />
          </Pressable>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      {/* Lapangan End */}
    </>
  );
};

export default DaftarGor;
