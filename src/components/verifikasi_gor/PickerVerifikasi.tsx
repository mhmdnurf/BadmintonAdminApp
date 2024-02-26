import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface PickerVerifikasi {
  selectedValue: string;
  onValueChange: (itemValue: string, itemIndex: number) => void;
}

const PickerVerifikasi = ({selectedValue, onValueChange}: PickerVerifikasi) => {
  return (
    <>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
          <Picker.Item label="Konfirmasi" value="Konfirmasi" />
          <Picker.Item label="Tolak" value="Tolak" />
        </Picker>
      </View>
      <Pressable style={styles.btnSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </Pressable>
    </>
  );
};

export default PickerVerifikasi;

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 3,
    borderColor: '#EEEDEB',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  btnSubmit: {
    backgroundColor: '#AAC8A7',
    paddingVertical: 15,
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
