import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface InfoPendapatan {
  pendapatan: number;
}

const InfoPendapatan = ({pendapatan}: InfoPendapatan) => {
  const monthNames: string[] = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{`Komisi Bulan ${
          monthNames[new Date().getMonth()]
        } ${new Date().getFullYear()}`}</Text>
        <View style={styles.subTitleContainer}>
          <Text style={[styles.subTitle]}>{`Rp. ${pendapatan.toLocaleString(
            'id-ID',
          )}`}</Text>
        </View>
      </View>
    </>
  );
};

export default InfoPendapatan;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#6F7789',
  },
  subTitleContainer: {
    marginTop: 10,
    backgroundColor: '#FFB996',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
