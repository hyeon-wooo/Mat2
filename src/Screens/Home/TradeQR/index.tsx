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
            console.log('hi');
          }}>
          <Image source={btnAdd} style={styles.img} />
          <Text>기본 제공 템플릿 사용하기</Text>
        </View>
      </View>

      <View style={styles.imgContainer}>
        <View
          style={styles.innerContainer}
          onTouchEnd={() => {
            console.log('hi');
          }}>
          <Image source={btnAdd} style={styles.img} />
          <Text>사용할 템플릿 구매하기</Text>
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
