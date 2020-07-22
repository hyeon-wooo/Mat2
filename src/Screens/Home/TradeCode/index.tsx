import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {btnAdd} from '~/Assets/Images';

interface Props {
  navigation: any;
}

const tradeCode = ({navigation}: Props) => {
  return (
    <View style={styles.body}>
      <View style={styles.imgContainer}>
        <View
          style={styles.innerContainer}
          onTouchEnd={() => {
            navigation.navigate('CreateCode');
          }}>
          <Image source={btnAdd} style={styles.img} />
          <Text>교환번호 생성</Text>
        </View>
      </View>

      <View style={styles.imgContainer}>
        <View
          style={styles.innerContainer}
          onTouchEnd={() => {
            navigation.navigate('EnterCode');
          }}>
          <Image source={btnAdd} style={styles.img} />
          <Text>교환번호 입력</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderWidth: 2,
  },
  innerContainer: {
    alignItems: 'center',
  },
});

export default tradeCode;
