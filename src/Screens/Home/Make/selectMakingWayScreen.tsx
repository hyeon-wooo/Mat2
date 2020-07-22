import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {btnAdd} from '~/Assets/Images';
import Encrypto from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}

const SelectMakingWayScreen = ({navigation}: Props) => {
  return (
    <View style={styles.body}>
      <View
        style={styles.itemContainer}
        onTouchEnd={() => navigation.navigate('InputData')}>
        <View style={styles.imgContainer}>
          {/* <Image source={btnAdd} style={styles.img} /> */}
          <Ionicons name="person-sharp" size={90} color={'#444444'} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>기본 제공 템플릿 사용하기</Text>
          <Text style={styles.itemDescription}>
            Mat에서 제공하는 배경으로 쉽게 나만의 명함을 제작할 수 있습니다
          </Text>
        </View>
      </View>

      <View
        style={styles.itemContainer}
        onTouchEnd={() => navigation.navigate('InputData')}>
        <View style={styles.imgContainer}>
          {/* <Image source={btnAdd} style={styles.img} /> */}
          <Encrypto name="shop" size={90} color={'#444444'} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>템플릿 구매 후 제작하기</Text>
          <Text style={styles.itemDescription}>
            마켓에 있는 템플릿을 포인트로 구매하여 제작할 수 있습니다
          </Text>
        </View>
      </View>

      <View
        style={[styles.itemContainer, {borderBottomWidth: 0}]}
        onTouchEnd={() => navigation.navigate('InputData')}>
        <View style={styles.imgContainer}>
          {/* <Image source={btnAdd} style={styles.img} /> */}
          <Encrypto name="box" size={90} color={'#444444'} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>구매한 템플릿으로 제작하기</Text>
          <Text style={styles.itemDescription}>
            이미 마켓에서 구매한 템플릿으로 제작합니다
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // width: '100%',
    // height: '100%',
  },
  itemContainer: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: 'blue',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },
  imgContainer: {
    width: '30%',
    height: '100%',
    // borderWidth: 2,
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '70%',
    height: '100%',
    // borderWidth: 2,
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  itemTitle: {
    fontFamily: 'sd_gothic_m',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#444444',
    marginBottom: 6,
    width: '100%',
  },
  itemDescription: {
    fontFamily: 'sd_gothic_m',
    color: '#7d7d7d',
    // textAlign: 'center',
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  touchable: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },
  touchableInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SelectMakingWayScreen;
