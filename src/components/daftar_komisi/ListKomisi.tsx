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
  onPress: () => void;
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
        renderItem={({item}) => (
          <Pressable onPress={onPress}>
            <ListCard
              date={new Date().toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
              })}
              totalKomisi={item.jumlahKomisi.toLocaleString()}
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
