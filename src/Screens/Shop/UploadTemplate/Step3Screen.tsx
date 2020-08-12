import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Draggable from 'react-native-draggable';
import {imgChecked, templateHeader2, matIcon} from '~/Assets/Images';
import Slider from '@react-native-community/slider';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const cardWidth = deviceWidth * (8 / 10);
const cardHeight = cardWidth * (9 / 16);

interface Props {
  route: any;
  navigation: any;
}

const Step3Screen = ({route, navigation}: Props) => {
  const temData = route.params.temData;
  const labelStyle = temData.label.style;
  const valueStyle = temData.value.style;
  const [sliderValue, setSliderValue] = useState(4);
  const [currentValue, setCurrentValue] = useState(4);
  const [selected, setSelected] = useState('valueNameSize');
  const [valueNameSize, setValueNameSize] = useState(4);
  const [labelNameSize, setLabelNameSize] = useState(4);
  const [valueEmailSize, setValueEmailSize] = useState(4);
  const [labelEmailSize, setLabelEmailSize] = useState(4);
  const [valuePhoneSize, setValuePhoneSize] = useState(4);
  const [labelPhoneSize, setLabelPhoneSize] = useState(4);
  const [valueCompanySize, setValueCompanySize] = useState(4);
  const [labelCompanySize, setLabelCompanySize] = useState(4);
  const [valueTeamSize, setValueTeamSize] = useState(4);
  const [labelTeamSize, setLabelTeamSize] = useState(4);
  const [valuePositionSize, setValuePositionSize] = useState(4);
  const [labelPositionSize, setLabelPositionSize] = useState(4);
  const [valueFaxSize, setValueFaxSize] = useState(4);
  const [labelFaxSize, setLabelFaxSize] = useState(4);
  const [valueComNumSize, setValueComNumSize] = useState(4);
  const [labelComNumSize, setLabelComNumSize] = useState(4);
  const [valueComAddrSize, setValueComAddrSize] = useState(4);
  const [labelComAddrSize, setLabelComAddrSize] = useState(4);
  const [valueLogoSize, setValueLogoSize] = useState(20);

  console.log('###', valueStyle.logo);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={templateHeader2}
          style={{width: deviceWidth, height: '70%', marginTop: '3%'}}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={{
                uri: `data:image/png;base64,${temData.value.background.backData}`,
              }}
              style={{width: cardWidth, height: cardHeight}}
            />
            {labelStyle.name && (
              <TouchableOpacity
                style={[
                  labelStyle.name,
                  selected === 'labelNameSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelNameSize');
                  setCurrentValue(labelNameSize);
                }}>
                <Text style={{fontSize: labelNameSize * (cardWidth / 100)}}>
                  이름
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.company && (
              <TouchableOpacity
                style={[
                  labelStyle.company,
                  selected === 'labelCompanySize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelCompanySize');
                  setCurrentValue(labelCompanySize);
                }}>
                <Text style={{fontSize: labelCompanySize * (cardWidth / 100)}}>
                  회사명
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.email && (
              <TouchableOpacity
                style={[
                  labelStyle.email,
                  selected === 'labelEmailSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelEmailSize');
                  setCurrentValue(labelEmailSize);
                }}>
                <Text style={{fontSize: labelEmailSize * (cardWidth / 100)}}>
                  이메일
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.phone && (
              <TouchableOpacity
                style={[
                  labelStyle.phone,
                  selected === 'labelPhoneSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelPhoneSize');
                  setCurrentValue(labelPhoneSize);
                }}>
                <Text style={{fontSize: labelPhoneSize * (cardWidth / 100)}}>
                  연락처
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.team && (
              <TouchableOpacity
                style={[
                  labelStyle.team,
                  selected === 'labelTeamSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelTeamSize');
                  setCurrentValue(labelTeamSize);
                }}>
                <Text style={{fontSize: labelTeamSize * (cardWidth / 100)}}>
                  부서
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.position && (
              <TouchableOpacity
                style={[
                  labelStyle.position,
                  selected === 'labelPositionSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelPositionSize');
                  setCurrentValue(labelPositionSize);
                }}>
                <Text style={{fontSize: labelPositionSize * (cardWidth / 100)}}>
                  직책
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.fax && (
              <TouchableOpacity
                style={[
                  labelStyle.fax,
                  selected === 'labelFaxSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelFaxSize');
                  setCurrentValue(labelFaxSize);
                }}>
                <Text style={{fontSize: labelFaxSize * (cardWidth / 100)}}>
                  Fax
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.comNum && (
              <TouchableOpacity
                style={[
                  labelStyle.comNum,
                  selected === 'labelComNumSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelComNumSize');
                  setCurrentValue(labelComNumSize);
                }}>
                <Text style={{fontSize: labelComNumSize * (cardWidth / 100)}}>
                  회사번호
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.comAddr && (
              <TouchableOpacity
                style={[
                  labelStyle.comAddr,
                  selected === 'labelComAddrSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelComADdrSize');
                  setCurrentValue(labelComAddrSize);
                }}>
                <Text style={{fontSize: labelComAddrSize * (cardWidth / 100)}}>
                  회사주소
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.name && (
              <TouchableOpacity
                style={[
                  valueStyle.name,
                  selected === 'valueNameSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueNameSize');
                  setCurrentValue(valueNameSize);
                }}>
                <Text style={{fontSize: valueNameSize * (cardWidth / 100)}}>
                  홍길동
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.email && (
              <TouchableOpacity
                style={[
                  valueStyle.email,
                  selected === 'valueEmailSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueEmailSize');
                  setCurrentValue(valueEmailSize);
                }}>
                <Text style={{fontSize: valueEmailSize * (cardWidth / 100)}}>
                  email@mat.com
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.phone && (
              <TouchableOpacity
                style={[
                  valueStyle.phone,
                  selected === 'valuePhoneSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valuePhoneSize');
                  setCurrentValue(valuePhoneSize);
                }}>
                <Text style={{fontSize: valuePhoneSize * (cardWidth / 100)}}>
                  010-0000-0000
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.company && (
              <TouchableOpacity
                style={[
                  valueStyle.company,
                  selected === 'valueCompanySize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueCompanySize');
                  setCurrentValue(valueCompanySize);
                }}>
                <Text style={{fontSize: valueCompanySize * (cardWidth / 100)}}>
                  Mat Company
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.team && (
              <TouchableOpacity
                style={[
                  valueStyle.team,
                  selected === 'valueTeamSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueTeamSize');
                  setCurrentValue(valueTeamSize);
                }}>
                <Text style={{fontSize: valueTeamSize * (cardWidth / 100)}}>
                  기획팀
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.position && (
              <TouchableOpacity
                style={[
                  valueStyle.position,
                  selected === 'valuePositionSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valuePositionSize');
                  setCurrentValue(valuePositionSize);
                }}>
                <Text style={{fontSize: valuePositionSize * (cardWidth / 100)}}>
                  대리
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.fax && (
              <TouchableOpacity
                style={[
                  valueStyle.fax,
                  selected === 'valueFaxSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueFaxSize');
                  setCurrentValue(valueFaxSize);
                }}>
                <Text style={{fontSize: valueFaxSize * (cardWidth / 100)}}>
                  02-000-0000
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.comNum && (
              <TouchableOpacity
                style={[
                  valueStyle.comNum,
                  selected === 'valueComNumSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueComNumSize');
                  setCurrentValue(valueComNumSize);
                }}>
                <Text style={{fontSize: valueComNumSize * (cardWidth / 100)}}>
                  02-0000-0000
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.comAddr && (
              <TouchableOpacity
                style={[
                  valueStyle.comAddr,
                  selected === 'valueComAddrSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueComAddrSize');
                  setCurrentValue(valueComAddrSize);
                }}>
                <Text style={{fontSize: valueComAddrSize * (cardWidth / 100)}}>
                  서울특별시 강남구 00동 00길 MAT타워 204호
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.logo && (
              <TouchableOpacity
                style={[
                  valueStyle.logo,
                  selected === 'valueLogoSize'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                  {
                    width: valueLogoSize * (cardWidth / 100),
                    height: valueLogoSize * (cardWidth / 100),
                  },
                ]}
                onPress={() => {
                  setSelected('valueLogoSize');
                  setCurrentValue(valueLogoSize);
                }}>
                <Image
                  source={matIcon}
                  style={{
                    width: valueLogoSize * (cardWidth / 100),
                    height: valueLogoSize * (cardWidth / 100),
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.emptyView}>
          {/*Slider with max, min, step and initial value*/}
          <Slider
            maximumValue={selected === 'valueLogoSize' ? 60 : 20}
            minimumValue={0}
            minimumTrackTintColor="#307ecc"
            maximumTrackTintColor="#000000"
            step={0.5}
            value={currentValue}
            onValueChange={(v: number) => {
              setSliderValue(v);
              switch (selected) {
                case 'valueNameSize':
                  setValueNameSize(v);
                  break;
                case 'valueEmailSize':
                  setValueEmailSize(v);
                  break;
                case 'valuePhoneSize':
                  setValuePhoneSize(v);
                  break;
                case 'valueCompanySize':
                  setValueCompanySize(v);
                  break;
                case 'valueTeamSize':
                  setValueTeamSize(v);
                  break;
                case 'valuePositionSize':
                  setValuePositionSize(v);
                  break;
                case 'valueFaxSize':
                  setValueFaxSize(v);
                  break;
                case 'valueComNumSize':
                  setValueComNumSize(v);
                  break;
                case 'valueComAddrSize':
                  setValueComAddrSize(v);
                  break;
                case 'valueLogoSize':
                  setValueLogoSize(v);
                  break;
                case 'labelNameSize':
                  setLabelNameSize(v);
                  break;
                case 'labelEmailSize':
                  setLabelEmailSize(v);
                  break;
                case 'labelPhoneSize':
                  setLabelPhoneSize(v);
                  break;
                case 'labelCompanySize':
                  setLabelCompanySize(v);
                  break;
                case 'labelFaxSize':
                  setLabelFaxSize(v);
                  break;
                case 'labelTeamSize':
                  setLabelTeamSize(v);
                  break;
                case 'labelPositionSize':
                  setLabelPositionSize(v);
                  break;
                case 'labelComNumSize':
                  setLabelComNumSize(v);
                  break;
                case 'labelComAddrSize':
                  setLabelComAddrSize(v);
                  break;
              }
            }}
            style={{width: 300, height: 40}}
          />
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => {
                let temData2 = JSON.parse(JSON.stringify(temData));
                if (labelStyle.name)
                  temData2.label.style.name.fontSize = labelNameSize;
                if (labelStyle.company)
                  temData2.label.style.company.fontSize = labelCompanySize;
                if (labelStyle.email)
                  temData2.label.style.email.fontSize = labelEmailSize;
                if (labelStyle.phone)
                  temData2.label.style.phone.fontSize = labelPhoneSize;
                if (labelStyle.fax)
                  temData2.label.style.fax.fontSize = labelFaxSize;
                if (labelStyle.team)
                  temData2.label.style.team.fontSize = labelTeamSize;
                if (labelStyle.position)
                  temData2.label.style.position.fontSize = labelPositionSize;
                if (labelStyle.comNum)
                  temData2.label.style.comNum.fontSize = labelComNumSize;
                if (labelStyle.comAddr)
                  temData2.value.style.comAddr.fontSize = labelComAddrSize;
                if (valueStyle.name)
                  temData2.value.style.name.fontSize = valueNameSize;
                if (valueStyle.email)
                  temData2.value.style.email.fontSize = valueEmailSize;
                if (valueStyle.phone)
                  temData2.value.style.phone.fontSize = valuePhoneSize;
                if (valueStyle.company)
                  temData2.value.style.company.fontSize = valueCompanySize;
                if (valueStyle.team)
                  temData2.value.style.team.fontSize = valueTeamSize;
                if (valueStyle.position)
                  temData2.value.style.position.fontSize = valuePositionSize;
                if (valueStyle.fax)
                  temData2.value.style.fax.fontSize = valueFaxSize;
                if (valueStyle.comNum)
                  temData2.value.style.comNum.fontSize = valueComNumSize;
                if (valueStyle.comAddr)
                  temData2.value.style.comAddr.fontSize = valueComAddrSize;
                if (valueStyle.logo) {
                  temData2.value.style.logo.width = valueLogoSize;
                  temData2.value.style.logo.height = valueLogoSize;
                }
                navigation.push('UploadStep4', {temData: temData2});
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
  );
};

const styles = StyleSheet.create({
  test1: {
    borderWidth: 1,
    // width: '100%',
    fontSize: 20,
    padding: 3,
  },
  container: {
    flex: 1,
    width: '100%',
    // justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    // justifyContent: 'center'
    // borderWidth:1
  },
  headerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  content: {
    flex: 8.5,
    alignContent: 'center',
    width: '90%',
  },
  footer: {
    // flex: 1,
    // borderWidth: 1,
    width: '100%',
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
    flex: 4,
    borderWidth: 1,
    alignItems: 'center',
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
});

export default Step3Screen;
