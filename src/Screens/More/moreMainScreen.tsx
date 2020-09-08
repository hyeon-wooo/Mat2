import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  notice,
  personBlack,
  point,
  chargePoint,
  imgInfo,
} from '~/Assets/Images';
import db from '~/DB';

interface prop {
  navigation: any;
}

const MoreMainScreen = ({navigation}: prop) => {
  const [info, setInfo] = useState(new Object());

  useEffect(() => {
    db.getMyInfo()
      .then((info: any) => setInfo(info))
      .catch((err: any) => console.log(err));
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
      <View style={s.myInfo}>
        <View style={s.section1}>
          <Text
            style={{
              marginLeft: 15,
              fontFamily: 'sd_gothic_b',
              fontSize: 22,
              color: '#444444',
            }}>
            {info.myName}
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 14,
              fontFamily: 'sd_gothic_m',
              color: '#AEAEAE',
            }}>
            {info.myId}
          </Text>
        </View>
        <View style={s.section2}>
          <Text
            style={{color: '#7D7D7D', fontFamily: 'sd_gothic_m', fontSize: 15}}>
            보유포인트 :{' '}
          </Text>
          <Text
            style={{
              color: '#6078EA',
              fontFamily: 'sd_gothic_m',
              fontSize: 15,
              marginRight: 15,
            }}>
            {info.myPoint} pts
          </Text>
        </View>
      </View>
      <TouchableOpacity style={s.row} onPress={() => navigation.push('Notice')}>
        <Image source={notice} style={s.rowImg} />
        <Text style={s.rowTitle}>공지사항</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.row}
        onPress={() => {
          navigation.push('AuthMain');
        }}>
        <Image source={personBlack} style={s.rowImg} />
        <Text style={s.rowTitle}>계정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.row}
        onPress={() => navigation.push('SelectMenu')}>
        <Image source={point} style={s.rowImg} />
        <Text style={s.rowTitle}>포인트샵</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.row}>
        <Image source={chargePoint} style={s.rowImg} />
        <Text style={s.rowTitle}>포인트 충전하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...s.row}}>
        <Image source={imgInfo} style={s.rowImg} />
        <View>
          <Text style={s.rowTitle}>버전 정보</Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'sd_gothic_m',
              color: '#AEAEAE',
            }}>
            {'v 0.0.1'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  myInfo: {
    height: 130,
    borderWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
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
});

export default MoreMainScreen;
