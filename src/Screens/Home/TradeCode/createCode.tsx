import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import {imgCopy} from '~/Assets/Images';
import Clipboard from '@react-native-community/clipboard';
import {useIsFocused} from '@react-navigation/native';
import {checkNotifications} from 'react-native-permissions';
import db from '~/DB';

const screenWidth = Dimensions.get('window').width * (7 / 10);

interface Props {
  navigation: any;
  route: any;
}

const CreateCode = ({navigation, route}: Props) => {
  const [receivedCode, setReceivedCode] = useState('0000');
  const focused = useIsFocused();
  useEffect(() => {
    const selectedCard = route.params[0];
    console.log('#card# ,', selectedCard);
    if (focused) {
      db.getMyInfo()
        .then((info: any) => {
          return axios.post(
            'https://mat-server-1.herokuapp.com/pin/create',
            {
              userId: info.idOnServer,
              cardId: selectedCard.id,
              fullData: selectedCard.fullData,
            },
            {
              headers: {
                Accept: 'application/json',
                'Content-type': 'application/json;charset=UTF-8',
              },
            },
          );
        })

        .then((res: any) => {
          console.log('## axios response ##', res.data);
          const strPin = String(res.data.pin);
          setReceivedCode(strPin);
        })
        .catch((err) => console.log('## axios err ## ', err));
    }
  }, [focused]);

  const showToast = () => {
    ToastAndroid.show('클립보드에 복사되었습니다', ToastAndroid.SHORT);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
      <View style={s.centerView}>
        <Text
          style={{
            textAlign: 'center',
            color: '#6078EA',
            fontFamily: 'sd_gothic_b',
            fontSize: 18,
            marginTop: 40,
          }}>
          교환번호
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text style={s.codeText}>{receivedCode[0] || ''}</Text>
          <Text style={s.codeText}>{receivedCode[1] || ''}</Text>
          <Text style={s.codeText}>{receivedCode[2] || ''}</Text>
          <Text style={s.codeText}>{receivedCode[3] || ''}</Text>
        </View>

        <Text
          style={{
            fontSize: 14,
            marginTop: 20,
            color: '#7D7D7D',
            textAlign: 'center',
            fontFamily: 'sd_gothic_b',
          }}>
          상대방이 번호를 입력하면 전송이 완료됩니다
        </Text>

        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 50}}
          onPress={() => {
            Clipboard.setString(receivedCode);
            showToast();
          }}>
          <Image source={imgCopy} style={{width: 35, height: 35}} />
          <Text
            style={{
              fontFamily: 'sd_gothic_b',
              fontSize: 15,
              marginTop: 5,
              color: '#7D7D7D',
            }}>
            클립보드에 복사하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  centerView: {
    // width: screenWidth,
    flex: 1,
    // left: '15%',
    // borderWidth: 1
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
  },
  codeText: {
    width: 45,
    fontSize: 50,
    borderBottomWidth: 4,
    borderColor: '#AEAEAE',
    marginHorizontal: 3,
    textAlign: 'center',
    fontFamily: 'sd_gothic_b',
  },
  keyItem: {
    width: screenWidth / 3.5,
    height: screenWidth / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyItemNumber: {
    fontSize: 30,
    fontFamily: 'sd_gothic_m',
    color: '#444444',
    // color: 'blue'
  },
  okContainer: {},
  btnOk: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5 * 0.29,
  },
  btnBack: {
    width: 9.79,
    height: 19.58,
  },
});

export default CreateCode;
