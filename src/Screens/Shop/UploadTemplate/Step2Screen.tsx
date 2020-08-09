import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  NavigatorIOS,
} from 'react-native';

import {templateHeader2, descriptionStep2} from '~/Assets/Images';
import Draggable from 'react-native-draggable';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const cardWidth = screenWidth * (8 / 10);
const cardHeight = cardWidth * (9 / 16);

interface Props {
  route: any;
  navigation: any;
}

const Step2Screen = ({route, navigation}: Props) => {
  const backData = route.params.backData;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={templateHeader2}
          style={{width: screenWidth, height: '70%', marginTop: '3%'}}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.card}
            source={{uri: `data:image/png;base64,${backData}`}}></Image>
        </View>

        <Draggable x={0} y={cardHeight + 10} z={100} minX={0} minY={0}>
          <Text style={styles.test1}>홍길동</Text>
        </Draggable>
        <Draggable x={0} y={cardHeight + 40} z={100} minX={0} minY={0}>
          <Text style={styles.test1}>010-0000-0000</Text>
        </Draggable>
        <Draggable x={0} y={cardHeight + 70} z={100} minX={0} minY={0}>
          <Text style={styles.test1}>email@mat.com</Text>
        </Draggable>
        <Draggable x={0} y={cardHeight + 100} z={100} minX={0} minY={0}>
          <Text style={styles.test1}>Mat Company</Text>
        </Draggable>
        <Draggable x={0} y={cardHeight + 130} z={100} minX={0} minY={0}>
          <Text style={styles.test1}>기획팀</Text>
        </Draggable>
        <Draggable
          x={screenWidth / 2}
          y={cardHeight + 130}
          z={100}
          minX={0}
          minY={0}>
          <Text style={styles.test1}>대리</Text>
        </Draggable>
        <Draggable x={0} y={cardHeight + 160} z={100} minX={0} minY={0}>
          <Text style={styles.test1}>02-0000-0000</Text>
        </Draggable>
        <Draggable x={0} y={cardHeight + 190} z={100} minX={0} minY={0}>
          <Text style={styles.test1}>
            서울특별시 강남구 00동 00길 MAT타워 204호
          </Text>
        </Draggable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  test1: {
    borderWidth: 1,
    // width: '100%',
    fontSize: 13,
    padding: 3,
    borderColor: '#7D7D7D',
    fontFamily: 'sd_gothic_m',
  },
  box: {
    height: 40,
    borderWidth: 1,
    borderColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // height: screenHeight,
    // borderWidth: 5,
    // borderColor: 'red',
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
  },
  headerContainer: {
    flex: 1,
  },
  content: {
    flex: 8.5,
    width: '95%',
    // left: '5%',
    borderWidth: 1,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontFamily: 'sd_m',
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
  descriptionContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgDescription: {
    width: '100%',
    height: '40%',
  },
  cardContainer: {
    // flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    // borderColor: 'blue',
  },
  card: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: 4,
    backgroundColor: '#333333',
    borderWidth: 1,
    // elevation: 5,
  },
});

export default Step2Screen;
