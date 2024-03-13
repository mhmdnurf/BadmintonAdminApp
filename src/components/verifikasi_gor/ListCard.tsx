import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ListCard {
  fullName: string;
  namaGOR: string;
  status: string;
  backgroundColor: string;
}

const ListCard = ({fullName, namaGOR, status, backgroundColor}: ListCard) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>{fullName}</Text>
          <Text style={styles.title}>{namaGOR}</Text>
          <View style={[styles.statusContainer, {backgroundColor}]}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
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
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: '#6F7789',
    fontFamily: 'Nunito SemiBold',
  },
  statusContainer: {
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  statusText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins SemiBold',
  },
});
