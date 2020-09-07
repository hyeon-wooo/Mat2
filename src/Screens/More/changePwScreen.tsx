import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Axios from 'axios';
import db from '~/DB';

const screenWidth = Dimensions.get('screen').width;

interface prop {
  navigation: any;
}

const ChangePassword = ({navigation}: prop) => {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const [oldPw, setOldPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  return (
    <KeyboardAwareScrollView
      style={{width: '100%', height: '100%'}}
      keyboardShouldPersistTaps="always"
      contentContainerStyle={{height: '100%', backgroundColor: '#FBFBFB'}}>
      <Text style={s.contentDescription}>변경할 비밀번호를 입력해주세요</Text>
      <View style={s.inputConainter}>
        <TextInput
          style={[
            s.input,
            selected1
              ? {borderColor: '#6078EA', borderBottomWidth: 1.5}
              : {borderColor: '#7D7D7D', borderBottomWidth: 0.5},
          ]}
          placeholder="기존 비밀번호"
          secureTextEntry={true}
          onChangeText={(text: string) => setOldPw(text)}
          onFocus={() => setSelected1(true)}
          onEndEditing={() => setSelected1(false)}
        />
        <TextInput
          style={[
            s.input,
            selected2
              ? {borderColor: '#6078EA', borderBottomWidth: 1.5}
              : {borderColor: '#7D7D7D', borderBottomWidth: 0.5},
          ]}
          placeholder="새로운 비밀번호"
          secureTextEntry={true}
          onChangeText={(text: string) => setNewPw(text)}
          onFocus={() => setSelected2(true)}
          onEndEditing={() => setSelected2(false)}
        />
        <TextInput
          style={[
            s.input,
            selected3
              ? {borderColor: '#6078EA', borderBottomWidth: 1.5}
              : {borderColor: '#7D7D7D', borderBottomWidth: 0.5},
          ]}
          placeholder="비밀번호 확인"
          secureTextEntry={true}
          onChangeText={(text: string) => setConfirmPw(text)}
          onFocus={() => setSelected3(true)}
          onEndEditing={() => setSelected3(false)}
        />
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={s.btnOk}
            onPress={() => {
              db.getMyInfo()
                .then(async (info: any) => {
                  if (info.idOnServer)
                    return Axios.post(
                      `https://mat-server-1.herokuapp.com/user/changePassword`,
                      {
                        idOnServer: info.idOnServer,
                        oldPw,
                        newPw,
                      },
                    );
                  else return false;
                })
                .then((res: any) => {
                  if (!res) return 0;
                  if (res.data.code === 0) {
                    ToastAndroid.show(
                      '비밀번호가 변경되었습니다',
                      ToastAndroid.SHORT,
                    );
                    navigation.goBack();
                  } else {
                    ToastAndroid.show(
                      '비밀번호를 확인해주세요',
                      ToastAndroid.SHORT,
                    );
                  }
                });
              // 서버에 idOnServer와 oldPw 보내서 유효성 검증
              // -> newPw와 confirmPW 일치여부 검증
              // -> 이후 idOnServer와 newPw 보내서 비밀번호 변경
              // -> 작업 완료 시 goBack(), 문제 발생 시 Toast
            }}>
            <Text style={s.textOk}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const s = StyleSheet.create({
  inputConainter: {
    width: screenWidth * 0.85,
    alignSelf: 'center',
  },
  input: {
    height: 42,
    fontSize: 18,
    marginBottom: 15,
    fontFamily: 'sd_gothic_b',
    letterSpacing: 2,
    color: '#444444',
    // padding: 0,
  },
  btnOk: {
    width: 80,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6078EA',
    borderRadius: 8,
  },
  textOk: {
    fontSize: 18,
    color: '#EAEAEA',
    fontFamily: 'sd_gothic_b',
  },
  contentDescription: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    marginLeft: 20,
    marginVertical: 10,
    color: '#444444',
  },
});

export default ChangePassword;
