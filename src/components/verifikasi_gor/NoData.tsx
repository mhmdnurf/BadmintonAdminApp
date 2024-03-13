import React from 'react';
import Logo from '../../assets/svg/void.svg';
import {StyleSheet, Text, View} from 'react-native';

const NoData = () => {
  return (
    <>
      <View style={styles.container}>
        <Logo width={300} height={300} />
        <Text style={styles.title}>
          Tidak ada verifikasi yang perlu dilakukan 😊
        </Text>
      </View>
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
  },
});
