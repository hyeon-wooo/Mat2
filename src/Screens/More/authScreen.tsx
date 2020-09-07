import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ToastAndroid,
} from 'react-native';
import db from '~/DB';
import Axios from 'axios';

interface prop {
  navigation: any;
}

const AuthMain = ({navigation}: prop) => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  let myIdOnServer = 0;

  useEffect(() => {
    db.getMyInfo().then((info: any) => {
      console.log('# info #', info);
      myIdOnServer = info.idOnServer;
    });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
      {/* MODAL 1 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {}}>
        <View style={s.centeredView}>
          <View style={{...s.modalView, height: 190}}>
            <View>
              <Text style={s.modalText}>로그아웃</Text>
              <Text
                style={{
                  fontSize: 12.5,
                  color: '#7D7D7D',
                  fontFamily: 'sd_gothic_b',
                }}>
                로그아웃 하시겠습니까?
              </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{...s.openButton, backgroundColor: '#EEEEEE'}}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                }}>
                <Text style={{...s.textStyle, color: '#444444'}}>취소</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{...s.openButton, backgroundColor: '#6078EA'}}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                  db.removeMyInfo().then(() => navigation.navigate('Home'));
                }}>
                <Text style={s.textStyle}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL 2 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {}}>
        <View style={s.centeredView}>
          <View style={{...s.modalView, height: 200}}>
            <View>
              <Text style={s.modalText}>회원탈퇴</Text>
              <Text
                style={{
                  fontSize: 12.5,
                  color: '#7D7D7D',
                  fontFamily: 'sd_gothic_b',
                }}>
                정말로 회원 탈퇴하시겠습니까?
              </Text>
              <Text
                style={{
                  fontSize: 12.5,
                  color: '#EA6060',
                  fontFamily: 'sd_gothic_b',
                }}>
                회원탈퇴 시 저장된 모든 정보가 삭제됩니다
              </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{...s.openButton, backgroundColor: '#EEEEEE'}}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                }}>
                <Text style={{...s.textStyle, color: '#444444'}}>취소</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{...s.openButton, backgroundColor: '#EA6060'}}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                  db.getMyInfo()
                    .then(async (info: any) => {
                      return Axios.post(
                        `https://mat-server-1.herokuapp.com/user/exitUser`,
                        {
                          idOnServer: info.idOnServer,
                        },
                      );
                    })
                    .then(async (res: any) => {
                      if (res.data.code === 0) {
                        return db.removeMyInfo();
                      }
                      return false;
                    })
                    // .then(() => db.removeAllCards())
                    .then((result) => {
                      if (result) {
                        ToastAndroid.show(
                          '회원 탈퇴 처리되었습니다',
                          ToastAndroid.SHORT,
                        );
                        navigation.navigate('Home');
                      } else
                        ToastAndroid.show(
                          '알 수 없는 오류가 발생했습니다',
                          ToastAndroid.SHORT,
                        );
                    });
                }}>
                <Text style={s.textStyle}>탈퇴</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View
        style={{
          height: 80,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: '#CFCFCF',
          borderBottomWidth: 1,
        }}>
        <Text style={{...s.title1, marginLeft: 15}}>{'bvv8808'}</Text>
        <Text style={{...s.title1, marginRight: 15}}>{'로그인 됨'}</Text>
      </View>
      <TouchableOpacity
        style={s.row}
        onPress={() => navigation.push('ChangePassword')}>
        <Text style={s.rowTitle}>비밀번호 변경</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.row} onPress={() => setModalVisible1(true)}>
        <Text style={s.rowTitle}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.row} onPress={() => setModalVisible2(true)}>
        <Text style={s.rowTitle}>회원탈퇴</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 18,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    marginLeft: 15,
  },
  title1: {
    color: '#6078EA',
    fontFamily: 'sd_gothic_m',
    fontSize: 18,
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
    // height: '35%',
    margin: 15,
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
    marginBottom: 10,
    // textAlign: "center",
    fontSize: 25,
    fontFamily: 'sd_gothic_b',
  },
});

export default AuthMain;
