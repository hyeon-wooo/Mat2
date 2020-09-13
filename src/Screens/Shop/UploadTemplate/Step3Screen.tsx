import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Draggable from 'react-native-draggable';
import {imgChecked, templateHeader2, matIcon} from '~/Assets/Images';
import Slider from '@react-native-community/slider';
import {ColorWheel} from 'react-native-color-wheel';
import {toHsv, fromHsv} from 'react-native-color-picker';

LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const cardWidth = screenWidth * (8 / 10);
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
  const [currentFont, setCurrentFont] = useState('sd_gothic_m');
  const [currentColor, setCurrentColor] = useState('#000000');
  const [selected, setSelected] = useState('valueName');

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

  const [valueNameFont, setValueNameFont] = useState('sd_gothic_m');
  const [labelNameFont, setLabelNameFont] = useState('sd_gothic_m');
  const [valueEmailFont, setValueEmailFont] = useState('sd_gothic_m');
  const [labelEmailFont, setLabelEmailFont] = useState('sd_gothic_m');
  const [valuePhoneFont, setValuePhoneFont] = useState('sd_gothic_m');
  const [labelPhoneFont, setLabelPhoneFont] = useState('sd_gothic_m');
  const [valueCompanyFont, setValueCompanyFont] = useState('sd_gothic_m');
  const [labelCompanyFont, setLabelCompanyFont] = useState('sd_gothic_m');
  const [valueTeamFont, setValueTeamFont] = useState('sd_gothic_m');
  const [labelTeamFont, setLabelTeamFont] = useState('sd_gothic_m');
  const [valuePositionFont, setValuePositionFont] = useState('sd_gothic_m');
  const [labelPositionFont, setLabelPositionFont] = useState('sd_gothic_m');
  const [valueFaxFont, setValueFaxFont] = useState('sd_gothic_m');
  const [labelFaxFont, setLabelFaxFont] = useState('sd_gothic_m');
  const [valueComNumFont, setValueComNumFont] = useState('sd_gothic_m');
  const [labelComNumFont, setLabelComNumFont] = useState('sd_gothic_m');
  const [valueComAddrFont, setValueComAddrFont] = useState('sd_gothic_m');
  const [labelComAddrFont, setLabelComAddrFont] = useState('sd_gothic_m');

  const [valueNameColor, setValueNameColor] = useState('#000000');
  const [labelNameColor, setLabelNameColor] = useState('#000000');
  const [valueEmailColor, setValueEmailColor] = useState('#000000');
  const [labelEmailColor, setLabelEmailColor] = useState('#000000');
  const [valuePhoneColor, setValuePhoneColor] = useState('#000000');
  const [labelPhoneColor, setLabelPhoneColor] = useState('#000000');
  const [valueCompanyColor, setValueCompanyColor] = useState('#000000');
  const [labelCompanyColor, setLabelCompanyColor] = useState('#000000');
  const [valueTeamColor, setValueTeamColor] = useState('#000000');
  const [labelTeamColor, setLabelTeamColor] = useState('#000000');
  const [valuePositionColor, setValuePositionColor] = useState('#000000');
  const [labelPositionColor, setLabelPositionColor] = useState('#000000');
  const [valueFaxColor, setValueFaxColor] = useState('#000000');
  const [labelFaxColor, setLabelFaxColor] = useState('#000000');
  const [valueComNumColor, setValueComNumColor] = useState('#000000');
  const [labelComNumColor, setLabelComNumColor] = useState('#000000');
  const [valueComAddrColor, setValueComAddrColor] = useState('#000000');
  const [labelComAddrColor, setLabelComAddrColor] = useState('#000000');

  const changeColor = (color: string) => {
    switch (selected) {
      case 'valueName':
        setValueNameColor(color);
        break;
      case 'valueEmail':
        setValueEmailColor(color);
        break;
      case 'valuePhone':
        setValuePhoneColor(color);
        break;
      case 'valueCompany':
        setValueCompanyColor(color);
        break;
      case 'valueTeam':
        setValueTeamColor(color);
        break;
      case 'valuePosition':
        setValuePositionColor(color);
        break;
      case 'valueFax':
        setValueFaxColor(color);
        break;
      case 'valueComNum':
        setValueComNumColor(color);
        break;
      case 'valueComAddr':
        setValueComAddrColor(color);
        break;
      case 'labelName':
        setLabelNameColor(color);
        break;
      case 'labelEmail':
        setLabelEmailColor(color);
        break;
      case 'labelPhone':
        setLabelPhoneColor(color);
        break;
      case 'labelCompany':
        setLabelCompanyColor(color);
        break;
      case 'labelFax':
        setLabelFaxColor(color);
        break;
      case 'labelTeam':
        setLabelTeamColor(color);
        break;
      case 'labelPosition':
        setLabelPositionColor(color);
        break;
      case 'labelComNum':
        setLabelComNumColor(color);
        break;
      case 'labelComAddr':
        setLabelComAddrColor(color);
        break;
    }
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
                  selected === 'labelName'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelName');
                  setCurrentFont(labelNameFont);
                  setCurrentValue(labelNameSize);
                  setCurrentColor(labelNameColor);
                }}>
                <Text
                  style={{
                    fontSize: labelNameSize * (cardWidth / 100),
                    fontFamily: labelNameFont,
                    color: labelNameColor,
                  }}>
                  이름
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.company && (
              <TouchableOpacity
                style={[
                  labelStyle.company,
                  selected === 'labelCompany'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelCompany');
                  setCurrentFont(labelCompanyFont);
                  setCurrentValue(labelCompanySize);
                  setCurrentColor(labelCompanyColor);
                }}>
                <Text
                  style={{
                    fontSize: labelCompanySize * (cardWidth / 100),
                    fontFamily: labelCompanyFont,
                    color: labelCompanyColor,
                  }}>
                  회사명
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.email && (
              <TouchableOpacity
                style={[
                  labelStyle.email,
                  selected === 'labelEmail'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelEmail');
                  setCurrentFont(labelEmailFont);
                  setCurrentValue(labelEmailSize);
                  setCurrentColor(labelEmailColor);
                }}>
                <Text
                  style={{
                    fontSize: labelEmailSize * (cardWidth / 100),
                    fontFamily: labelEmailFont,
                    color: labelEmailColor,
                  }}>
                  이메일
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.phone && (
              <TouchableOpacity
                style={[
                  labelStyle.phone,
                  selected === 'labelPhone'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelPhone');
                  setCurrentFont(labelPhoneFont);
                  setCurrentValue(labelPhoneSize);
                  setCurrentColor(labelPhoneColor);
                }}>
                <Text
                  style={{
                    fontSize: labelPhoneSize * (cardWidth / 100),
                    fontFamily: labelPhoneFont,
                    color: labelPhoneColor,
                  }}>
                  연락처
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.team && (
              <TouchableOpacity
                style={[
                  labelStyle.team,
                  selected === 'labelTeam'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelTeam');
                  setCurrentFont(labelTeamFont);
                  setCurrentValue(labelTeamSize);
                  setCurrentColor(labelTeamColor);
                }}>
                <Text
                  style={{
                    fontSize: labelTeamSize * (cardWidth / 100),
                    fontFamily: labelTeamFont,
                    color: labelTeamColor,
                  }}>
                  부서
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.position && (
              <TouchableOpacity
                style={[
                  labelStyle.position,
                  selected === 'labelPosition'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelPosition');
                  setCurrentFont(labelPositionFont);
                  setCurrentValue(labelPositionSize);
                  setCurrentColor(labelPositionColor);
                }}>
                <Text
                  style={{
                    fontSize: labelPositionSize * (cardWidth / 100),
                    fontFamily: labelPositionFont,
                    color: labelPositionColor,
                  }}>
                  직책
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.fax && (
              <TouchableOpacity
                style={[
                  labelStyle.fax,
                  selected === 'labelFax'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelFax');
                  setCurrentFont(labelFaxFont);
                  setCurrentValue(labelFaxSize);
                  setCurrentColor(labelFaxColor);
                }}>
                <Text
                  style={{
                    fontSize: labelFaxSize * (cardWidth / 100),
                    fontFamily: labelFaxFont,
                    color: labelFaxColor,
                  }}>
                  Fax
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.comNum && (
              <TouchableOpacity
                style={[
                  labelStyle.comNum,
                  selected === 'labelComNum'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelComNum');
                  setCurrentFont(labelComNumFont);
                  setCurrentValue(labelComNumSize);
                  setCurrentColor(labelComNumColor);
                }}>
                <Text
                  style={{
                    fontSize: labelComNumSize * (cardWidth / 100),
                    fontFamily: labelComNumFont,
                    color: labelComNumColor,
                  }}>
                  회사번호
                </Text>
              </TouchableOpacity>
            )}
            {labelStyle.comAddr && (
              <TouchableOpacity
                style={[
                  labelStyle.comAddr,
                  selected === 'labelComAddr'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('labelComAddr');
                  setCurrentFont(labelComAddrFont);
                  setCurrentValue(labelComAddrSize);
                  setCurrentColor(labelComAddrColor);
                }}>
                <Text
                  style={{
                    fontSize: labelComAddrSize * (cardWidth / 100),
                    fontFamily: labelComAddrFont,
                    color: labelComAddrColor,
                  }}>
                  회사주소
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.name && (
              <TouchableOpacity
                style={[
                  valueStyle.name,
                  selected === 'valueName'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueName');
                  setCurrentFont(valueNameFont);
                  setCurrentValue(valueNameSize);
                  setCurrentColor(valueNameColor);
                }}>
                <Text
                  style={{
                    fontSize: valueNameSize * (cardWidth / 100),
                    fontFamily: valueNameFont,
                    color: valueNameColor,
                  }}>
                  홍길동
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.email && (
              <TouchableOpacity
                style={[
                  valueStyle.email,
                  selected === 'valueEmail'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueEmail');
                  setCurrentFont(valueEmailFont);
                  setCurrentValue(valueEmailSize);
                  setCurrentColor(valueEmailColor);
                }}>
                <Text
                  style={{
                    fontSize: valueEmailSize * (cardWidth / 100),
                    fontFamily: valueEmailFont,
                    color: valueEmailColor,
                  }}>
                  email@mat.com
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.phone && (
              <TouchableOpacity
                style={[
                  valueStyle.phone,
                  selected === 'valuePhone'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valuePhone');
                  setCurrentFont(valuePhoneFont);
                  setCurrentValue(valuePhoneSize);
                  setCurrentColor(valuePhoneColor);
                }}>
                <Text
                  style={{
                    fontSize: valuePhoneSize * (cardWidth / 100),
                    fontFamily: valuePhoneFont,
                    color: valuePhoneColor,
                  }}>
                  010-0000-0000
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.company && (
              <TouchableOpacity
                style={[
                  valueStyle.company,
                  selected === 'valueCompany'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueCompany');
                  setCurrentFont(valueCompanyFont);
                  setCurrentValue(valueCompanySize);
                  setCurrentColor(valueCompanyColor);
                }}>
                <Text
                  style={{
                    fontSize: valueCompanySize * (cardWidth / 100),
                    fontFamily: valueCompanyFont,
                    color: valueCompanyColor,
                  }}>
                  Mat Company
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.team && (
              <TouchableOpacity
                style={[
                  valueStyle.team,
                  selected === 'valueTeam'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueTeam');
                  setCurrentFont(valueTeamFont);
                  setCurrentValue(valueTeamSize);
                  setCurrentColor(valueTeamColor);
                }}>
                <Text
                  style={{
                    fontSize: valueTeamSize * (cardWidth / 100),
                    fontFamily: valueTeamFont,
                    color: valueTeamColor,
                  }}>
                  기획팀
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.position && (
              <TouchableOpacity
                style={[
                  valueStyle.position,
                  selected === 'valuePosition'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valuePosition');
                  setCurrentFont(valuePositionFont);
                  setCurrentValue(valuePositionSize);
                  setCurrentColor(valuePositionColor);
                }}>
                <Text
                  style={{
                    fontSize: valuePositionSize * (cardWidth / 100),
                    fontFamily: valuePositionFont,
                    color: valuePositionColor,
                  }}>
                  대리
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.fax && (
              <TouchableOpacity
                style={[
                  valueStyle.fax,
                  selected === 'valueFax'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueFax');
                  setCurrentFont(valueFaxFont);
                  setCurrentValue(valueFaxSize);
                  setCurrentColor(valueFaxColor);
                }}>
                <Text
                  style={{
                    fontSize: valueFaxSize * (cardWidth / 100),
                    fontFamily: valueFaxFont,
                    color: valueFaxColor,
                  }}>
                  02-000-0000
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.comNum && (
              <TouchableOpacity
                style={[
                  valueStyle.comNum,
                  selected === 'valueComNum'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueComNum');
                  setCurrentFont(valueComNumFont);
                  setCurrentValue(valueComNumSize);
                  setCurrentColor(valueComNumColor);
                }}>
                <Text
                  style={{
                    fontSize: valueComNumSize * (cardWidth / 100),
                    fontFamily: valueComNumFont,
                    color: valueComNumColor,
                  }}>
                  02-0000-0000
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.comAddr && (
              <TouchableOpacity
                style={[
                  valueStyle.comAddr,
                  selected === 'valueComAddr'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                ]}
                onPress={() => {
                  setSelected('valueComAddr');
                  setCurrentFont(valueComAddrFont);
                  setCurrentValue(valueComAddrSize);
                  setCurrentColor(valueComAddrColor);
                }}>
                <Text
                  style={{
                    fontSize: valueComAddrSize * (cardWidth / 100),
                    fontFamily: valueComAddrFont,
                    color: valueComAddrColor,
                  }}>
                  서울특별시 강남구 00동 00길 MAT타워 204호
                </Text>
              </TouchableOpacity>
            )}
            {valueStyle.logo && (
              <TouchableOpacity
                style={[
                  valueStyle.logo,
                  selected === 'valueLogo'
                    ? {borderColor: '#6078EA', borderWidth: 2}
                    : {borderColor: '#7D7D7D', borderWidth: 1},
                  {
                    width: valueLogoSize * (cardWidth / 100),
                    height: valueLogoSize * (cardWidth / 100),
                  },
                ]}
                onPress={() => {
                  setSelected('valueLogo');
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

        <View style={styles.editContainer}>
          <View style={styles.row}>
            <Text style={styles.menuText}>폰트</Text>
            <View style={{borderBottomWidth: 2, borderColor: '#6078EA'}}>
              <Picker
                style={{height: 50, width: 200}}
                // onValueChange={() => }
                selectedValue={currentFont}
                onValueChange={(itemValue: any, itemIndex) => {
                  setCurrentFont(itemValue);
                  switch (selected) {
                    case 'valueName':
                      setValueNameFont(itemValue);
                      break;
                    case 'valueEmail':
                      setValueEmailFont(itemValue);
                      break;
                    case 'valuePhone':
                      setValuePhoneFont(itemValue);
                      break;
                    case 'valueCompany':
                      setValueCompanyFont(itemValue);
                      break;
                    case 'valueTeam':
                      setValueTeamFont(itemValue);
                      break;
                    case 'valuePosition':
                      setValuePositionFont(itemValue);
                      break;
                    case 'valueFax':
                      setValueFaxFont(itemValue);
                      break;
                    case 'valueComNum':
                      setValueComNumFont(itemValue);
                      break;
                    case 'valueComAddr':
                      setValueComAddrFont(itemValue);
                      break;
                    case 'labelName':
                      setLabelNameFont(itemValue);
                      break;
                    case 'labelEmail':
                      setLabelEmailFont(itemValue);
                      break;
                    case 'labelPhone':
                      setLabelPhoneFont(itemValue);
                      break;
                    case 'labelCompany':
                      setLabelCompanyFont(itemValue);
                      break;
                    case 'labelFax':
                      setLabelFaxFont(itemValue);
                      break;
                    case 'labelTeam':
                      setLabelTeamFont(itemValue);
                      break;
                    case 'labelPosition':
                      setLabelPositionFont(itemValue);
                      break;
                    case 'labelComNum':
                      setLabelComNumFont(itemValue);
                      break;
                    case 'labelComAddr':
                      setLabelComAddrFont(itemValue);
                      break;
                  }
                }}>
                <Picker.Item label="산돌고딕 M" value="sd_gothic_m" />
                <Picker.Item label="산돌고딕 B" value="sd_gothic_b" />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.menuText}>폰트 크기</Text>
            <Slider
              style={styles.slider}
              thumbTintColor={'#6078EA'}
              // maximumTrackTintColor={'#7D7D7D'}
              maximumValue={selected === 'valueLogo' ? 60 : 20}
              minimumValue={0}
              minimumTrackTintColor="#307ecc"
              maximumTrackTintColor="#7D7D7D"
              step={0.5}
              value={currentValue}
              onValueChange={(v: number) => {
                setSliderValue(v);
                switch (selected) {
                  case 'valueName':
                    setValueNameSize(v);
                    break;
                  case 'valueEmail':
                    setValueEmailSize(v);
                    break;
                  case 'valuePhone':
                    setValuePhoneSize(v);
                    break;
                  case 'valueCompany':
                    setValueCompanySize(v);
                    break;
                  case 'valueTeam':
                    setValueTeamSize(v);
                    break;
                  case 'valuePosition':
                    setValuePositionSize(v);
                    break;
                  case 'valueFax':
                    setValueFaxSize(v);
                    break;
                  case 'valueComNum':
                    setValueComNumSize(v);
                    break;
                  case 'valueComAddr':
                    setValueComAddrSize(v);
                    break;
                  case 'valueLogo':
                    setValueLogoSize(v);
                    break;
                  case 'labelName':
                    setLabelNameSize(v);
                    break;
                  case 'labelEmail':
                    setLabelEmailSize(v);
                    break;
                  case 'labelPhone':
                    setLabelPhoneSize(v);
                    break;
                  case 'labelCompany':
                    setLabelCompanySize(v);
                    break;
                  case 'labelFax':
                    setLabelFaxSize(v);
                    break;
                  case 'labelTeam':
                    setLabelTeamSize(v);
                    break;
                  case 'labelPosition':
                    setLabelPositionSize(v);
                    break;
                  case 'labelComNum':
                    setLabelComNumSize(v);
                    break;
                  case 'labelComAddr':
                    setLabelComAddrSize(v);
                    break;
                }
              }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.menuText}>폰트 컬러</Text>
            <TouchableOpacity
              style={{...styles.colorBox, backgroundColor: '#000000'}}
              onPress={() => {
                changeColor('#000000');
              }}
            />
            <TouchableOpacity
              style={{...styles.colorBox, backgroundColor: '#8A00AB'}}
              onPress={() => {
                changeColor('#8A00AB');
              }}
            />
            <TouchableOpacity
              style={{...styles.colorBox, backgroundColor: '#6078EA'}}
              onPress={() => {
                changeColor('#6078EA');
              }}
            />
            <TouchableOpacity
              style={{...styles.colorBox, backgroundColor: '#EA6060'}}
              onPress={() => {
                changeColor('#EA6060');
              }}
            />
            <TouchableOpacity
              style={{...styles.colorBox, backgroundColor: '#17EAD9'}}
              onPress={() => changeColor('#17EAD9')}
            />
            <TouchableOpacity
              style={{...styles.colorBox, backgroundColor: '#ACBBFF'}}
              onPress={() => changeColor('#ACBBFF')}
            />
          </View>
          <ColorWheel
            initialColor="#000000"
            onColorChange={(color: any) => {
              switch (selected) {
                case 'valueName':
                  setValueNameColor(fromHsv(color));
                  break;
                case 'valueEmail':
                  setValueEmailColor(fromHsv(color));
                  break;
                case 'valuePhone':
                  setValuePhoneColor(fromHsv(color));
                  break;
                case 'valueCompany':
                  setValueCompanyColor(fromHsv(color));
                  break;
                case 'valueTeam':
                  setValueTeamColor(fromHsv(color));
                  break;
                case 'valuePosition':
                  setValuePositionColor(fromHsv(color));
                  break;
                case 'valueFax':
                  setValueFaxColor(fromHsv(color));
                  break;
                case 'valueComNum':
                  setValueComNumColor(fromHsv(color));
                  break;
                case 'valueComAddr':
                  setValueComAddrColor(fromHsv(color));
                  break;
                case 'labelName':
                  setLabelNameColor(fromHsv(color));
                  break;
                case 'labelEmail':
                  setLabelEmailColor(fromHsv(color));
                  break;
                case 'labelPhone':
                  setLabelPhoneColor(fromHsv(color));
                  break;
                case 'labelCompany':
                  setLabelCompanyColor(fromHsv(color));
                  break;
                case 'labelFax':
                  setLabelFaxColor(fromHsv(color));
                  break;
                case 'labelTeam':
                  setLabelTeamColor(fromHsv(color));
                  break;
                case 'labelPosition':
                  setLabelPositionColor(fromHsv(color));
                  break;
                case 'labelComNum':
                  setLabelComNumColor(fromHsv(color));
                  break;
                case 'labelComAddr':
                  setLabelComAddrColor(fromHsv(color));
                  break;
              }
            }}
            style={{width: Dimensions.get('window').width / 2}}
            thumbStyle={{height: 30, width: 30, borderRadius: 30}}
            useNativeDriver={false}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => {
            let temData2 = JSON.parse(JSON.stringify(temData));
            if (labelStyle.name) {
              temData2.label.style.name.fontFamily = labelNameFont;
              temData2.label.style.name.fontSize = labelNameSize;
              temData2.label.style.name.color = labelNameColor;
            }

            if (labelStyle.company) {
              temData2.label.style.company.fontFamily = labelCompanyFont;
              temData2.label.style.company.fontSize = labelCompanySize;
              temData2.label.style.company.color = labelCompanyColor;
            }
            if (labelStyle.email) {
              temData2.label.style.email.fontFamily = labelEmailFont;
              temData2.label.style.email.fontSize = labelEmailSize;
              temData2.label.style.email.color = labelEmailColor;
            }
            if (labelStyle.phone) {
              temData2.label.style.phone.fontFamily = labelPhoneFont;
              temData2.label.style.phone.fontSize = labelPhoneSize;
              temData2.label.style.phone.color = labelPhoneColor;
            }
            if (labelStyle.fax) {
              temData2.label.style.fax.fontFamily = labelFaxFont;
              temData2.label.style.fax.fontSize = labelFaxSize;
              temData2.label.style.fax.color = labelFaxColor;
            }
            if (labelStyle.team) {
              temData2.label.style.team.fontFamily = labelTeamFont;
              temData2.label.style.team.fontSize = labelTeamSize;
              temData2.label.style.team.color = labelTeamColor;
            }
            if (labelStyle.position) {
              temData2.label.style.position.fontFamily = labelPositionFont;
              temData2.label.style.position.fontSize = labelPositionSize;
              temData2.label.style.position.color = labelPositionColor;
            }
            if (labelStyle.comNum) {
              temData2.label.style.comNum.fontFamily = labelComNumFont;
              temData2.label.style.comNum.fontSize = labelComNumSize;
              temData2.label.style.comNum.color = labelComNumColor;
            }
            if (labelStyle.comAddr) {
              temData2.value.style.comAddr.fontFamily = labelComAddrFont;
              temData2.value.style.comAddr.fontSize = labelComAddrSize;
              temData2.value.style.comAddr.color = labelComAddrColor;
            }
            if (valueStyle.name) {
              temData2.value.style.name.fontFamily = valueNameFont;
              temData2.value.style.name.fontSize = valueNameSize;
              temData2.value.style.name.color = valueNameColor;
            }
            if (valueStyle.email) {
              temData2.value.style.email.fontFamily = valueEmailFont;
              temData2.value.style.email.fontSize = valueEmailSize;
              temData2.value.style.email.color = valueEmailColor;
            }
            if (valueStyle.phone) {
              temData2.value.style.phone.fontFamily = valuePhoneFont;
              temData2.value.style.phone.fontSize = valuePhoneSize;
              temData2.value.style.phone.color = valuePhoneColor;
            }
            if (valueStyle.company) {
              temData2.value.style.company.fontFamily = valueCompanyFont;
              temData2.value.style.company.fontSize = valueCompanySize;
              temData2.value.style.company.color = valueCompanyColor;
            }
            if (valueStyle.team) {
              temData2.value.style.team.fontFamily = valueTeamFont;
              temData2.value.style.team.fontSize = valueTeamSize;
              temData2.value.style.team.color = valueTeamColor;
            }
            if (valueStyle.position) {
              temData2.value.style.position.fontFamily = valuePositionFont;
              temData2.value.style.position.fontSize = valuePositionSize;
              temData2.value.style.position.color = valuePositionColor;
            }
            if (valueStyle.fax) {
              temData2.value.style.fax.fontFamily = valueFaxFont;
              temData2.value.style.fax.fontSize = valueFaxSize;
              temData2.value.style.fax.color = valueFaxColor;
            }
            if (valueStyle.comNum) {
              temData2.value.style.comNum.fontFamily = valueComNumFont;
              temData2.value.style.comNum.fontSize = valueComNumSize;
              temData2.value.style.comNum.color = valueComNumColor;
            }
            if (valueStyle.comAddr) {
              temData2.value.style.comAddr.fontFamily = valueComAddrFont;
              temData2.value.style.comAddr.fontSize = valueComAddrSize;
              temData2.value.style.comAddr.color = valueComAddrColor;
            }
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
    flex: 7.5,
    alignContent: 'center',
    // justifyContent: 'space-between',
    width: '90%',
  },
  footer: {
    flex: 1,
    // borderWidth: 1
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

  editContainer: {
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
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 5,
  },
  menuText: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    marginRight: 10,
  },
  slider: {
    width: screenWidth / 2,
    height: 40,
  },
  colorBox: {
    width: 20,
    height: 20,
    marginHorizontal: 3,
    borderRadius: 4,
  },
});

export default Step3Screen;
