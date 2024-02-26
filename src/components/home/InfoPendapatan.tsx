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
        <View style={styles.card}>
          <Text style={styles.title}>{`Komisi Bulan ${
            monthNames[new Date().getMonth()]
          } ${new Date().getFullYear()}`}</Text>
          <View style={styles.subTitleContainer}>
            <Text style={[styles.subTitle]}>{`Rp. ${pendapatan.toLocaleString(
              'id-ID',
            )}`}</Text>
          </View>
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
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  subTitleContainer: {
    marginTop: 10,
    borderRadius: 10,
  },
  subTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    backgroundColor: '#AAC8A7',
    padding: 40,
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
  },
});
