import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {imgArrowBack} from '~/Assets/Images';
import {useNavigation} from '@react-navigation/native';

interface prop {
  title: string;
}

const PointShopHeader = ({title}: prop) => {
  const navigation = useNavigation();
  return (
    <View style={s.header}>
      <View style={s.headerSection1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={imgArrowBack} style={s.imgBack} />
        </TouchableOpacity>
        <Text style={s.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    height: 55,
    borderBottomWidth: 0.5,
    borderColor: '#7D7D7D',
    alignItems: 'center',
    justifyContent: 'space-between',
    // elevation: 2,
  },
  headerSection1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    marginLeft: 25,
  },
  imgBack: {
    marginLeft: 20,
    width: 16,
    height: 16,
  },
});

export default PointShopHeader;
