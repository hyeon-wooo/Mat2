import React, {useEffect, useState} from 'react';
import { useIsFocused } from '@react-navigation/native';
import S from 'styled-components/native';
import {Dimensions, StyleSheet, View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import ImagePicker from 'react-native-image-picker';

import Card from '~/components/Card';
import MakeCard from '~/components/MakeCard';
import {btnAdd, imgQr, imgPin} from '~/Assets/Images';

import SQLite from 'react-native-sqlite-storage';

// db.transaction((tx) => {
//   tx.executeSql(
//     `CREATE TABLE IF NOT EXISTS myCard(
//       id integer primary key autoincrement,
//       valueName varchar(25),
//       valueCompany varchar(25),
//       value varchar(25),
//       valueName varchar(25),
//       valueName varchar(25),
//       valueName varchar(25),
//       valueName varchar(25),
//       valueName varchar(25),
//       valueName varchar(25),`

//   )
// })

const width = Dimensions.get('window').width;

const Body = S.View`
    flex: 1;
    width: 100%;
    height: 100%;
    font-family: 'sd_gothic_b';
    background-color: 'rgb(255, 255, 255)';
`;
const EmptyView1 = S.View`
  flex: 0.6;
`;
const EmptyView2 = S.View`
  flex: 0.2;
`;
const SwiperContainer = S.View`
  flex: 1.2;
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
const BtnBox = S.View`
  width: 50%;
  align-items: center;
`;

const datas = [
  {
    backgroundStyle: {backgroundColor: '#555'},
    nameData: {text: 'hyeonwoo', style: {color: 'blue', left: '10%'}},
    companyData: {text: 'sungkyul', style: {color: 'red', left: '20%'}},
    positionData: {text: 'student', style: {color: 'red', left: '20%'}},
    emailData: {text: 'a@a.a', style: {color: 'red', left: '20%'}},
    phoneData: {text: '010-1234-1234', style: {color: 'red', left: '20%'}},
    faxData: {text: 'faxfax', style: {color: 'red', left: '20%'}},
    comAddrData: {text: 'pyeongtaek', style: {color: 'red', left: '20%'}},
    comCallData: {text: '031-657-3452', style: {color: 'red', left: '20%'}},
  },
  {
    backgroundStyle: {backgroundColor: '#555'},
    nameData: {text: 'hyeonwoo', style: {color: 'blue', left: '10%'}},
    companyData: {text: 'sungkyul', style: {color: 'red', left: '20%'}},
    positionData: {text: 'student', style: {color: 'red', left: '20%'}},
    emailData: {text: 'a@a.a', style: {color: 'red', left: '20%'}},
    phoneData: {text: '010-1234-1234', style: {color: 'red', left: '20%'}},
    faxData: {text: 'faxfax', style: {color: 'red', left: '20%'}},
    comAddrData: {text: 'pyeongtaek', style: {color: 'red', left: '20%'}},
    comCallData: {text: '031-657-3452', style: {color: 'red', left: '20%'}},
  },
  {
    backgroundStyle: {backgroundColor: '#555'},
    nameData: {text: 'hyeonwoo', style: {color: 'blue', left: '10%'}},
    companyData: {text: 'sungkyul', style: {color: 'red', left: '20%'}},
    positionData: {text: 'student', style: {color: 'red', left: '20%'}},
    emailData: {text: 'a@a.a', style: {color: 'red', left: '20%'}},
    phoneData: {text: '010-1234-1234', style: {color: 'red', left: '20%'}},
    faxData: {text: 'faxfax', style: {color: 'red', left: '20%'}},
    comAddrData: {text: 'pyeongtaek', style: {color: 'red', left: '20%'}},
    comCallData: {text: '031-657-3452', style: {color: 'red', left: '20%'}},
  },
];

const data = {
  background: {backgroundColor: '#555'},
  style: {
    name: {color: 'blue', left: '10%'},
    email: {color: 'blue', left: '10%'},
    phone: {color: 'blue', left: '10%'},
    fax: {color: 'blue', left: '10%'},
    company: {color: 'blue', left: '10%'},
    position: {color: 'blue', left: '10%'},
    team: {color: 'blue', left: '10%'},
    comAddr: {color: 'blue', left: '10%'},
    comNum: {color: 'blue', left: '10%'},
  },
  valueName: 'hyeonwoo',
  valueEmail: 'a@a.a',
  valuePhone: '01012341234',
  valueFax: 'faxfax',
  valueCompany: 'sungkyul',
  valuePosition: 'student',
  valueTeam: 'miso',
  valueComAddr: 'Anyang',
  valueComNum: '031-467-1234',
};

const getMyCards = () => new Promise((resolve, reject)=>{
  const db = SQLite.openDatabase(
    {
      name: 'mat.db',
      location: 'Library',
      createFromLocation: 1,
    },
    () => {
      console.log('open success');
    },
    (error) => {
      console.log('open fail', error);
    },
  );

  let temp = new Array()
  db.transaction(
    (tx) => {
      tx.executeSql('select * from myCard', [], (tx, result) => {
        console.log('#transaction success# ', result.rows);
        for (let i = 0; i < result.rows.length; i++) {
          const item = result.rows.item(i).fullData;
          temp.push(JSON.parse(item));
        }
        resolve(temp)
      });
    },
    (err) => {console.log(err);reject(err)}
  );
})
  

const Cards = (cardData:any) => {
  let cards = cardData.map((data:object, key:any) => (
    <View key={key}>
      <Text style={styles.nameOfCard}>명함 이름이 들어갈 자리</Text>
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
      <MakeCard parentWidth={width} />
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


  // useEffect(() => {
  //   // setCardData(getMyCards())
  //   getMyCards().then((data:any) => setCardData(data))
  // }, [])
  
  useEffect(() => {
    getMyCards().then((data:any) => setCardData(data))
  }, [focused])

  return (
    <Body>
      <EmptyView1 />
      <SwiperContainer style={styles.swiperContainer}>
        <Swiper key={cardData.length}>{Cards(cardData)}</Swiper>
        {/* <Swiper>
          {cardData.map((data:object, key:any) => (
    <View key={key}>
      <Text style={styles.nameOfCard}>명함 이름이 들어갈 자리</Text>
      <View style={{alignItems: 'center'}}>

      <Card parentWidth={width} data={data} />
      </View>
    </View>
  )).push( (<View key={100}>
    <MakeCard parentWidth={width} />
  </View>) )}
  
        </Swiper> */}
      </SwiperContainer>
      <EmptyView2 />
      <TradeContainer>
        <Text style={styles.myText}>교환하기</Text>
        <TradeButtonContainer>
          <BtnBox
            onTouchEnd={() => {
              navigation.navigate('TradeCode');
            }}>
            <Image source={imgPin} style={{width: 100, height: 100}} />
            <Text style={{fontFamily: 'sd_gothic_m', fontSize: 20}}>
              교환번호
            </Text>
          </BtnBox>
          <BtnBox
            onTouchEnd={() => {
              navigation.navigate('TradeQR');
            }}>
            <Image source={imgQr} style={{width: 100, height: 100}} />
            <Text style={{fontFamily: 'sd_gothic_m', fontSize: 20}}>
              QR코드
            </Text>
          </BtnBox>
        </TradeButtonContainer>
      </TradeContainer>
    </Body>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    // height: '50%',
    alignItems: 'center'
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
