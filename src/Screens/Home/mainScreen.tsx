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
  BackHandler,
  ToastAndroid,
} from 'react-native';
import Swiper from 'react-native-swiper';
import db from '~/DB';
import Card from '~/components/Card';
import MakeCard from '~/components/MakeCard';
import {imgCreatePin, imgInputPin, matLogo} from '~/Assets/Images';
import SignIn from '~/Screens/SignInScreen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TemplateCard from '~/components/TemplateCard';
import SQLite from 'react-native-sqlite-storage';

const deviceHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Body = S.View`
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

const getCards = async (setCards: any) => {
  // SQLite.enablePromise(true);
  const db = SQLite.openDatabase({
    name: 'mat.db',
    location: 'Library',
    createFromLocation: 1,
  });

  let data = new Array();
  (await db).transaction(
    (tx) => {
      tx.executeSql(`select * from myCard`, [], (tx, result) => {
        console.log('#transactio : SELECT myCard# ', result.rows.length);

        for (let i = 0; i < result.rows.length; i++) {
          const item = result.rows.item(i);

          data.push({
            id: item.id,
            fullData: item.fullData + item.fullData2 + item.fullData3,
          });
        }
        setCards(data.map((v: any) => JSON.parse(v.fullData)));
      });
    },
    (err) => {
      console.log(err);
    },
  );

  return data;
};

const Cards = (cardData: any, navi: any) => {
  let cards = cardData.map((data: any, key: any) => (
    <View key={key}>
      <Text style={styles.nameOfCard}>{data.value.cardName || ''}</Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          left: '5%',
          width: screenWidth * 0.9,
          height: screenWidth * 0.9 * (9 / 16),
          borderRadius: 5,
          elevation: 5,
        }}
        onPressIn={() => navi('MyCardDetail', {cardData: data})}>
        <TemplateCard cardWidth={screenWidth * 0.9} data={data} borderRadius />
      </TouchableOpacity>
    </View>
  ));
  cards.push(
    <View key={100}>
      <Text style={styles.nameOfCard}></Text>
      <View style={{alignItems: 'center'}}>
        <MakeCard parentWidth={screenWidth} />
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
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const focused = useIsFocused();
  let backStack = 0;

  useEffect(() => {
    const backAction = () => {
      console.log(backStack);
      if (backStack === 0) {
        backStack += 1;
        console.log(backStack);
        ToastAndroid.show('한번 더 누르면 종료됩니다', ToastAndroid.SHORT);
        setTimeout(() => backStack == 0, 1000);
      } else BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (focused) {
      console.log('FOCUSED');
      db.getMyInfo().then((info: any) => {
        console.log('## info ##', info);
        if (info.idOnServer) {
          setIsLoggedIn(true);
        } else setIsLoggedIn(false);
        setIsLoading(false);
      });
    }

    if (focused && isLoggedIn) {
      getCards(setCardData);
      //   .then((data: any) => {
      //   console.log('## data ## ', data);
      //   setCardData(data.map((v: any) => JSON.parse(v.fullData)));
      // });
    }
  }, [focused, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.setOptions({tabBarVisible: true});
    } else {
      navigation.setOptions({tabBarVisible: false});
    }
  }, [isLoggedIn]);

  // useEffect(() => {
  //   if (isLoading) {
  //     navigation.setOptions({tabBarVisible: false});
  //   } else {
  //     navigation.setOptions({tabBarVisible: true});
  //   }
  // }, [isLoading]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      {isLoading && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: deviceHeight,
          }}>
          {/* <Image /> */}
          <Image source={matLogo} style={{width: 260, height: 164}} />
        </View>
      )}
      {!isLoggedIn ? (
        <KeyboardAwareScrollView
          style={{width: '100%', height: '100%'}}
          keyboardShouldPersistTaps="always">
          <View>
            <SignIn navigation={navigation} setIsLoggedIn={setIsLoggedIn} />
          </View>
        </KeyboardAwareScrollView>
      ) : (
        <Body>
          <View style={{width: '100%', height: '100%'}}>
            <EmptyView1 />
            <SwiperContainer style={styles.swiperContainer}>
              <Swiper key={cardData.length}>
                {Cards(cardData, navigation.push)}
              </Swiper>
            </SwiperContainer>
            <EmptyView2 />

            <TradeContainer>
              <Text style={styles.myText}>교환하기</Text>
              <TradeButtonContainer>
                <TouchableOpacity
                  style={styles.box}
                  onPress={() => {
                    navigation.push('SelectCardToSend');
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
                    navigation.push('EnterCode');
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
          </View>
        </Body>
      )}
    </View>
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
    width: screenWidth * (8 / 10),
    left: screenWidth / 10,
    marginBottom: 7,
  },
});

export default mainScreen;
