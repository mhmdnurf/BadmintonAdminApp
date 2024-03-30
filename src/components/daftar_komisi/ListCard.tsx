import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ListCard {
  date: string;
  totalKomisi: string;
  namaGOR: string;
}

const ListCard = ({date, totalKomisi, namaGOR}: ListCard) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <Text style={styles.title}>{`Rp.${totalKomisi}`}</Text>
          <Text style={styles.namaGOR}>{namaGOR}</Text>
        </View>
      </View>
    </>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  cardContainer: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#EEEDEB',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#AAC8A7',
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'Poppins SemiBold',
    textAlign: 'center',
    marginTop: 20,
  },
  dateContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#EEEDEB',
    borderWidth: 3,
  },
  dateText: {
    fontSize: 16,
    color: '#35374B',
    fontFamily: 'Poppins SemiBold',
    textAlign: 'center',
  },
  namaGOR: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins SemiBold',
    marginTop: 10,
    marginBottom: 20,
  },
});
