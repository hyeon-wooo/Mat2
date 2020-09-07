import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ToastAndroid,
} from 'react-native';
import {imgChecked, templateHeader2, imgUnchecked} from '~/Assets/Images';
import TemplateCard from '~/components/TemplateCard';
import axios from 'axios';
import db from '~/DB';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const cardWidth = screenWidth * (9 / 10);
const cardHeight = cardWidth * (9 / 16);

interface Props {
  route: any;
  navigation: any;
}

const TemplateDetail = ({route, navigation}: Props) => {
  const {data, temId, price} = route.params;
  console.log('# temId #', temId);
  // console.log('## tem ##', typeof temData, temData);
  const temData = JSON.parse(data);
  // console.log('# tem # ', typeof temData, temData.value.style);
  const [point, setPoint] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={styles.centeredView}>
          <View style={{...styles.modalView, height: '25%'}}>
            <View>
              <Text style={styles.modalText}>템플릿 구매</Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#7D7D7D',
                  fontFamily: 'sd_gothic_b',
                }}>
                템플릿을 구매하시겠습니까?
              </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#EEEEEE'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{...styles.textStyle, color: '#444444'}}>
                  취소
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#6078EA'}}
                onPress={() => {
                  // idOnServer와 temId를 서버에 보내며 구매 처리 요청
                  // red.data.code === 0 이면 db에서 포인트 차감 후 템플릿 저장
                  // 화면 이동
                  db.getMyInfo().then(async (info: any) => {
                    axios
                      .post(`http://mat-server-1.herokuapp.com/tem/purchase`, {
                        buyerId: info.idOnServer,
                        temId: temId,
                      })
                      .then(async (res: any) => {
                        if (res.data.code === 0) {
                          return db.updateMyPoint(
                            info.idOnServer,
                            res.data.newPoint,
                          );
                        } else false;
                      })
                      .then(() =>
                        navigation.navigate('MyShopPage', {
                          screen: 'MyPageMain',
                          params: {
                            initialTab: 'buy',
                          },
                        }),
                      )
                      .catch((err: any) => {
                        console.log('# server ERR #', err);
                        ToastAndroid.show(
                          '알 수 없는 오류가 발생했습니다',
                          ToastAndroid.SHORT,
                        );
                      });
                  });
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.content}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TemplateCard data={temData} cardWidth={cardWidth} borderRadius />
          </View>
        </View>

        <View style={styles.lmitSection}>
          <Text>ⓘ 표시되지 않은 항목들은 명함에 입력할 수 없습니다</Text>
          <View style={styles.row}>
            <Text
              style={[
                styles.itemText,
                {color: temData.value.style.name ? '#6078EA' : '#CFCFCF'},
              ]}>
              이름
            </Text>
            <Text
              style={[
                styles.itemText,
                {color: temData.value.style.email ? '#6078EA' : '#CFCFCF'},
              ]}>
              이메일
            </Text>
            <Text
              style={[
                styles.itemText,
                {color: temData.value.style.phone ? '#6078EA' : '#CFCFCF'},
              ]}>
              연락처
            </Text>
            <Text
              style={[
                styles.itemText,
                {color: temData.value.style.fax ? '#6078EA' : '#CFCFCF'},
              ]}>
              FAX
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.itemText,
                {
                  color: temData.value.style.company ? '#6078EA' : '#CFCFCF',
                },
              ]}>
              회사명
            </Text>
            <Text
              style={[
                styles.itemText,
                {color: temData.value.style.team ? '#6078EA' : '#CFCFCF'},
              ]}>
              부서
            </Text>
            <Text
              style={[
                styles.itemText,
                {
                  color: temData.value.style.position ? '#6078EA' : '#CFCFCF',
                },
              ]}>
              직책
            </Text>
            <Text
              style={[
                styles.itemText,
                {color: temData.value.style.comNum ? '#6078EA' : '#CFCFCF'},
              ]}>
              회사번호
            </Text>
            <Text
              style={[
                styles.itemText,
                {
                  color: temData.value.style.comAddr ? '#6078EA' : '#CFCFCF',
                },
              ]}>
              회사주소
            </Text>
          </View>

          <View style={styles.pointSection}>
            <View style={styles.pointRow}>
              <Text style={styles.pointName}>구매 포인트</Text>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.p}>P</Text>
            </View>
            <View style={styles.pointRow}>
              <Text style={styles.pointName}>보유 포인트</Text>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.p}>P</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.btnText}>구매하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
    height: '100%',
  },
  // headerContainer: {
  //   height: screenHeight / 10,
  // },
  content: {
    // height: screenHeight * (9 / 10),
    alignContent: 'center',
    width: '90%',
    // flex: 1,
  },

  footer: {
    width: screenWidth * (9 / 10),
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
  },
  btnNext: {
    width: 90,
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

  lmitSection: {
    height: '40%',
    // borderWidth: 1,
    // alignItems: 'center',
    width: '100%',
  },
  cardContainer: {
    // flex: 3,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
    marginBottom: 15,
  },
  card: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    marginHorizontal: 10,
  },
  pointSection: {
    borderTopWidth: 1,
    borderColor: '#CFCFCF',
    marginTop: 15,
  },
  pointRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
  },
  pointName: {
    width: 110,
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
  },
  p: {
    fontSize: 25,
    fontFamily: 'sd_gothic_b',
    color: '#6078EA',
    marginLeft: 5,
  },
  price: {
    paddingHorizontal: 5,
    fontSize: 25,
    fontFamily: 'sd_gothic_b',
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    color: '#6078EA',
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

export default TemplateDetail;
