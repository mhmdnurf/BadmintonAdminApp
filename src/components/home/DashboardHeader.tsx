import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DashboardHeader = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Halo, Admin</Text>
        <Text style={styles.title}>Sudah cek pendapatan hari ini?</Text>
      </View>
    </>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#6F7789',
  },
});
