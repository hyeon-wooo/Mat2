import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LayoutCard from '~/components/LayoutCard';
import db from '~/DB';

interface Props {
  route: any;
  navigation: any;
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const cardWidth = deviceWidth * (8 / 10);
const cardHeight = cardWidth * (9 / 16);

const DetailScreen = ({route, navigation}: Props) => {
  const data = route.params;

  return (
    <View style={styles.wrapper}>
      <View style={styles.cardContainer}>
        <LayoutCard data={data} cardWidth={deviceWidth * 1.5} />
      </View>

      <TouchableOpacity
        style={styles.btnFinish}
        onPress={() =>
          db.saveCard(JSON.stringify(data)).then(() => navigation.popToTop())
        }>
        <Text style={styles.btnText}>저장</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnBack}
        onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>이전</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'space-between'
  },
  // cardConatiner: {
  //     width: cardWidth,
  //     height: cardHeight,
  //     elevation: 5,
  //     backgroundColor: 'white',
  //     borderRadius: 5,
  //     // padding: 5,
  //     marginTop: 15,
  //     borderWidth: 0,
  //     borderColor: 'blue'
  // }
  cardContainer: {
    marginTop: 50,
    width: deviceWidth * 0.7 * (16 / 9),
    // right: deviceWidth - (deviceWidth * 0.8 * (16 / 9)) / 2,
    top: 80,
    alignSelf: 'center',

    height: deviceWidth * 0.7,
    transform: [{rotate: '90deg'}],
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  btnContainer: {
    width: '10%',
    height: deviceWidth,
    borderColor: 'orange',
    borderWidth: 4,
    transform: [{rotate: '90deg'}],
  },
  btnFinish: {
    position: 'absolute',
    left: '25%',
    top: '85%',
    width: 70,
    height: 40,
    backgroundColor: '#6078EA',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '90deg'}],
  },
  btnBack: {
    position: 'absolute',
    left: '60%',
    top: '85%',
    width: 70,
    height: 40,
    backgroundColor: '#333333',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '90deg'}],
  },
  btnText: {
    fontFamily: 'sd_gothic_m',
    fontSize: 20,
    color: 'white',
  },
});

export default DetailScreen;
