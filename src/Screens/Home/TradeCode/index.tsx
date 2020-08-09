import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {btnAdd, imgInputPin, imgCreatePin} from '~/Assets/Images';

interface Props {
  navigation: any;
}

const tradeCode = ({navigation}: Props) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={{
          ...styles.imgContainer,
          borderBottomWidth: 1,
          borderColor: '#D4D4D4',
        }}
        onPress={() => navigation.push('SelectCardToSend')}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Image source={imgCreatePin} style={{width: 80 * 2.15, height: 80}} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.menuTitle}>교환번호 생성</Text>
          <Text style={styles.menuDescription}>
            생성된 번호를 교환할 상대에게 알려주세요
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.imgContainer}
        onPress={() => navigation.push('EnterCode')}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Image source={imgInputPin} style={{width: 80 * 1.95, height: 80}} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.menuTitle}>교환번호 입력</Text>
          <Text style={styles.menuDescription}>
            받은 교환번호를 입력해주세요
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  imgContainer: {
    flex: 1,
    width: '80%',
    left: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  menuTitle: {
    fontFamily: 'sd_gothic_b',
    fontSize: 20,
    color: '#444444',
    textAlign: 'center',
    marginBottom: 5,
  },
  menuDescription: {
    fontFamily: 'sd_gothic_b',
    fontSize: 13,
    color: '#7D7D7D',
  },
});

export default tradeCode;
