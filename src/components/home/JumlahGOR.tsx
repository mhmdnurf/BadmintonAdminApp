import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const JumlahGOR = () => {
  const [jumlahGOR, setJumlahGOR] = React.useState(0);

  const fetchJumlahGOR = React.useCallback(async () => {
    const jumlahGORRef = firestore()
      .collection('gor')
      .where('status', '==', 'Aktif');
    const snapshot = await jumlahGORRef.get();
    setJumlahGOR(snapshot.size);
  }, []);

  React.useEffect(() => {
    fetchJumlahGOR();
  }, [fetchJumlahGOR]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Jumlah GOR</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{jumlahGOR}</Text>
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
    fontFamily: 'Poppins SemiBold',
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
    fontFamily: 'Nunito Bold',
    color: 'white',
    padding: 5,
  },
});
