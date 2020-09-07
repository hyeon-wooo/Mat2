import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {imgArrowBack, logoMegacoffee} from '~/Assets/Images';
import PointShopHeader from '~/components/PointShopHeader';

interface prop {
  navigation: any;
  route: any;
}

const SelectItem = ({navigation, route}: prop) => {
  console.log(`## select item screen ## ${route.params.menu}`);
  let title = '';
  switch (route.params.menu) {
    case 'cafe':
      title = '커피 / 디저트';
      break;
  }

  const loadScreenWithItems = (shopName: string) => {
    navigation.push('ItemList', {shopName});
    // ItemList 스크린 아직 안만듬
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
      <PointShopHeader title={title} />

      <TouchableOpacity
        style={s.row}
        onPress={() => loadScreenWithItems('메가커피')}>
        <Image source={logoMegacoffee} style={s.rowImg} />
        <Text style={s.rowTitle}>메가커피</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowImg: {
    width: 20,
    height: 20,
    marginHorizontal: 15,
  },
  rowTitle: {
    fontSize: 18,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    // marginLeft: 20,
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

export default SelectItem;
