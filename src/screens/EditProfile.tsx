import React from 'react';
import RootContainer from '../components/RootContainer';
import Header from '../components/Header';
import EditField from '../components/profile/EditField';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import BottomSpace from '../components/BottomSpace';
import {Alert} from 'react-native';

interface EditProfile {
  route: any;
  navigation: any;
}

const EditProfile = ({route, navigation}: EditProfile) => {
  const {data} = route.params;
  const [fullName, setFullName] = React.useState(data?.fullName || '');
  const [nomor, setNomor] = React.useState(data?.nomor || '');
  const [noRek, setNoRek] = React.useState(data?.noRek || '');
  const [namaBank, setNamaBank] = React.useState(data?.namaBank || '');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const user = auth().currentUser;
    try {
      // Check if the 'nomor' already exists in the database
      const nomorSnapshot = await firestore()
        .collection('users')
        .where('nomor', '==', nomor)
        .get();
      if (!nomorSnapshot.empty) {
        // Check if the document with the same 'nomor' is the current user's document
        const isCurrentUserDoc = nomorSnapshot.docs.some(
          doc => doc.id === user?.uid,
        );
        if (!isCurrentUserDoc) {
          Alert.alert('Error', 'Nomor telah terdaftar');
          setIsLoading(false);
          return;
        }
      }

      const rekening = await firestore()
        .collection('users')
        .where('noRek', '==', noRek)
        .get();

      if (!rekening.empty) {
        const isCurrentUserDoc = rekening.docs.some(
          doc => doc.id === user?.uid,
        );
        if (!isCurrentUserDoc) {
          Alert.alert('Error', 'Nomor rekening telah terdaftar');
          setIsLoading(false);
          return;
        }
      }

      await firestore().collection('users').doc(user?.uid).update({
        fullName,
        nomor,
        noRek,
        namaBank,
      });

      console.log('Data berhasil diupdate', {
        fullName,
        nomor,
        noRek,
        namaBank,
      });

      setIsLoading(false);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title="Edit Profile" marginBottom={20} />
        <EditField
          fullName={fullName}
          nomor={nomor}
          noRek={noRek}
          selectedBankValue={namaBank}
          onBankValueChange={setNamaBank}
          onChangeNoRek={setNoRek}
          onPressSubmit={handleSubmit}
          onChangeNamaLengkap={setFullName}
          onChangeNomor={setNomor}
          isLoading={isLoading}
        />
        <BottomSpace marginBottom={60} />
      </RootContainer>
    </>
  );
};

export default EditProfile;
