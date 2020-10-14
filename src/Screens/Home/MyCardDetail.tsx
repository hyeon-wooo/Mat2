import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import TemplateCard from '~/components/TemplateCard';

const screenWidth = Dimensions.get('screen').width;
const cardWidth = screenWidth * 0.4;
const cardHeight = cardWidth * (9 / 16);

interface prop {
  navigation: any;
  route: any;
}

const MyCardDetail = ({navigation, route}: prop) => {
  const {cardData} = route.params;
  return (
    <View style={s.wrap}>
      <View style={s.cardContainer}>
        <TemplateCard data={cardData} cardWidth={cardWidth} />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
  },
  cardContainer: {
    width: cardWidth,
    height: cardHeight,
    borderWidth: 5,
  },
});

export default MyCardDetail;
