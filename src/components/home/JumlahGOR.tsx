import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const JumlahGOR = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Jumlah GOR</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>3</Text>
        </View>
      </View>
    </>
  );
};

export default JumlahGOR;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#6F7789',
    marginRight: 10,
  },
  numberContainer: {
    backgroundColor: '#AAC8A7',
    borderRadius: 5,
    width: 85,
  },
  number: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
    padding: 5,
  },
});
