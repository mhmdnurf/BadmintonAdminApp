import React from 'react';
import Header from '../components/Header';
import RootContainer from '../components/RootContainer';
import BottomSpace from '../components/BottomSpace';
import InfoField from '../components/info_gor/InfoField';
import ImageProfile from '../components/profile/ImageProfile';
import firestore from '@react-native-firebase/firestore';
interface InfoGor {
  route: any;
}

interface Data {
  namaGOR: string;
  jumlahLapangan: number;
  fotoUser: string;
  namaLengkap: string;
  jenisKelamin: string;
  email: string;
  nomor: string;
  alamat: string;
  waktuBuka: string;
  waktuTutup: string;
  fotoGor: string;
  suratIzin: string;
  status: string;
}

const InfoGor = ({route}: InfoGor) => {
  const [data, setData] = React.useState<Data>();

  const {id} = route.params;

  const fetchInfoGOR = React.useCallback(() => {
    try {
      const query = firestore().collection('users').doc(id).get();
      query.then(doc => {
        const fetchedData = doc.data();
        if (fetchedData) {
          setData(fetchedData as Data);
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  }, [id]);

  React.useEffect(() => {
    fetchInfoGOR();
  }, [fetchInfoGOR]);
  return (
    <>
      <RootContainer backgroundColor="white">
        <Header title={data?.namaGOR} />
        <ImageProfile uri={data?.fotoUser} />
        <InfoField data={data} />
        <BottomSpace marginBottom={40} />
      </RootContainer>
    </>
  );
};

export default InfoGor;
