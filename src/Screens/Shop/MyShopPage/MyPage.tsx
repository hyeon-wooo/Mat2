import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import db from '~/DB';
import TemplateCard from '~/components/TemplateCard';
import {template} from '@babel/core';
import {imgDelete, imgChecked} from '~/Assets/Images';
import {useIsFocused} from '@react-navigation/native';

const cardWidth = Dimensions.get('screen').width * 0.9;

interface Props {
  navigation: any;
  route: any;
}

const MyPage = ({navigation, route}: Props) => {
  const focused = useIsFocused();
  const [tems, setTems] = useState(new Array());
  const [buyTems, setBuyTems] = useState(new Array());
  const [isEdit, setIsEdit] = useState(false);
  const [selected, setSelected] = useState(new Array());
  const [tab, setTab] = useState(route.params?.initialTab || 'sell');
  const [modalVisible, setModalVisible] = useState(false);
  const [idOnServerSTATE, setIdOnServerSTATE] = useState(0);
  // console.log('## buyTems.length ##', buyTems.length);
  useEffect(() => {
    if (focused) setIsEdit(false);
    let idOnServer = 0;
    focused &&
      db
        .getMyInfo()
        .then((info: any) => {
          idOnServer = info.idOnServer;
          setIdOnServerSTATE(info.idOnServer);
          return axios.get(
            `https://mat-server-1.herokuapp.com/tem/getByUser?makerId=${idOnServer}`,
          );
        })
        .then((res: any) => {
          if (res.data.code === 0 && res.data.len > 0)
            setTems(res.data.resData);

          return axios.get(
            `https://mat-server-1.herokuapp.com/tem/purchaseLog?buyerId=${idOnServer}`,
          );
        })
        .then((res: any) => {
          console.log('# axios res #      ', res.data.tems.length);
          if (res.data.code === 0) setBuyTems(res.data.tems);
        })
        .catch((err: any) => console.log(err));
  }, [focused]);

  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB', alignItems: 'center'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={s.centeredView}>
          <View style={{...s.modalView, height: '25%'}}>
            <View>
              <Text style={s.modalText}>템플릿 삭제</Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#7D7D7D',
                  fontFamily: 'sd_gothic_b',
                }}>
                삭제한 템플릿은 되돌릴 수 없습니다
              </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{...s.openButton, backgroundColor: '#EEEEEE'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{...s.textStyle, color: '#444444'}}>취소</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{...s.openButton, backgroundColor: '#6078EA'}}
                onPress={() => {
                  if (tab === 'sell') {
                    //tems에서 선택된 템플릿들 삭제, 서버에 삭제 요청
                    axios
                      .post(
                        `https://mat-server-1.herokuapp.com/tem/deleteRegistedTem`,
                        {
                          makerId: idOnServerSTATE,
                          temIds: selected,
                        },
                      )
                      .then((res: any) => {
                        setTems(
                          tems.filter((tem) => !selected.includes(tem.id)),
                        );
                        setIsEdit(false);
                        setSelected(new Array());
                        setModalVisible(!modalVisible);
                      })
                      .catch((err: any) => {
                        console.log(err);
                        ToastAndroid.show(
                          '알 수 없는 오류가 발생했습니다',
                          ToastAndroid.SHORT,
                        );
                      });
                  } else {
                    //buyTems에서 선택된 템플릿들 삭제
                    axios
                      .post(
                        `https://mat-server-1.herokuapp.com/tem/deletePurchasedTem`,
                        {
                          buyerId: idOnServerSTATE,
                          temIds: selected,
                        },
                      )
                      .then((res: any) => {
                        setBuyTems(
                          buyTems.filter((tem) => !selected.includes(tem.id)),
                        );
                        setIsEdit(false);
                        setSelected(new Array());
                        setModalVisible(!modalVisible);
                      })
                      .catch((err: any) => {
                        console.log(err);
                        ToastAndroid.show(
                          '알 수 없는 오류가 발생했습니다',
                          ToastAndroid.SHORT,
                        );
                      });
                  }
                }}>
                <Text style={s.textStyle}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={s.ads}></View>
      <View style={s.tab}>
        <TouchableOpacity
          style={[
            s.tabBtn,
            tab === 'sell'
              ? {borderBottomWidth: 2, borderColor: '#444444'}
              : {borderBottomWidth: 0.5, borderColor: '#AEAEAE'},
          ]}
          onPress={() => {
            setSelected(new Array());
            setIsEdit(false);
            setTab('sell');
          }}>
          <Text
            style={[
              s.tabText,
              tab === 'sell'
                ? {color: '#444444', fontFamily: 'sd_gothic_b'}
                : {color: '#AEAEAE', fontFamily: 'sd_gothic_m'},
            ]}>
            판매
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            s.tabBtn,
            tab === 'buy'
              ? {borderBottomWidth: 2, borderColor: '#444444'}
              : {borderBottomWidth: 0.5, borderColor: '#AEAEAE'},
          ]}
          onPress={() => {
            setSelected(new Array());
            setIsEdit(false);
            setTab('buy');
          }}>
          <Text
            style={[
              s.tabText,
              tab === 'buy'
                ? {color: '#444444', fontFamily: 'sd_gothic_b'}
                : {color: '#AEAEAE', fontFamily: 'sd_gothic_m'},
            ]}>
            구매
          </Text>
        </TouchableOpacity>
      </View>
      <View style={s.preview}>
        <View style={{width: 50}}></View>
        <View style={s.preview1}>
          <Text
            style={{color: '#6078EA', fontSize: 17, fontFamily: 'sd_gothic_b'}}>
            {tab === 'sell' ? tems.length : buyTems.length}
          </Text>
          <Text
            style={{color: '#444444', fontSize: 17, fontFamily: 'sd_gothic_b'}}>
            상품
          </Text>
        </View>
        <TouchableOpacity
          style={s.btnEdit}
          onPress={() => {
            if (isEdit) setSelected(new Array());
            setIsEdit(!isEdit);
          }}>
          <Text
            style={{fontSize: 17, color: '#6078EA', fontFamily: 'sd_gothic_b'}}>
            {!isEdit ? '편집' : '완료'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={s.content}>
        <ScrollView>
          {tab === 'sell' &&
            tems.map((tem: any) => (
              <TouchableOpacity
                key={tem.id}
                style={[{marginVertical: 15}]}
                onPress={() => {
                  if (isEdit) {
                    let newSelected = selected.slice();
                    if (newSelected.includes(tem.id)) {
                      const idx = newSelected.indexOf(tem.id);
                      newSelected.splice(idx, 1);
                    } else {
                      newSelected.push(tem.id);
                    }
                    setSelected(newSelected);
                  }
                }}>
                <View
                  style={[
                    selected.includes(tem.id)
                      ? {borderColor: '#6078EA', borderWidth: 2}
                      : {},
                    ,
                    {
                      left: '5%',
                      width: cardWidth,
                      height: cardWidth * (9 / 16),
                    },
                  ]}>
                  <TemplateCard
                    data={JSON.parse(tem.fullData)}
                    cardWidth={cardWidth}
                  />
                </View>
                <Image
                  source={imgChecked}
                  style={
                    selected.includes(tem.id)
                      ? {
                          width: 30,
                          height: 30,
                          position: 'absolute',
                          left: '10%',
                          top: '10%',
                        }
                      : {display: 'none'}
                  }
                />
              </TouchableOpacity>
            ))}
          {tab === 'buy' &&
            buyTems.map((tem: any, idx: number) => (
              <TouchableOpacity
                key={idx}
                style={[{marginVertical: 15}]}
                onPress={() => {
                  if (isEdit) {
                    let newSelected = selected.slice();
                    if (newSelected.includes(tem.id)) {
                      const idx = newSelected.indexOf(tem.id);
                      newSelected.splice(idx, 1);
                    } else {
                      newSelected.push(tem.id);
                    }
                    setSelected(newSelected);
                  } else {
                    navigation.push('TemDetail', {tem});
                  }
                }}>
                <View
                  style={[
                    selected.includes(tem.id)
                      ? {borderColor: '#6078EA', borderWidth: 2}
                      : {},
                    ,
                    {
                      left: '5%',
                      width: cardWidth,
                      height: cardWidth * (9 / 16),
                    },
                  ]}>
                  <TemplateCard
                    data={JSON.parse(tem.fullData)}
                    cardWidth={cardWidth}
                  />

                  <Image
                    source={imgChecked}
                    style={
                      selected.includes(tem.id)
                        ? {
                            width: 30,
                            height: 30,
                            position: 'absolute',
                            left: '10%',
                            top: '10%',
                          }
                        : {display: 'none'}
                    }
                  />
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
        {isEdit && (
          <TouchableOpacity
            style={[s.menuDelete]}
            onPress={() =>
              selected.length > 0 && setModalVisible(!modalVisible)
            }>
            <Image
              source={imgDelete}
              style={{width: 17, height: 17, marginLeft: 20, marginRight: 10}}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'sd_gothic_b',
                color: '#444444',
              }}>
              템플릿 삭제하기
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  ads: {
    flex: 5,
    borderWidth: 1,
    width: '100%',
  },
  tab: {
    flex: 1,
    width: '85%',
    flexDirection: 'row',
  },
  preview: {
    width: '85%',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#AEAEAE',
  },
  preview1: {
    alignItems: 'center',
  },
  btnEdit: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  content: {
    flex: 12,
    width: '100%',
  },
  tabBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  tabText: {
    fontSize: 15,
  },
  menuDelete: {
    height: '13%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopWidth: 0.5,
    borderColor: '#AEAEAE',
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
    padding: 35,
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
    marginBottom: 15,
    // textAlign: "center",
    fontSize: 25,
    fontFamily: 'sd_gothic_b',
  },
});

export default MyPage;
