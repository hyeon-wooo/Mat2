import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Axios from 'axios';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

interface prop {
  navigation: any;
}
const SignUpScreen = ({navigation}: prop) => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);

  return (
    <KeyboardAwareScrollView
      style={{width: '100%', height: '100%'}}
      keyboardShouldPersistTaps="always">
      <View style={s.wrap}>
        <View style={s.section1}>
          <View style={s.titleContainer}>
            <Text style={s.sectionTitle}>회원 정보</Text>
          </View>
          <TextInput
            style={[
              s.input,
              selected1
                ? {borderColor: '#6078EA', borderBottomWidth: 1.5}
                : {borderColor: '#7D7D7D', borderBottomWidth: 0.5},
            ]}
            placeholder="이름"
            onChangeText={(text: string) => setName(text)}
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
            placeholder="생년월일 6자 (ex. 970131)"
            onChangeText={(text: string) => setBirth(text)}
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
            placeholder="전화번호"
            onChangeText={(text: string) => setPhone(text)}
            onFocus={() => setSelected3(true)}
            onEndEditing={() => setSelected3(false)}
          />
        </View>
        <View style={s.section2}>
          <View style={s.titleContainer}>
            <Text style={s.sectionTitle}>ID {'&'} PW</Text>
          </View>
          <TextInput
            style={[
              s.input,
              selected4
                ? {borderColor: '#6078EA', borderBottomWidth: 1.5}
                : {borderColor: '#7D7D7D', borderBottomWidth: 0.5},
            ]}
            placeholder="ID"
            onChangeText={(text: string) => setUserId(text)}
            onFocus={() => setSelected4(true)}
            onEndEditing={() => setSelected4(false)}
          />
          <TextInput
            style={[
              s.input,
              selected5
                ? {borderColor: '#6078EA', borderBottomWidth: 1.5}
                : {borderColor: '#7D7D7D', borderBottomWidth: 0.5},
            ]}
            placeholder="비밀번호"
            secureTextEntry={true}
            onChangeText={(text: string) => setPw(text)}
            onFocus={() => setSelected5(true)}
            onEndEditing={() => setSelected5(false)}
          />
          <TextInput
            style={[
              s.input,
              selected6
                ? {borderColor: '#6078EA', borderBottomWidth: 1.5}
                : {borderColor: '#7D7D7D', borderBottomWidth: 0.5},
            ]}
            placeholder="비밀번호 확인"
            secureTextEntry={true}
            onChangeText={(text: string) => setConfirmPw(text)}
            onFocus={() => setSelected6(true)}
            onEndEditing={() => setSelected6(false)}
          />
        </View>
        <View style={s.section3}>
          <TouchableOpacity
            style={s.btnFinish}
            onPress={() => {
              if (name.length === 0) {
                ToastAndroid.show('이름을 입력해주세요', ToastAndroid.SHORT);
              } else if (birth.length !== 6) {
                ToastAndroid.show(
                  '생년월일을 정확하게 입력해주세요',
                  ToastAndroid.SHORT,
                );
              } else if (phone.length !== 11) {
                ToastAndroid.show(
                  '연락처를 정확하게 입력해주세요',
                  ToastAndroid.SHORT,
                );
              } else if (userId.length === 0) {
                ToastAndroid.show('아이디를 입력해주세요', ToastAndroid.SHORT);
              } else if (pw !== confirmPw) {
                ToastAndroid.show(
                  '비밀번호가 일치하지 않습니다',
                  ToastAndroid.SHORT,
                );
              } else {
                Axios.post('https://mat-server-1.herokuapp.com/user/signUp', {
                  userId,
                  birth,
                  phone,
                  name,
                  password: pw,
                }).then((res: any) => {
                  if (res.data.code === 0) {
                    ToastAndroid.show(
                      '회원가입이 정상처리 되었습니다',
                      ToastAndroid.SHORT,
                    );
                    navigation.goBack();
                  } else {
                    ToastAndroid.show(
                      '이미 존재하는 아이디입니다',
                      ToastAndroid.SHORT,
                    );
                  }
                });
              }
            }}>
            <Text style={s.txtFinish}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const s = StyleSheet.create({
  wrap: {
    height: screenHeight,
    backgroundColor: '#FBFBFB',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  section1: {
    width: '90%',
    marginVertical: 50,
  },
  section2: {
    width: '90%',
    marginVertical: 50,
  },
  section3: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  input: {
    // width: '100%',
    height: 50,
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'sd_gothic_b',
    letterSpacing: 2,
    color: '#444444',
  },
  btnFinish: {
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6078EA',
    borderRadius: 4,
  },
  txtFinish: {
    fontSize: 20,
    color: '#EAEAEA',
    fontFamily: 'sd_gothic_b',
  },
  titleContainer: {
    width: 95,
    height: 30,
    paddingRight: 5,
    marginBottom: 10,
    borderRightWidth: 4,
    borderColor: '#444444',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'sd_gothic_m',
  },
});

export default SignUpScreen;
