import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputField from '../InputField';

interface Data {
  fullName: string;
  email: string;
}
interface ProfileField {
  data: Data;
}

const ProfileField = ({data}: ProfileField) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <InputField value={data.fullName} editable={false} />
        <Text style={styles.label}>Email</Text>
        <InputField value={data.email} editable={false} />
      </View>
    </>
  );
};

export default ProfileField;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: 'grey',
    fontFamily: 'Poppins Regular',
  },
});
