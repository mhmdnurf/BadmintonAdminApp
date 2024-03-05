import React from 'react';
import {Pressable} from 'react-native';
import ListCard from './ListCard';
import {FlatList} from 'react-native-gesture-handler';

interface ListVerifikasiData {
  id: string;
  fullName: string;
  namaGOR: string;
  status: string;
}

interface ListVerifikasi {
  data: ListVerifikasiData[];
  onPress: () => void;
}

const ListVerifikasi = ({data, onPress}: ListVerifikasi) => {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable onPress={onPress}>
            <ListCard
              fullName={item.fullName}
              namaGOR={item.namaGOR}
              status={item.status}
            />
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default ListVerifikasi;
