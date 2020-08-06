import React, {useState} from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import { btnOk, imgBack } from '~/Assets/Images';

const screenWidth = Dimensions.get('window').width * (7/10)

interface Props {}

const EnterCodeScreen = ({}: Props) => {
  const [enteredStack, setEnteredStack] = useState(['', '', '', ''])
  const [currentIdx, setCurrentIdx] = useState(0)
  let enteredCode = '' // 확인버튼 눌렀을때 대입

  return (
    <View style={{flex:1, backgroundColor: '#FBFBFB'}}>
      <View style={s.centerView}>
        <Text style={{textAlign: 'center', color: '#6078EA', fontFamily: 'sd_gothic_b', fontSize: 18, marginTop: 40}}>교환번호</Text>
        <View style={{flexDirection: 'row', justifyContent:'center', marginTop: 30}}>
          {enteredStack.map((v, idx) => <Text key={idx} style={s.codeText}>{v}</Text>)}
        </View>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity style={s.okContainer} onPress={() => {
            // enteredCode변수에 enteredStack담아서 서버로 전송
            // fullData를 response받으면 저장 후 명함첩메인으로 화면전환
          }}><Image source={btnOk} style={s.btnOk} /></TouchableOpacity>
        </View>

        <Text style={{fontSize: 14, marginTop: 20, color: '#7D7D7D', textAlign: 'center', fontFamily: 'sd_gothic_b'}}>교환번호를 입력하면 상대방의 명함이 저장됩니다.</Text>
        
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '1'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>1</Text></TouchableOpacity>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '2'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>2</Text></TouchableOpacity>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '3'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>3</Text></TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '4'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>4</Text></TouchableOpacity>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '5'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>5</Text></TouchableOpacity>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '6'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>6</Text></TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '7'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>7</Text></TouchableOpacity>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '8'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>8</Text></TouchableOpacity>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '9'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>9</Text></TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={s.keyItem}><Text style={s.keyItemNumber}></Text></TouchableOpacity>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx < 4) {
              enteredStack[currentIdx] = '0'
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx + 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Text style={s.keyItemNumber}>0</Text></TouchableOpacity>
          <TouchableOpacity style={s.keyItem} onPress={() => {
            if (currentIdx > 0) {
              enteredStack[currentIdx-1] = ''
              setEnteredStack(enteredStack)
              setCurrentIdx(currentIdx - 1)
            }
            console.log(currentIdx, ', ', enteredStack)
          }}><Image source={imgBack} style={s.btnBack} /></TouchableOpacity>
        </View>
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

export default EnterCodeScreen;
