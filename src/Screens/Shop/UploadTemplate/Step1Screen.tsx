import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

import ImagePicker from 'react-native-image-picker';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

import {templateHeader1, plusCard} from '~/Assets/Images';

const deviceWidth = Dimensions.get('window').width

interface Props {
  route: any;
  navigation: any;
}

const parentWidth = Dimensions.get('window').width
const cardWidth = parentWidth * (8 / 10);
const cardHeight = cardWidth * (9 / 16);

const requestPermission = async (setBackData:any, setExistBackground:any, existBackground:number) => {
    await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
    .then(result => {
      if (result === RESULTS.GRANTED) {
        ImagePicker.launchImageLibrary({
          title: 'Load Photo',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        }, (response) => {
          if (response.didCancel) {
            console.log('## loading photo is canceled ##')
            
          }
          else if (response.error) {
            console.log('## loading photo error ##', response)
            
          }
          else {
            // console.log('### img data ###', response.data)
            // data.valueLogo = response.data
            setBackData(response.data)
            setExistBackground(existBackground + 1)
          }
          
        })
      }
    });
  }

const Step1 = ({route, navigation}: Props) => {
    const [existBackground, setExistBackground] = useState(0)
    const [backData, setBackData] = useState('')
  return (
    
    <View style={styles.container}>
      <View style={styles.headerContainer} >
        {/* <Header current={2} finish={[1]} /> */}
        <Image source={templateHeader1} style={{width: deviceWidth, height: '70%', marginTop: '3%'}} />
      </View>
      <View style={styles.scrollContainer} >
        <TouchableOpacity style={styles.backCard} onPressOut={() => requestPermission(setBackData, setExistBackground, existBackground)}>
            {/* {
            !existBackground
            ? <Image source={plusCard} style={styles.backEmpty} />
            : <Image source={{uri: backData}} style={styles.backEmpty} />
            } */}
            
            <Image source={backData.length > 0? {uri:`data:image/png;base64,${backData}`} : plusCard} style={styles.backEmpty} />

        </TouchableOpacity>

        <Text style={styles.description}>+ 버튼을 눌러 템플릿의 배경을 선택해주세요</Text>

        <View style={styles.btnConatiner}>
            <TouchableOpacity
                style={styles.btnNext}
                onPress={() => navigation.navigate('UploadStep2', {backData})}>
                <Text style={styles.btnText}>다음</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    // justifyContent: 'center'
    backgroundColor: 'white'
  },
  headerContainer: {
    flex: 1
  },
  scrollContainer: {
    flex: 8
  },
  cardContainer: {
    width: cardWidth,
    height: cardHeight,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    // padding: 5,
    marginTop: 15,
    borderWidth: 0
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
  backCard: {
      width: cardWidth,
      height: cardHeight,
      marginTop: 50
  },
  backEmpty: {
      width: '100%',
      height: '100%'
  },
  description: {
      marginTop: 30,
      textAlign: 'center',
  }
})

export default Step1;
