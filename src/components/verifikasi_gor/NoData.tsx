import React from 'react';
import Logo from '../../assets/svg/void.svg';
import {StyleSheet, Text, ScrollView, RefreshControl} from 'react-native';

interface NoData {
  refreshing: boolean;
  onRefresh: () => void;
}

const NoData = ({refreshing, onRefresh}: NoData) => {
  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Logo width={300} height={300} />
        <Text style={styles.title}>
          Tidak ada verifikasi yang perlu dilakukan 😊
        </Text>
      </ScrollView>
    </>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins SemiBold',
    marginTop: 20,
    textAlign: 'center',
    color: '#4F4F4F',
  },
});
