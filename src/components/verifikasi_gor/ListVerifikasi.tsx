import React from 'react';
import {Pressable, RefreshControl} from 'react-native';
import ListCard from './ListCard';
import {FlatList} from 'react-native-gesture-handler';

interface ListVerifikasiData {
  id: string;
  namaLengkap: string;
  namaGOR: string;
  status: string;
}

interface ListVerifikasi {
  data: ListVerifikasiData[];
  onPress: () => void;
  refreshing: boolean;
  onRefresh: () => void;
}

const ListVerifikasi = ({
  data,
  onPress,
  refreshing,
  onRefresh,
}: ListVerifikasi) => {
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
              fullName={item.namaLengkap}
              namaGOR={item.namaGOR}
              status={item.status}
              backgroundColor={
                item.status === 'Menunggu Aktivasi' ? '#EEC759' : '#FF8080'
              }
            />
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default ListVerifikasi;
