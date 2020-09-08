import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Modal,
  ToastAndroid,
} from 'react-native';
import db from '~/DB';
import axios from 'axios';
import PointShopHeader from '~/components/PointShopHeader';
import {mega20000} from '~/Assets/Images';
import {indexOf} from '~/Assets/layoutCards';

interface prop {
  navigation: any;
  route: any;
}

const BuyItemScreen = ({navigation, route}: prop) => {
  const {item} = route.params;
  const [myPoint, setMyPoint] = useState(0);
  const [myIdOnServer, setMyIdOnServer] = useState(0);
  const [available, setAvailable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    db.getMyInfo().then((info: any) => {
      console.log('##### ', info.myPoint);
      setMyPoint(info.myPoint);
      setMyIdOnServer(info.idOnServer);
      if (info.myPoint >= item.neededPoint) setAvailable(true);
    });
  }, []);

  return (
    <View style={s.wrap}>
      <PointShopHeader title="구매하기" />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={s.centeredView}>
          <View style={{...s.modalView, height: '25%'}}>
            <View>
              <Text style={s.modalText}>구매 완료</Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#7D7D7D',
                  fontFamily: 'sd_gothic_b',
                }}>
                구매가 완료되었습니다. 보관함을 확인해주세요.
              </Text>
            </View>

            <TouchableOpacity
              style={{
                ...s.openButton,
                backgroundColor: '#6078EA',
                alignSelf: 'flex-end',
              }}
              onPress={() => {
                navigation.pop(4);
                setModalVisible(!modalVisible);
              }}>
              <Text style={s.textStyle}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={s.itemContainer}>
        <View style={s.imgContainer}>
          <Image source={mega20000} style={s.img} />
        </View>
        <View style={s.infoContainer}>
          <Text style={s.textInfo}>[{item.shopName}]</Text>
          <Text style={s.textInfo}>{item.title}</Text>
        </View>
      </View>
      <View style={s.extra}>
        <View style={{width: '90%'}}>
          <View style={s.pointRow}>
            <Text style={s.pointName}>보유 포인트</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...s.pointValue, backgroundColor: '#EEEEEE'}}>
                {myPoint}
              </Text>
              <Text style={s.pointValue}>P</Text>
            </View>
          </View>
          <View style={s.pointRow}>
            <Text style={s.pointName}>
              <Text style={[s.pointName, {color: '#EA6060'}]}>- </Text>
              사용 포인트
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...s.pointValue, backgroundColor: '#EEEEEE'}}>
                {item.neededPoint}
              </Text>
              <Text style={s.pointValue}>P</Text>
            </View>
          </View>
          <View style={s.pointRow}>
            <Text style={s.pointName}>잔여 포인트</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...s.pointValue, backgroundColor: '#EEEEEE'}}>
                {myPoint - item.neededPoint}
              </Text>
              <Text style={s.pointValue}>P</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[
            s.btnBuy,
            available
              ? {backgroundColor: '#6078EA'}
              : {backgroundColor: '#CDCDCD'},
          ]}
          disabled={!available}
          onPress={() => {
            // 서버에 구매 요청 후
            // 로컬DB에 저장
            const newPoint = myPoint - item.neededPoint;
            axios
              .post(`https://mat-server-1.herokuapp.com/pointshop/purchase`, {
                buyerId: myIdOnServer,
                itemName: item.title,
                shopName: item.shopName,
                newPoint,
              })
              .then((res: any) => {
                if (res.data.code === 0) {
                  return db.savePointItem(
                    item,
                    res.data.key,
                    res.data.limitTime,
                  );
                }
              })
              .then(() => db.updateMyPoint(myIdOnServer, newPoint))
              .then(() => setModalVisible(!modalVisible))
              .catch((err) => {
                console.log(err);
                ToastAndroid.show(
                  '알 수 없는 오류가 발생했습니다',
                  ToastAndroid.SHORT,
                );
              });
          }}>
          <Text
            style={[
              s.textBuy,
              available ? {color: '#FBFBFB'} : {color: '#444444'},
            ]}>
            {available ? '구매확정' : '포인트 부족'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
  },
  itemContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '90%',
    borderBottomWidth: 0.5,
    borderColor: '#AEAEAE',
    flexDirection: 'row',
  },
  imgContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AEAEAE',
  },
  infoContainer: {
    height: 100,
    justifyContent: 'center',
    marginLeft: 10,
  },
  img: {
    width: 70,
    height: 70 * 0.595,
  },
  textInfo: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
  },
  extra: {
    height: '60%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  pointRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  pointName: {
    fontSize: 25,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
  },
  pointValue: {
    fontSize: 20,
    padding: 5,
    fontFamily: 'sd_gothic_b',
    color: '#6078EA',
    borderRadius: 5,
  },
  btnBuy: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 40,
    marginVertical: 30,
    // flexDirection: 'row',
    // alignSelf: 'flex-end',
  },
  textBuy: {
    fontFamily: 'sd_gothic_m',
    fontSize: 17,
  },

  /** MODAL */
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    height: '35%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    // alignItems: 'stretc',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    width: '45%',
    height: 35,
    // backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

    height: 20,
    // width: '40%'
  },
  modalText: {
    marginBottom: 10,
    // textAlign: "center",
    fontSize: 25,
    fontFamily: 'sd_gothic_b',
  },
});

export default BuyItemScreen;
