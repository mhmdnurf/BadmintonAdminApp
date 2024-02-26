import React from 'react';
import {Pressable, FlatList} from 'react-native';
import ListCard from './ListCard';
import BottomSpace from '../BottomSpace';

interface ListVerifikasiData {
  id: string;
  date: string;
  totalKomisi: number;
  namaGOR: string;
}

interface ListKomisi {
  data: ListVerifikasiData[];
  onPress: () => void;
}

const ListKomisi = ({data, onPress}: ListKomisi) => {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable onPress={onPress}>
            <ListCard
              date={item.date}
              totalKomisi={item.totalKomisi}
              namaGOR={item.namaGOR}
            />
          </Pressable>
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={<BottomSpace marginBottom={125} />}
      />
    </>
  );
};

export default ListKomisi;
