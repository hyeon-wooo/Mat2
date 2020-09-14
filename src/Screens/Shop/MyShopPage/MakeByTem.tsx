import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-picker';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {loadLogo, loadImg} from '~/Assets/Images';

const cardWidth = Dimensions.get('screen').width * 0.9;

const requestPermission = async (setUploadedLogo: any) => {
  // await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then((result) => {
  //   if (result === RESULTS.GRANTED) {
  ImagePicker.launchImageLibrary(
    {
      title: 'Load Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    },
    (response) => {
      if (response.didCancel) {
        console.log('## loading photo is canceled ##');
      } else if (response.error) {
        console.log('## loading photo error ##', response);
      } else {
        // console.log('### img data ###', response.data)
        // data.valueLogo = response.data
        const fileSize = (response.data.length * (3 / 4) - 2) / 1024 / 1024;
        console.log('# fileSize #', fileSize);
        if (fileSize > 0.5) {
          ToastAndroid.show(
            '0.5MB 이상의 이미지는 사용하실 수 없습니다',
            ToastAndroid.SHORT,
          );
        } else setUploadedLogo(response.data);
      }
    },
  );
};
//   });
// };

interface prop {
  navigation: any;
  route: any;
}

const MakeByTem = ({navigation, route}: prop) => {
  let temData = JSON.parse(route.params.tem.fullData);
  const keys = Object.keys(temData.value.style);
  const [validArr, setValidArr] = useState(new Array());
  const [selected, setSelected] = useState(-2);
  const [uploadedLogo, setUploadedLogo] = useState('');
  const [cardName, setCardName] = useState('');

  useEffect(() => {
    let initialValidArr = new Array();
    for (let i = 0; i < keys.length; i++) {
      const value = 'value' + keys[i][0].toUpperCase() + keys[i].substring(1);
      initialValidArr.push({idx: i, key: value, text: ''});
    }
    if (keys.includes('logo')) initialValidArr.pop();
    setValidArr(initialValidArr);
  }, []);

  return (
    <KeyboardAwareScrollView
      style={{width: '100%', height: '100%', backgroundColor: '#FBFBFB'}}
      keyboardShouldPersistTaps="always">
      <View style={s.wrap}>
        <Text style={s.screenTitle}>정보입력</Text>

        <TextInput
          key={-1}
          // defaultValue={temData.value[value]}
          placeholder={'명함이름'}
          style={[
            s.input,
            selected === -1
              ? {borderBottomWidth: 2, borderColor: '#6078EA'}
              : {},
          ]}
          onChangeText={(text: string) => {
            temData.value.cardName = text;
            setCardName(text);
          }}
          onFocus={() => setSelected(-1)}
          onEndEditing={() => setSelected(-2)}
        />

        {keys.map((key: string, idx: number) => {
          if (key !== 'logo') {
            // let value = '';
            let placeholder = '';
            // value = 'value' + key[0].toUpperCase() + key.substring(1);

            switch (key) {
              case 'name':
                placeholder = '이름';
                break;
              case 'phone':
                placeholder = '연락처';
                break;
              case 'email':
                placeholder = '이메일';
                break;
              case 'fax':
                placeholder = 'FAX';
                break;
              case 'company':
                placeholder = '회사명';
                break;
              case 'comAddr':
                placeholder = '회사 주소';
                break;
              case 'comNum':
                placeholder = '회사 번호';
                break;
              case 'team':
                placeholder = '부서';
                break;
              case 'position':
                placeholder = '직책';
                break;
            }

            // setValidArr(validArr.push({ idx, text: '' }));
            return (
              <TextInput
                key={idx}
                // defaultValue={temData.value[value]}
                placeholder={placeholder}
                style={[
                  s.input,
                  selected === idx
                    ? {borderBottomWidth: 2, borderColor: '#6078EA'}
                    : {},
                ]}
                onChangeText={(text: string) => {
                  // temData.value[value] = text;
                  let newValidArr = validArr.slice();
                  // const target = newValueArr.find((v, i) => v.idx === idx);
                  // const targetIdx = validArr.indexOf(target);
                  newValidArr[idx].text = text;
                  setValidArr(newValidArr);
                }}
                onFocus={() => setSelected(idx)}
                onEndEditing={(text) => {
                  setSelected(-2);
                }}
              />
            );
          }
          return (
            <View
              key={idx}
              style={{alignSelf: 'flex-start', marginVertical: 20}}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'sd_gothic_m',
                  color: '#444444',
                  marginBottom: 5,
                }}>
                회사 로고
              </Text>
              <TouchableOpacity
                onPressOut={() => requestPermission(setUploadedLogo)}>
                {uploadedLogo.length > 0 ? (
                  <Image
                    source={{uri: `data:image/png;base64,${uploadedLogo}`}}
                    style={{width: 120, height: 120}}
                  />
                ) : (
                  <Image source={loadImg} style={{width: 120, height: 120}} />
                )}
              </TouchableOpacity>
            </View>
          );
        })}
        <TouchableOpacity
          style={s.btnNext}
          onPress={() => {
            console.log(validArr);
            let stackPass = 0;
            validArr.forEach((v) => {
              if (v.text.length === 0) stackPass -= 1;
            });
            if (stackPass < 0 || cardName.length === 0) {
              ToastAndroid.show(
                '모든 항목에 정보를 입력해주세요',
                ToastAndroid.SHORT,
              );
            } else if (uploadedLogo.length === 0 && keys.includes('logo')) {
              ToastAndroid.show(
                '1:1 비율의 로고를 추가해주세요',
                ToastAndroid.SHORT,
              );
            } else {
              validArr.map((v) => {
                temData.value[v.key] = v.text;
              });
              temData.value.cardName = cardName;
              temData.value.valueLogo = uploadedLogo;
              navigation.push('ConfirmCard', {cardDataObj: temData});
            }
          }}>
          <Text style={s.textNext}>다음</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const s = StyleSheet.create({
  wrap: {
    width: cardWidth,
    left: cardWidth * (10 / 9) * 0.05,
    backgroundColor: '#FBFBFB',
    flex: 1,
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 25,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    marginVertical: 20,
  },
  input: {
    width: cardWidth,
    borderBottomWidth: 1,
    borderColor: '#AEAEAE',
    marginVertical: 10,
    fontFamily: 'sd_gothic_m',
    fontSize: 15,
  },
  btnNext: {
    alignSelf: 'flex-end',
    width: 100,
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6078EA',
  },
  textNext: {
    color: '#FBFBFB',
    fontSize: 20,
    fontFamily: 'sd_gothic_m',
  },
});
export default MakeByTem;
