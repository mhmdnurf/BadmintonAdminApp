import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface LapanganCard {
  namaGOR: string;
  jumlahLapangan: number;
  width?: number;
  marginLeft?: number;
  uri: string;
}

const LapanganCard = ({
  namaGOR,
  jumlahLapangan,
  width = 300,
  marginLeft = 10,
  uri,
}: LapanganCard) => {
  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer, {width}, {marginLeft}]}>
        <View style={styles.imageContainer}>
          <Image source={{uri: uri}} style={styles.imageSize} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{namaGOR}</Text>
          <Text style={styles.infoJumlah}>{jumlahLapangan} Lapangan</Text>
        </View>
      </View>
    </View>
  );
};

export default LapanganCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 18,
    marginTop: 15,
    height: 250,
    borderWidth: 3,
    borderColor: '#EEEDEB',
    elevation: 1,
  },
  infoContainer: {
    marginLeft: 16,
  },
  imageContainer: {
    margin: 14,
    height: '55%',
  },
  imageSize: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    resizeMode: 'cover',
  },
  infoTitle: {fontSize: 18, color: '#6F7789', fontFamily: 'Poppins SemiBold'},
  infoJumlah: {fontSize: 16, color: '#6F7789', fontFamily: 'Nunito Regulars'},
});
