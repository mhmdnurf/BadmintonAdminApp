import React from 'react';
import {Pressable, FlatList, RefreshControl} from 'react-native';
import ListCard from './ListCard';
import BottomSpace from '../BottomSpace';

interface ListVerifikasiData {
  id: string;
  date: string;
  jumlahKomisi: number;
  namaGOR: string;
}

interface ListKomisi {
  data: ListVerifikasiData[];
  onPress: (item: ListVerifikasiData) => void; // Add an item parameter here
  refreshing: boolean;
  onRefresh: () => void;
}

const ListKomisi = ({data, onPress, refreshing, onRefresh}: ListKomisi) => {
  return (
    <>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item, index}) => (
          <Pressable onPress={() => onPress(item)}>
            <ListCard
              key={index}
              date={new Date().toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
              })}
              totalKomisi={item.jumlahKomisi.toLocaleString()}
              namaGOR={item.namaGOR}
            />
          </Pressable>
        )}
        ListFooterComponent={<BottomSpace marginBottom={125} />}
      />
    </>
  );
};

export default ListKomisi;
