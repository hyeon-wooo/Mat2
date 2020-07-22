import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface Props {
  placeholder: string;
  isNeeded: boolean;
  name: string;
  onEndEditing: (text: any, name: string) => void;
}

const TextInputS = ({placeholder, isNeeded, name, onEndEditing}: Props) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.needItem}>{isNeeded ? '*' : ''}</Text>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.textInput,
          focused
            ? {borderBottomColor: '#6078EA'}
            : {borderBottomColor: '#444444'},
        ]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onEndEditing={(e) => onEndEditing(e.nativeEvent.text, name)}
      />
      <View style={{width: '5%'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    borderBottomWidth: 2,
    fontFamily: 'sd_gothic_m',
  },
  needItem: {
    color: 'red',
    width: '5%',
    textAlign: 'center',
  },
});

export default TextInputS;
