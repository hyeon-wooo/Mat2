import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';
import db from '~/DB';
import PointshopHeader from '~/components/PointShopHeader';
import {mega20000, notice, imgArrowDown2} from '~/Assets/Images';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const plusComma = (point: number) => {
  const strPoint = String(point);
  let firstBreakPoint = 0;
  switch (strPoint.length % 3) {
    case 0:
      firstBreakPoint = 3;
      break;
    case 1:
      firstBreakPoint = 1;
      break;
    case 2:
      firstBreakPoint = 2;
      break;
  }
  let section1 = strPoint.substring(0, firstBreakPoint);
  let section2 = strPoint.substring(firstBreakPoint);

  for (let i = 0; i < section2.length; i += 3) {
    section1 += `,${section2.substring(i, i + 3)}`;
  }
  return section1;
};

interface accordionProp {
  data: any;
}
const Accordion = ({data}: accordionProp) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapse style={s.accordionContainer}>
      <CollapseHeader
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onTouchEnd={() => setOpen(!open)}>
        <View style={{marginLeft: 15, width: '80%'}}>
          <Text style={s.accordionTitle}>{data.title}</Text>
        </View>
        <Image
          source={imgArrowDown2}
          style={[
            {width: 20, height: 20 * (6.75 / 13.5), marginRight: 15},
            open ? {transform: [{rotate: '180deg'}]} : {},
          ]}
        />
      </CollapseHeader>
      <CollapseBody style={{backgroundColor: '#EFEFEF'}}>
        <View style={{width: '90%', left: '5%'}}>
          <Text style={s.accordionContent}>{data.content}</Text>
        </View>
      </CollapseBody>
    </Collapse>
  );
};

interface prop {
  navigation: any;
  route: any;
}

const ItemDetail = ({navigation, route}: prop) => {
  const {itemData} = route.params;
  return (
    <View style={s.wrap}>
      <PointshopHeader title={'상품정보'} />
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={s.imgContainer}>
          <Image
            source={mega20000}
            style={{
              width: screenWidth * 0.6,
              height: screenWidth * 0.6 * 0.595,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            borderBottomWidth: 0.5,
            borderColor: '#AEAEAE',
          }}>
          <View style={s.infoContainer}>
            <View>
              <Text style={s.itemTitle}>[{itemData.shopName}]</Text>
              <Text style={s.itemTitle}>{itemData.title}</Text>
            </View>
            <Text style={s.neededPoint}>
              {plusComma(itemData.neededPoint)}pts
            </Text>
          </View>
        </View>
        <Accordion data={{title: '상세 정보', content: itemData.detail}} />
        <Accordion data={{title: '유의사항', content: itemData.caution}} />

        <TouchableOpacity
          style={s.btnBuy}
          onPress={() => navigation.push('BuyItem', {item: itemData})}>
          <Text style={s.textBuy}>구매하기</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 0.35,
    marginVertical: 20,
    width: '90%',
    borderBottomWidth: 0.5,
    borderColor: '#AEAEAE',
    alignSelf: 'center',
  },
  infoContainer: {
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  itemTitle: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
  },
  neededPoint: {
    color: '#6078EA',
    fontSize: 25,
    fontFamily: 'sd_gothic_b',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  btnBuy: {
    width: '90%',
    left: '5%',
    backgroundColor: '#6078EA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 40,
    marginVertical: 30,
  },
  textBuy: {
    color: '#FBFBFB',
    fontFamily: 'sd_gothic_m',
    fontSize: 17,
  },

  /* ACCORDION */

  accordionContainer: {
    borderColor: '#cccccc',
    borderBottomWidth: 1,
  },
  accordionTitle: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
  },
  accordionContent: {
    fontSize: 15,
    fontFamily: 'sd_gothic_m',
    color: '#444444',
    marginVertical: 20,
  },
});

export default ItemDetail;
