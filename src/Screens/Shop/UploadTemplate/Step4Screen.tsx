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
} from 'react-native';
import {imgChecked, templateHeader2, imgUnchecked} from '~/Assets/Images';
import TemplateCard from '~/components/TemplateCard';
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const cardWidth = screenWidth * (9 / 10);
const cardHeight = cardWidth * (9 / 16);

interface Props {
  route: any;
  navigation: any;
}

const Step3Screen = ({route, navigation}: Props) => {
  const temData = route.params.temData;
  const [selectedCategory, setSelectedCategory] = useState('etc');
  const [point, setPoint] = useState(0);
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
      <View>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image
              source={templateHeader2}
              style={{width: screenWidth, height: '70%', marginTop: '3%'}}
            />
          </View>

          <View style={styles.content}>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <TemplateCard data={temData} cardWidth={cardWidth} />
              </View>
            </View>

            <View style={styles.emptyView}>
              <Text>
                ⓘ 표시되지 않은 항목들은 구매자가 명함에 입력할 수 없습니다
              </Text>
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
                      color: temData.value.style.company
                        ? '#6078EA'
                        : '#CFCFCF',
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
                      color: temData.value.style.position
                        ? '#6078EA'
                        : '#CFCFCF',
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
                      color: temData.value.style.comAddr
                        ? '#6078EA'
                        : '#CFCFCF',
                    },
                  ]}>
                  회사주소
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'sd_gothic_b',
                  marginTop: 30,
                }}>
                카테고리 설정
              </Text>
              <View style={styles.row}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => setSelectedCategory('simple')}>
                  <Image
                    source={
                      selectedCategory === 'simple' ? imgChecked : imgUnchecked
                    }
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'sd_gothic_b',
                      marginRight: 5,
                      color:
                        selectedCategory === 'simple' ? '#6078EA' : '#CFCFCF',
                    }}>
                    심플
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => setSelectedCategory('emotion')}>
                  <Image
                    source={
                      selectedCategory === 'emotion' ? imgChecked : imgUnchecked
                    }
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'sd_gothic_b',
                      marginRight: 5,
                      color:
                        selectedCategory === 'emotion' ? '#6078EA' : '#CFCFCF',
                    }}>
                    감성
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => setSelectedCategory('etc')}>
                  <Image
                    source={
                      selectedCategory === 'etc' ? imgChecked : imgUnchecked
                    }
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'sd_gothic_b',
                      color: selectedCategory === 'etc' ? '#6078EA' : '#CFCFCF',
                    }}>
                    기타
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => setSelectedCategory('fancy')}>
                  <Image
                    source={
                      selectedCategory === 'fancy' ? imgChecked : imgUnchecked
                    }
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'sd_gothic_b',
                      marginRight: 5,
                      color:
                        selectedCategory === 'fancy' ? '#6078EA' : '#CFCFCF',
                    }}>
                    화려함
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => setSelectedCategory('character')}>
                  <Image
                    source={
                      selectedCategory === 'character'
                        ? imgChecked
                        : imgUnchecked
                    }
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'sd_gothic_b',
                      marginRight: 5,
                      color:
                        selectedCategory === 'character'
                          ? '#6078EA'
                          : '#CFCFCF',
                    }}>
                    캐릭터
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'sd_gothic_b',
                  marginTop: 30,
                }}>
                포인트 설정
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 100,
                  borderBottomWidth: 3,
                  borderColor: '#6078EA',
                  justifyContent: 'space-evenly',
                }}>
                <TextInput
                  style={{
                    width: 70,
                    // height: 30,
                    padding: 0,
                    fontSize: 25,
                    textAlign: 'right',
                    // color: '6078EA',
                    // backgroundColor: 'green',
                  }}
                  // keyboardType="numeric"
                  keyboardType="decimal-pad"
                  defaultValue="0"
                  onChangeText={(text: string) => setPoint(Number(text))}
                />
                <Text
                  style={{
                    fontSize: 25,
                    // paddingBottom: 3,
                    fontFamily: 'sd_gothic_b',
                    color: '#6078EA',
                  }}>
                  P
                </Text>
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.btnNext}
                onPress={() => {
                  axios
                    .post(`https://testmat2.herokuapp.com/template/regist`, {
                      makerId: 1,
                      Category: selectedCategory,
                      Price: point,
                      fullData: JSON.stringify(temData),
                    })
                    .then((res: any) => {
                      res.data.code === 0 && navigation.navigate('');
                    });
                }}>
                <Text style={styles.btnText}>다음</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.btnNext, marginHorizontal: 12}}
                onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>이전</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
  },
  headerContainer: {
    height: screenHeight / 10,
  },
  content: {
    height: screenHeight * (8 / 10),
    alignContent: 'center',
    width: '90%',
  },
  footer: {
    width: screenWidth * (9 / 10),
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
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

  emptyView: {
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
});

export default Step3Screen;
