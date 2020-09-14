import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {imgSearch} from '~/Assets/Images';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  onPressOut?: any;
}

const WalletHeader = ({onPressOut}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>명함첩</Text>
      <TouchableOpacity onPressOut={onPressOut}>
        <Image source={imgSearch} style={styles.btnSearch} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
  },
  title: {
    // marginLeft: 15,
    // fontSize: 20,
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    marginLeft: 25,
  },
  btnSearch: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
});

export default WalletHeader;
