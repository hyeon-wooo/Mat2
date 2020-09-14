import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {matLogo} from '~/Assets/Images';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import db from '~/DB';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

interface prop {
  navigation: any;
  setIsLoggedIn: any;
}
const SignInScreen = ({navigation, setIsLoggedIn}: prop) => {
  const [userId, setUserId] = useState('');
  const [pw, setPw] = useState('');
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#FBFBFB',
        height: screenHeight,
      }}>
      <View style={s.logoContainer}>
        <Image
          source={matLogo}
          style={{width: 150, height: 150 * (164 / 260)}}
        />
        <Text style={s.logoText}>MAKE AND TOSS</Text>
      </View>
      <View style={{...s.inputContainer}}>
        <TextInput
          style={[
            s.input,
            selected1
              ? {borderColor: '#6078EA', borderBottomWidth: 1.5}
              : {borderColor: '#7D7D7D', borderBottomWidth: 0.5},
          ]}
          placeholder="ID"
          onChangeText={(text: string) => {
            setUserId(text);
          }}
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
          placeholder="PASSWORD"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(text: string) => setPw(text)}
          onFocus={() => setSelected2(true)}
          onEndEditing={() => setSelected2(false)}
        />
      </View>
      <View style={s.loginBtnContainer}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingVertical: 10,
            height: 50,
            width: '100%',
            backgroundColor: '#6078EA',
            borderRadius: 10,
            alignItems: 'center',
          }}
          onPress={() => {
            if (userId.length === 0) {
              ToastAndroid.show('아이디를 입력해주세요', ToastAndroid.SHORT);
            } else if (pw.length === 0) {
              ToastAndroid.show('비밀번호를 입력해주세요', ToastAndroid.SHORT);
            } else {
              Axios.post('https://mat-server-1.herokuapp.com/user/signIn', {
                userId,
                password: pw,
              }).then((res: any) => {
                switch (res.data.code) {
                  case 0:
                    db.setMyInfo(
                      res.data.idOnServer,
                      res.data.token,
                      res.data.point,
                      res.data.name,
                      res.data.uid,
                    ).then(() => setIsLoggedIn(true));

                    break;
                  case 1:
                    ToastAndroid.show(
                      '비밀번호가 일치하지 않습니다',
                      ToastAndroid.SHORT,
                    );
                    break;
                  case 2:
                    ToastAndroid.show(
                      '존재하지 않는 아이디입니다',
                      ToastAndroid.SHORT,
                    );
                    break;
                }
              });
            }
          }}>
          <Text style={s.loginText}>로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={s.extra}>
        <View style={s.extraSection1}>
          <TouchableOpacity style={s.extraBtn}>
            <Text style={s.extraText}>아이디 찾기</Text>
          </TouchableOpacity>
          <Text style={s.extraText}> | </Text>
          <TouchableOpacity style={s.extraBtn}>
            <Text style={s.extraText}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        <View style={s.extraSection2}>
          <Text style={{marginBottom: 10, color: '#7D7D7D'}}>
            아직 회원이 아니신가요?
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              width: '100%',
              height: 50,
              backgroundColor: '#EAEAEA',
              borderRadius: 10,
              alignItems: 'center',
            }}
            onPress={() => navigation.push('SignUp')}>
            <Text
              style={{
                color: '#7D7D7D',
                fontSize: 20,
                fontFamily: 'sd_gothic_b',
              }}>
              회원가입
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const s = StyleSheet.create({
  logoContainer: {
    // flex: 3,
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    // flex: 2,
    width: '90%',
  },
  loginBtnContainer: {
    // flex: 1,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  extra: {
    // flex: 3,
    width: '90%',
  },
  logoText: {
    fontFamily: 'sd_gothic_b',
    fontSize: 30,
    color: '#6078EA',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 20,
    marginBottom: 5,
    fontFamily: 'sd_gothic_b',
    letterSpacing: 2,
    color: '#444444',
  },
  loginText: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#FBFBFB',
    textShadowColor: '#444444',
    textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 2,
  },
  extraBtn: {
    alignItems: 'center',
    marginVertical: 5,
  },
  extraText: {
    fontSize: 15,
    fontFamily: 'sd_gothic_m',
    color: '#6078EA',
  },
  extraSection1: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  extraSection2: {
    alignItems: 'center',
    width: '100%',
  },
});

export default SignInScreen;
