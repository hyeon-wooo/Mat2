import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import S from 'styled-components/native';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import db from '~/DB';
import Card from '~/components/Card';
import MakeCard from '~/components/MakeCard';
import {imgCreatePin, imgInputPin} from '~/Assets/Images';

const width = Dimensions.get('window').width;

const Body = S.View`
    flex: 1;
    width: 100%;
    height: 100%;
    font-family: 'sd_gothic_b';
    background-color: 'rgb(255, 255, 255)';
`;
const EmptyView1 = S.View`
  flex: 0.4;
`;
const EmptyView2 = S.View`
  flex: 0.2;
`;
const SwiperContainer = S.View`
  flex: 1.4;
`;
const TradeContainer = S.View`
  flex: 1;
  width: 90%;
  left: 5%;
`;
const TradeButtonContainer = S.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const BtnBox = S.TouchableOpacity`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: 'space-evenly';
  border: 1px solid black;
`;

const Cards = (cardData: any) => {
  let cards = cardData.map((data: any, key: any) => (
    <View key={key}>
      <Text style={styles.nameOfCard}>{data.value.cardName || ''}</Text>
      <View style={{alignItems: 'center'}}>
        <Card parentWidth={width} data={data} />
      </View>
    </View>
  ));
  // cards.push(
  //   <View key={100}>
  //     <Text style={styles.nameOfCard}>명함 이름</Text>
  //     <Card parentWidth={width} data={data} />
  //   </View>,
  // );
  cards.push(
    <View key={100}>
      <Text style={styles.nameOfCard}></Text>
      <View style={{alignItems: 'center'}}>
        <MakeCard parentWidth={width} />
      </View>
    </View>,
  );
  return cards;
};

interface Props {
  route: any;
  navigation: any;
}

const mainScreen = ({route, navigation}: Props) => {
  const [cardData, setCardData] = useState([]);
  const focused = useIsFocused();

  useEffect(() => {
    if (focused) {
      db.getMyCards().then((data: any) =>
        setCardData(data.map((v: any) => JSON.parse(v.fullData))),
      );
    }
  }, [focused]);

  return (
    <Body>
      <EmptyView1 />
      <SwiperContainer style={styles.swiperContainer}>
        <Swiper key={cardData.length}>{Cards(cardData)}</Swiper>
      </SwiperContainer>
      <EmptyView2 />

      <TradeContainer>
        <Text style={styles.myText}>교환하기</Text>
        <TradeButtonContainer>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('SelectCardToSend');
            }}>
            <Image
              source={imgCreatePin}
              style={{width: 50 * 2.15, height: 50}}
            />
            <Text style={{fontFamily: 'sd_gothic_m', fontSize: 20}}>
              교환번호 생성
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('EnterCode');
            }}>
            <Image
              source={imgInputPin}
              style={{width: 50 * 1.95, height: 50}}
            />
            <Text style={{fontFamily: 'sd_gothic_m', fontSize: 20}}>
              교환번호 입력
            </Text>
          </TouchableOpacity>
        </TradeButtonContainer>
      </TradeContainer>
    </Body>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    // height: '50%',
    alignItems: 'center',
  },
  box: {
    width: '50%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
  },
  myText: {
    fontSize: 24,
    fontFamily: 'sd_gothic_b',
    borderBottomColor: '#777',
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
  nameOfCard: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    width: width * (8 / 10),
    left: width / 10,
    marginBottom: 7,
  },
});

export default mainScreen;
