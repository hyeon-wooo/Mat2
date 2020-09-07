import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface Props {
  current: number;
  finish: object;
}

const Header = ({current, finish}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row2}>
        <View
          style={[
            styles.textContainer,
            current === 1 ? styles.viewCurrent : {},
          ]}>
          <Text
            style={[
              styles.textCommon,
              current === 1 ? styles.textCurrent : styles.textFinish,
            ]}>
            정보입력
          </Text>
        </View>
        <View
          style={[styles.lineContainer, current > 1 ? styles.lineFinish : {}]}>
          <Text style={styles.textCommon}>---</Text>
        </View>
        <View
          style={[
            styles.textContainer,
            current === 2 ? styles.viewCurrent : {},
          ]}>
          <Text
            style={[
              styles.textCommon,
              current === 2 ? styles.textCurrent : {},
            ]}>
            레이아웃
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <Text style={styles.textCommon}>---</Text>
        </View>
        <View
          style={[
            styles.textContainer,
            current === 3 ? styles.viewCurrent : {},
          ]}>
          <Text style={[styles.textCommon, current === 3 ? {} : {}]}>
            배경선택
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <Text style={styles.textCommon}>---</Text>
        </View>
        <View
          style={[
            styles.textContainer,
            current === 4 ? styles.viewCurrent : {},
          ]}>
          <Text style={[styles.textCommon, current === 4 ? {} : {}]}>
            세부설정
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
  },
  row2: {
    // borderWidth: 3,
    width: '90%',
    left: '5%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '19%',
    height: '100%',
    flex: 1,
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineContainer: {
    width: '8%',
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  textCommon: {
    fontSize: 18,
    fontFamily: 'sd_gothic_m',
    color: '#333333',
  },
  viewCurrent: {
    fontWeight: 'bold',
    borderBottomWidth: 3,
    marginTop: 2,
    color: 'black',
  },
  textCurrent: {
    color: 'black',
    fontWeight: 'bold',
  },
  textFinish: {
    color: '#333333',
    fontWeight: 'bold',
  },
  lineFinish: {},
});

export default Header;
