import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import TemplateCard from '~/components/TemplateCard';
import {simple, emotion, character, flower, moreBlack} from '~/Assets/Images';

const cardWidth = Dimensions.get('screen').width * 0.9;

interface prop {
  navigation: any;
  route: any;
}

const TemDetail = ({navigation, route}: prop) => {
  const {tem} = route.params;
  let categoryName;
  let categoryImg;
  let categoryImgStyle = [s.categoryImg];
  switch (tem.category) {
    case 'simple':
      categoryName = '심플';
      categoryImg = simple;
      break;
    case 'emotion':
      categoryName = '감성';
      categoryImg = emotion;
      break;
    case 'fancy':
      categoryName = '화려함';
      categoryImg = flower;
      break;
    case 'character':
      categoryName = '캐릭터';
      categoryImg = character;
      break;

    default:
      categoryName = '기타';
      categoryImg = moreBlack;
      break;
  }
  return (
    <View style={s.wrap}>
      <View style={s.temContainer}>
        <TemplateCard
          data={JSON.parse(tem.fullData)}
          cardWidth={cardWidth}
          borderRadius
          showDefaultLogo
        />
      </View>
      <View
        style={{width: '90%', height: '45%', justifyContent: 'space-between'}}>
        <View>
          <Text style={s.categoryTitle}>카테고리</Text>
          <View style={s.category}>
            <Image
              source={categoryImg}
              style={[
                s.categoryImg,
                categoryName === '기타' ? {height: 20 * (2.9 / 14.66)} : {},
              ]}
            />
            <Text style={s.categoryText}>{categoryName}</Text>
          </View>
        </View>
        {/* <View style={{width: '100%', alignItems: 'flex-end'}}> */}
        <TouchableOpacity
          style={s.btnMake}
          onPress={() => navigation.push('MakeByTem', {tem})}>
          <Text style={s.textMake}>제작하기</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    backgroundColor: '#FBFBFB',
    flex: 1,
    alignItems: 'center',
  },
  temContainer: {
    marginVertical: 20,
    width: cardWidth,
    height: cardWidth * (9 / 16),
  },
  category: {
    // width: 100,
    // height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // justifyContent: 'center',
    // borderRadius: 5,
  },
  categoryTitle: {
    fontSize: 23,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    marginBottom: 10,
  },
  categoryImg: {
    marginLeft: 25,
    marginRight: 15,
    width: 20,
    height: 20,
  },
  categoryText: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
  },
  btnMake: {
    alignSelf: 'flex-end',
    width: 100,
    height: 45,
    backgroundColor: '#6078EA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  textMake: {
    color: '#FBFBFB',
    fontSize: 20,
    fontFamily: 'sd_gothic_m',
  },
});
export default TemDetail;
