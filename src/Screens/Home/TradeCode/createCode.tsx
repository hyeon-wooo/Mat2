import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import { imgCopy } from '~/Assets/Images';
import Clipboard from '@react-native-community/clipboard';
import { useIsFocused } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width * (7/10)


interface Props {}

const CreateCode = ({}: Props) => {
  const [receivedCode, setReceivedCode] = useState('1234');
  const focused = useIsFocused();
  useEffect(() => {
    if (focused) {
      // 서버에 교환번호 요청 --then--> setReceivedCode(응답받은 교환번호)
    }
  }, [focused])

  const showToast = () => {
    ToastAndroid.show('클립보드에 복사되었습니다', ToastAndroid.SHORT)
  }

  return (
    <View style={{flex:1, backgroundColor: '#FBFBFB'}}>
      <View style={s.centerView}>
        <Text style={{textAlign: 'center', color: '#6078EA', fontFamily: 'sd_gothic_b', fontSize: 18, marginTop: 40}}>교환번호</Text>
        <View style={{flexDirection: 'row', justifyContent:'center', marginTop: 30}}>
          <Text style={s.codeText}>{receivedCode[0] || ''}</Text>
          <Text style={s.codeText}>{receivedCode[1] || ''}</Text>
          <Text style={s.codeText}>{receivedCode[2] || ''}</Text>
          <Text style={s.codeText}>{receivedCode[3] || ''}</Text>
        </View>

        <Text style={{fontSize: 14, marginTop: 20, color: '#7D7D7D', textAlign: 'center', fontFamily: 'sd_gothic_b'}}>상대방이 번호를 입력하면 전송이 완료됩니다</Text>

        <TouchableOpacity style={{alignItems: 'center', marginTop: 50}}
        onPress={() => {
          Clipboard.setString(receivedCode);
          showToast()
        }}>
          <Image source={imgCopy} style={{width: 35, height: 35}} />
          <Text style={{fontFamily: 'sd_gothic_b', fontSize: 15, marginTop: 5, color: '#7D7D7D'}}>클립보드에 복사하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

};

const s = StyleSheet.create({
  centerView: {
    // width: screenWidth,
    flex: 1,
    // left: '15%',
    // borderWidth: 1
    alignItems: 'center',
    backgroundColor: '#FBFBFB'
  },
  codeText: {
    width: 45,
    fontSize: 50,
    borderBottomWidth: 4,
    borderColor: '#AEAEAE',
    marginHorizontal: 3,
    textAlign: 'center',
    fontFamily: 'sd_gothic_b'
  },
  keyItem: {
    width: screenWidth/3.5,
    height: screenWidth/4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyItemNumber: {
    fontSize: 30,
    fontFamily: 'sd_gothic_m',
    color: '#444444'
    // color: 'blue'
  },
  okContainer: {
    
  },
  btnOk: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5 * 0.29
  },
  btnBack: {
    width: 9.79,
    height: 19.58
  }
})

export default CreateCode;
