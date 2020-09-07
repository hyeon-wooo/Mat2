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
  TouchableOpacityBase,
} from 'react-native';

import {templateHeader2, descriptionStep2, matIcon} from '~/Assets/Images';
import Draggable from 'react-native-draggable';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const cardWidth = screenWidth * (8 / 10);
const cardHeight = cardWidth * (9 / 16);

const cardLeft = screenWidth / 10;

interface Props {
  route: any;
  navigation: any;
}

const Step2Screen = ({route, navigation}: Props) => {
  const backData = route.params.backData;

  let temData = {
    label: {
      style: Object(),
      labelName: '이름',
      labelEmai: '이메일',
      labelPhone: '연락처',
      labelCompany: '회사명',
      labelComNum: '회사 번호',
      labelComAddr: '회사 주소',
      labelFax: 'Fax',
      labelTeam: '부서',
      labelPosition: '직책',
    },
    value: {
      background: {isColor: false, backData: backData},
      style: Object(),
      cardName: '',
      valueName: '홍길동',
      valueEmail: 'email@mat.com',
      valuePhone: '010-0000-0000',
      valueFax: '02-000-0000',
      valueCompany: 'Mat Company',
      valueTeam: '기획팀',
      valuePosition: '대리',
      valueComNum: '02-0000-0000',
      valueComAddr: '서울특별시 강남구 00동 00길 MAT타워 204호',
      valueLogo: '',
    },
  };

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
        <Text
          style={{
            top: 10,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          이름
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 10}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.label.style.name = Object();
              temData.label.style.name.left = pLeft;
              temData.label.style.name.top = pTop;
              temData.label.style.name.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.label.style.name;
            }
          }}>
          <Text style={styles.test1}>이름</Text>
        </Draggable>
        <Draggable
          x={200}
          y={cardHeight + 10}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.name = Object();
              temData.value.style.name.left = pLeft;
              temData.value.style.name.top = pTop;
              temData.value.style.name.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.name;
            }
          }}>
          <Text style={styles.test1}>홍길동</Text>
        </Draggable>

        <Text
          style={{
            top: 23,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          연락처
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 43}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.label.style.phone = Object();
              temData.label.style.phone.left = pLeft;
              temData.label.style.phone.top = pTop;
              temData.label.style.phone.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.label.style.phone;
            }
          }}>
          <Text style={styles.test1}>연락처</Text>
        </Draggable>
        <Draggable
          x={200}
          y={cardHeight + 43}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.phone = Object();
              temData.value.style.phone.left = pLeft;
              temData.value.style.phone.top = pTop;
              temData.value.style.phone.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.phone;
            }
          }}>
          <Text style={styles.test1}>010-0000-0000</Text>
        </Draggable>

        <Text
          style={{
            top: 33,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          이메일
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 76}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.label.style.email = Object();
              temData.label.style.email.left = pLeft;
              temData.label.style.email.top = pTop;
              temData.label.style.email.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.label.style.email;
            }
          }}>
          <Text style={styles.test1}>이메일</Text>
        </Draggable>
        <Draggable
          x={200}
          y={cardHeight + 76}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.email = Object();
              temData.value.style.email.left = pLeft;
              temData.value.style.email.top = pTop;
              temData.value.style.email.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.email;
            }
          }}>
          <Text style={styles.test1}>email@mat.com</Text>
        </Draggable>

        <Text
          style={{
            top: 45,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          회사명
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 109}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.label.style.company = Object();
              temData.label.style.company.left = pLeft;
              temData.label.style.company.top = pTop;
              temData.label.style.company.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.label.style.company;
            }
          }}>
          <Text style={styles.test1}>회사명</Text>
        </Draggable>
        <Draggable
          x={200}
          y={cardHeight + 109}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.company = Object();
              temData.value.style.company.left = pLeft;
              temData.value.style.company.top = pTop;
              temData.value.style.company.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.company;
            }
          }}>
          <Text style={styles.test1}>Mat Company</Text>
        </Draggable>

        <Text
          style={{
            top: 58,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          부서
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 142}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.label.style.team = Object();
              temData.label.style.team.left = pLeft;
              temData.label.style.team.top = pTop;
              temData.label.style.team.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.label.style.team;
            }
          }}>
          <Text style={styles.test1}>부서</Text>
        </Draggable>
        <Draggable
          x={200}
          y={cardHeight + 142}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.team = Object();
              temData.value.style.team.left = pLeft;
              temData.value.style.team.top = pTop;
              temData.value.style.team.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.team;
            }
          }}>
          <Text style={styles.test1}>기획팀</Text>
        </Draggable>

        <Text
          style={{
            top: 70,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          직책
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 175}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.label.style.position = Object();
              temData.label.style.position.left = pLeft;
              temData.label.style.position.top = pTop;
              temData.label.style.position.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.label.style.position;
            }
          }}>
          <Text style={styles.test1}>직책</Text>
        </Draggable>
        <Draggable
          x={200}
          y={cardHeight + 175}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.position = Object();
              temData.value.style.position.left = pLeft;
              temData.value.style.position.top = pTop;
              temData.value.style.position.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.position;
            }
          }}>
          <Text style={styles.test1}>대리</Text>
        </Draggable>

        <Text
          style={{
            top: 82,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          회사 번호
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 208}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.label.style.comNum = Object();
              temData.label.style.comNum.left = pLeft;
              temData.label.style.comNum.top = pTop;
              temData.label.style.comNum.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.label.style.comNum;
            }
          }}>
          <Text style={styles.test1}>회사 번호</Text>
        </Draggable>
        <Draggable
          x={200}
          y={cardHeight + 208}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.comNum = Object();
              temData.value.style.comNum.left = pLeft;
              temData.value.style.comNum.top = pTop;
              temData.value.style.comNum.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.comNum;
            }
          }}>
          <Text style={styles.test1}>02-0000-0000</Text>
        </Draggable>

        <Text
          style={{
            top: 92,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          팩스
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 241}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.label.style.fax = Object();
              temData.label.style.fax.left = pLeft;
              temData.label.style.fax.top = pTop;
              temData.label.style.fax.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.label.style.fax;
            }
          }}>
          <Text style={styles.test1}>Fax</Text>
        </Draggable>
        <Draggable
          x={200}
          y={cardHeight + 241}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.fax = Object();
              temData.value.style.fax.left = pLeft;
              temData.value.style.fax.top = pTop;
              temData.value.style.fax.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.fax;
            }
          }}>
          <Text style={styles.test1}>02-000-0000</Text>
        </Draggable>

        <Text
          style={{
            top: 105,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          회사 주소
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 274}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.label.style.comAddr = Object();
              temData.label.style.comAddr.left = pLeft;
              temData.label.style.comAddr.top = pTop;
              temData.label.style.comAddr.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.label.style.fax;
            }
          }}>
          <Text style={styles.test1}>회사 주소</Text>
        </Draggable>
        <Draggable
          x={100}
          y={cardHeight + 307}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.comAddr = Object();
              temData.value.style.comAddr.left = pLeft;
              temData.value.style.comAddr.top = pTop;
              temData.value.style.comAddr.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.comAddr;
            }
          }}>
          <Text style={styles.test1}>
            서울특별시 강남구 00동 00길 MAT타워 204호
          </Text>
        </Draggable>

        <Text
          style={{
            top: 150,
            fontSize: 17,
            marginLeft: 10,
            fontFamily: 'sd_gothic_m',
          }}>
          회사 로고
        </Text>
        <Draggable
          x={100}
          y={cardHeight + 340}
          z={100}
          minX={0}
          minY={0}
          onDragRelease={(e: any, ges: any, bounds: any) => {
            const currentLeft = bounds.left;
            const currentTop = bounds.top;
            if (
              currentLeft >= cardLeft &&
              currentLeft <= cardLeft + cardWidth &&
              currentTop <= cardHeight
            ) {
              const pLeft = `${
                Math.round(((currentLeft - cardLeft) / cardWidth) * 1000) / 10
              }%`;
              const pTop = `${
                Math.round((currentTop / cardHeight) * 1000) / 10
              }%`;
              temData.value.style.logo = Object();
              temData.value.style.logo.left = pLeft;
              temData.value.style.logo.top = pTop;
              temData.value.style.logo.position = 'absolute';
            } else {
              // temData.value.style에서 name을 제거
              delete temData.value.style.logo;
            }
          }}>
          <Image
            source={matIcon}
            style={{
              width: 20 * (cardWidth / 100),
              height: 20 * (cardWidth / 100),
            }}
          />
        </Draggable>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.push('UploadStep3', {temData})}>
          <Text style={styles.btnText}>다음</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btnNext, marginHorizontal: 12}}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>이전</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  test1: {
    borderWidth: 1,
    // width: '100%',
    // fontSize: 13,
    fontSize: 4 * (cardWidth / 100),
    padding: 3,
    borderColor: '#6078EA',
    borderRadius: 4,
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
    width: '100%',
    // left: '5%',
    // borderWidth: 1,
  },
  footer: {
    flex: 1,
    // borderWidth: 1,
    width: '90%',
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
    // borderWidth: 1,
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
