import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import PointshopHeader from '~/components/PointShopHeader';
import {mega20000} from '~/Assets/Images';
import Barcode from 'react-native-barcode-builder';

const screenWidth = Dimensions.get('screen').width;

interface detailInfoProp {
  infoTitle: string;
  infoValue: string;
  borderTop?: boolean;
}

const DetailInfo = ({infoTitle, infoValue, borderTop}: detailInfoProp) => {
  return (
    <View style={[s.detailInfoBox, borderTop ? {borderTopWidth: 0.5} : {}]}>
      <Text style={s.detailInfoTitle}>{infoTitle}</Text>
      <Text style={s.detailInfoValue}>{infoValue}</Text>
    </View>
  );
};

interface prop {
  navigation: any;
  route: any;
}

const StoreItem = ({navigation, route}: prop) => {
  const {item} = route.params;
  return (
    <View style={s.wrap}>
      <PointshopHeader title="상품 확인" />
      {/* <View style={{borderWidth: 3, borderColor: 'blue'}}> */}
      <View style={s.imgContainer}>
        <Image
          source={mega20000}
          style={{
            width: screenWidth / 2,
            height: (screenWidth / 2) * 0.595,
            marginVertical: 50,
          }}
        />
      </View>

      <View style={s.infoContainer}>
        <Text style={s.textInfo}>[{item.shopName}]</Text>
        <Text style={s.textInfo}>{item.title}</Text>
      </View>

      <View style={s.barcodeContainer}>
        <Barcode
          value={item.key}
          // value="Hello"
          format="CODE128"
          background="#FBFBFB"
          height={60}
          width={0.8}
        />
      </View>

      <View style={s.detailInfoContainer}>
        <DetailInfo infoTitle="유효기간" infoValue={item.limitTime} borderTop />
        <DetailInfo infoTitle="교환처" infoValue={item.shopName} />
        <DetailInfo infoTitle="사용가능금액" infoValue={item.availableMoney} />
        <DetailInfo infoTitle="쿠폰상태" infoValue={item.status} />
      </View>
      {/* </View> */}
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    justifyContent: 'space-between',
  },
  imgContainer: {
    // height: '30%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    // height: '15%',
    borderBottomWidth: 0.5,
    borderColor: '#CFCFCF',
    width: '90%',
    left: '5%',
    paddingBottom: 15,
  },
  barcodeContainer: {
    height: '20%',
    // borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailInfoContainer: {},
  textInfo: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    marginBottom: 5,
  },
  detailInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    borderBottomWidth: 0.5,
    borderColor: '#CFCFCF',
  },
  detailInfoTitle: {
    fontSize: 17,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    marginLeft: 10,
  },
  detailInfoValue: {
    fontSize: 17,
    fontFamily: 'sd_gothic_m',
    color: '#6078EA',
    marginRight: 10,
  },
});

export default StoreItem;
