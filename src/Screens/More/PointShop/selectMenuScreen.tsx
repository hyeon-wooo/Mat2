import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  notice,
  personBlack,
  point,
  chargePoint,
  imgInfo,
  imgArrowBack,
} from '~/Assets/Images';

interface prop {
  navigation: any;
}

const SelectMenu = ({navigation}: prop) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
      <View style={s.header}>
        <View style={s.headerSection1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={imgArrowBack} style={s.imgBack} />
          </TouchableOpacity>
          <Text style={s.headerTitle}>포인트샵</Text>
        </View>
        <TouchableOpacity
          style={s.storeBtn}
          onPress={() => {
            navigation.push('Store');
          }}>
          <Text style={s.storeText}>보관함</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={s.row}
        onPress={() => navigation.push('SelectItem', {menu: 'cafe'})}>
        <Text style={s.rowTitle}>카페 / 디저트</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.row}>
        <Text style={s.rowTitle}>편의점</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.row}>
        <Text style={s.rowTitle}>패스트푸드</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.row}>
        <Text style={s.rowTitle}>식사류</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.row}>
        <Text style={s.rowTitle}>상품권</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.row}>
        <Text style={s.rowTitle}>기타</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  myInfo: {
    height: 130,
    borderWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 18,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    marginLeft: 20,
  },
  section2: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  section1: {
    width: '50%',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    height: 55,
    borderBottomWidth: 0.5,
    borderColor: '#AEAEAE',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  storeBtn: {
    // alignItems: 'center',
    // justifyContent: 'center'
    marginRight: 20,
  },
  storeText: {
    fontSize: 18,
    fontFamily: 'sd_gothic_b',
    color: '#6078EA',
  },
});

export default SelectMenu;
