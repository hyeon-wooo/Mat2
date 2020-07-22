import React, {useState} from 'react';
import S from 'styled-components/native';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TextInputS from '~/components/TextInputS';
import {NavigationContainer} from '@react-navigation/native';

// const TextInputS = (placeholderText: string, isNeeded: boolean) => {
//   const [focused, setFocused] = useState(false);

//   return (
//     <View style={styles.inputContainer}>
//       <Text style={styles.needItem}>{isNeeded ? '*' : ''}</Text>
//       <TextInput
//         placeholder={placeholderText}
//         style={[
//           styles.textInput,
//           focused
//             ? {borderBottomColor: '#6078EA'}
//             : {borderBottomColor: '#444444'},
//         ]}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//       />
//       <View style={{width: '5%'}} />
//     </View>
//   );
// };

interface Props {
  navigation: any;
}

const InputData = ({navigation}: Props) => {
  let data = {};
  const addData = (text: string, name: string) => {
    data[name] = text;
  };
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.processContainer}>
          <Text>Process Bar가 위치할 예정</Text>
        </View>
        <Text style={styles.processDescription}>
          * 명함에 들어갈 정보를 입력해주세요
        </Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <TextInputS
            placeholder="명함 이름"
            isNeeded={true}
            onEndEditing={addData}
            name="cardName"
          />
          <TextInputS
            placeholder="내 이름"
            isNeeded={true}
            onEndEditing={addData}
            name="valueName"
          />
          <TextInputS
            placeholder="전화번호"
            isNeeded={true}
            onEndEditing={addData}
            name="valuePhone"
          />
          <TextInputS
            placeholder="이메일"
            isNeeded={false}
            onEndEditing={addData}
            name="valueEmail"
          />
          <TextInputS
            placeholder="회사명"
            isNeeded={true}
            onEndEditing={addData}
            name="valueCompany"
          />
          <TextInputS
            placeholder="직책"
            isNeeded={true}
            onEndEditing={addData}
            name="valuePosition"
          />
          <TextInputS
            placeholder="부서"
            isNeeded={false}
            onEndEditing={addData}
            name="valueTeam"
          />
          <TextInputS
            placeholder="회사번호"
            isNeeded={true}
            onEndEditing={addData}
            name="valueComNum"
          />
          <TextInputS
            placeholder="회사주소"
            isNeeded={true}
            onEndEditing={addData}
            name="valueComAddr"
          />
          <TextInputS
            placeholder="FAX"
            isNeeded={false}
            onEndEditing={addData}
            name="valueFax"
          />
          <View style={styles.btnConatiner}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => navigation.navigate('SelectMatLayout', data)}>
              <Text style={styles.btnText}>다음</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    flex: 1,
    width: '90%',
    left: '5%',
  },
  scrollViewContainer: {
    flex: 4,
  },
  processContainer: {
    flex: 5,
  },
  processDescription: {
    flex: 1,
  },
  btnConatiner: {
    marginVertical: 20,
    width: '90%',
    left: '5%',
    flexDirection: 'row-reverse',
  },
  btnNext: {
    width: 70,
    height: 40,
    backgroundColor: '#6078EA',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'sd_gothic_m',
    fontSize: 20,
    color: 'white',
  },
});

export default InputData;
