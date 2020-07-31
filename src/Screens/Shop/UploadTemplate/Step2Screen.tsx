import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image, TouchableOpacity, NavigatorIOS } from 'react-native';

import {templateHeader2, descriptionStep2} from '~/Assets/Images';
import CheckableLabel from '~/components/CheckableLabel';

const deviceWidth = Dimensions.get('window').width

interface Props {
  route: any;
  navigation: any;
}

// const parentWidth = Dimensions.get('window').width
// const cardWidth = parentWidth * (8 / 10);
// const cardHeight = cardWidth * (9 / 16);

const Step2Screen = ({route, navigation}: Props) => {
    let checkList = new Array()  
  return (
    
    <View style={styles.container}>
      <View style={styles.headerContainer} >
        <Image source={templateHeader2} style={{width: deviceWidth, height: '70%', marginTop: '3%'}} />
      </View>
      <View style={styles.scrollContainer} >
        <ScrollView>
            <View style={styles.descriptionContainer}>
            <Image source={descriptionStep2} style={styles.imgDescription} />
            </View>
          
          <CheckableLabel value='name' label='이름' checkList={checkList} />
          <CheckableLabel value='company' label='회사명' checkList={checkList} />
          <CheckableLabel value='email' label='이메일' checkList={checkList} />
          <CheckableLabel value='phone' label='연락처' checkList={checkList} />
          <CheckableLabel value='fax' label='FAX' checkList={checkList} />
          <CheckableLabel value='position' label='직책' checkList={checkList} />
          <CheckableLabel value='team' label='부서' checkList={checkList} />
          <CheckableLabel value='comAddr' label='회사 주소' checkList={checkList} />
          <CheckableLabel value='comNum' label='회사 번호' checkList={checkList} />
          
          <View style={styles.btnConatiner}>
            <TouchableOpacity
              style={styles.btnNext}
              onPressOut={() => navigation.navigate('UploadStep3', checkList)}>
              <Text style={styles.btnText}>다음</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    // justifyContent: 'center'
    // borderWidth:1
  },
  headerContainer: {
    flex: 1
  },
  scrollContainer: {
    flex: 8,
    width: '90%',
    // left: '5%',
    // borderWidth: 1
  },
  row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
  },
  icon: {
      width: 30,
      height: 30
  },
  text: {
    fontFamily: 'sd_m'
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
    alignItems: 'center'
  },
  imgDescription: {
    width: '100%',
    height: '40%'
  }
})

export default Step2Screen;
