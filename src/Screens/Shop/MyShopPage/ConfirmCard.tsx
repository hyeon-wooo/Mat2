import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import TemplateCard from '~/components/TemplateCard';
import db from '~/DB';

const cardWidth = Dimensions.get('screen').width * 0.9;

interface prop {
  navigation: any;
  route: any;
}

const ConfirmCard = ({navigation, route}: prop) => {
  const {cardDataObj} = route.params;
  console.log(cardDataObj.value.valueName);
  return (
    <View style={s.wrap}>
      <Text style={s.description}>명함을 확인해주세요</Text>
      <View style={s.cardContainer}>
        <TemplateCard data={cardDataObj} cardWidth={cardWidth} />
      </View>
      <View style={s.btnContainer}>
        <TouchableOpacity style={s.btnPrev} onPress={() => navigation.goBack()}>
          <Text style={{...s.textBtn, color: '#333333'}}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.btnNext}
          onPress={() => {
            db.saveCard(JSON.stringify(cardDataObj)).then(() =>
              navigation.popToTop(),
            );
          }}>
          <Text style={{...s.textBtn, color: '#FBFBFB'}}>명함 등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 25,
    fontFamily: 'sd_gothic_b',
    marginBottom: 25,
  },
  cardContainer: {
    width: cardWidth,
    height: cardWidth * (9 / 16),
  },
  btnContainer: {
    flexDirection: 'row',
    width: '90%',
    // borderWidth: 1,
    marginTop: 60,
    justifyContent: 'space-evenly',
  },
  btnPrev: {
    width: 80,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#AEAEAE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNext: {
    width: 100,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#6078EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 20,
    fontFamily: 'sd_gothic_m',
  },
});

export default ConfirmCard;
