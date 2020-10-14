import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import db from '~/DB';
import {imgPencil2} from '~/Assets/Images';

const deviceWidth = Dimensions.get('window').width;
const screenWidth = deviceWidth * (9 / 10);
const screenHeight = Dimensions.get('screen').height;

// const cardWidth = deviceWidth * (10 / 10);
const cardHeight = screenWidth * (9 / 16);

interface Props {
  navigation: any;
  route: any;
}
const EditSingleScreen = ({navigation, route}: Props) => {
  const [modeEdit, setModeEdit] = useState(false);

  const {fullData} = route.params.card;
  const thisCardId = route.params.card.id;

  const cardData = JSON.parse(fullData);
  const cardValue = cardData.value;
  const label = cardData.label;
  const valueStyle = cardValue.style;

  // console.log('### DATA ### ', Object.keys(cardValue));
  // console.log('### DATA ### ', cardValue);

  const [memo, setMemo] = useState(route.params.card.memo || '');
  const [valueName, setValueName] = useState(cardValue.valueName);
  const [valueCompany, setValueCompany] = useState(cardValue.valueCompany);
  const [valuePosition, setValuePosition] = useState(cardValue.valuePosition);
  const [valueTeam, setValueTeam] = useState(cardValue.valueTeam || '');
  const [valuePhone, setValuePhone] = useState(cardValue.valuePhone || '');
  const [valueEmail, setValueEmail] = useState(cardValue.valueEmail || '');
  const [valueComAddr, setValueComAddr] = useState(
    cardValue.valueComAddr || '',
  );
  const [valueComNum, setValueComNum] = useState(cardValue.valueComNum || '');
  const [valueFax, setValueFax] = useState(cardValue.valueFax || '');

  return (
    <KeyboardAwareScrollView
      style={{width: '100%', height: '100%', backgroundColor: '#FBFBFB'}}
      keyboardShouldPersistTaps="always">
      <View>
        <View style={styles.header}>
          <View style={styles.headerSection1}>
            <AntDesign
              name="arrowleft"
              size={27}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.title}>{cardValue.valueName}</Text>
          </View>

          {!modeEdit ? (
            <View style={styles.headerSection2}>
              <TouchableOpacity
                onPressOut={() => {
                  setModeEdit(true);
                }}>
                <Text style={styles.textFinish}>편집</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressOut={() => {
                  db.getGroupIdByCardId(thisCardId)
                    .then((groupId: any) =>
                      db.deleteCardById(thisCardId, groupId),
                    )
                    .then(() => navigation.goBack());
                }}>
                <Text style={{...styles.textFinish, color: '#EA6060'}}>
                  삭제
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.headerSection2}>
              <TouchableOpacity
                onPressOut={() => {
                  cardData.value.valueName = valueName;
                  cardData.value.valuePhone = valuePhone;
                  cardData.value.valueEmail = valueEmail;
                  cardData.value.valueFax = valueFax;
                  cardData.value.valueCompany = valueCompany;
                  cardData.value.valueTeam = valueTeam;
                  cardData.value.valuePosition = valuePosition;
                  cardData.value.valueComAddr = valueComAddr;
                  cardData.value.valueComNum = valueComNum;
                  const newFullData = JSON.stringify(cardData);

                  db.updateCardValue({
                    fullData: newFullData,
                    name: valueName,
                    position: valuePosition,
                    company: valueCompany,
                    team: valueTeam,
                    memo: memo,
                    id: thisCardId,
                  }).then(() => {
                    setModeEdit(false);
                  });
                }}>
                <Text style={styles.textFinish}>완료</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.content}>
          <View
            style={[
              styles.cardConatiner,
              cardValue.background.isColor
                ? {backgroundColor: cardValue.background.color}
                : {},
            ]}>
            {!cardValue.background.isColor && (
              <Image
                source={{
                  uri: `data:image/png;base64,${cardValue.background.backData}`,
                }}
                style={[{width: screenWidth, height: cardHeight}]}
              />
            )}
            {cardValue.valueLogo.length > 0 && (
              <Image
                source={{uri: `data:image/png;base64,${cardValue.valueLogo}`}}
                style={[
                  valueStyle.logo || {},
                  {
                    position: 'absolute',
                    width: valueStyle.logo.width * (screenWidth / 100),
                    height: valueStyle.logo.height * (screenWidth / 100),
                  },
                ]}
              />
            )}
            {/* LABEL */}
            {label.style.name && (
              <Text
                style={[
                  {position: 'absolute'},
                  label.style.name || {},
                  label.style.name.fontSize
                    ? {
                        fontSize:
                          label.style.name.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {label.labelName}
              </Text>
            )}

            {label.style.email && (
              <Text
                style={[
                  {position: 'absolute'},
                  label.style.email || {},
                  label.style.email.fontSize
                    ? {
                        fontSize:
                          label.style.email.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {label.labelEmail}
              </Text>
            )}
            {label.style.phone && (
              <Text
                style={[
                  {position: 'absolute'},
                  label.style.phone || {},
                  label.style.phone.fontSize
                    ? {
                        fontSize:
                          label.style.phone.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {label.labelPhone}
              </Text>
            )}
            {label.style.fax && (
              <Text
                style={[
                  {position: 'absolute'},
                  label.style.fax || {},
                  label.style.fax.fontSize
                    ? {fontSize: label.style.fax.fontSize * (screenWidth / 100)}
                    : {},
                ]}>
                {label.labelFax}
              </Text>
            )}
            {label.style.company && (
              <Text
                style={[
                  {position: 'absolute'},
                  label.style.company || {},
                  label.style.company.fontSize
                    ? {
                        fontSize:
                          label.style.company.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {label.labelCompany}
              </Text>
            )}
            {label.style.position && (
              <Text
                style={[
                  {position: 'absolute'},
                  label.style.position || {},
                  label.style.position.fontSize
                    ? {
                        fontSize:
                          label.style.position.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {label.labelPosition}
              </Text>
            )}
            {label.style.team && (
              <Text
                style={[
                  {position: 'absolute'},
                  label.style.team || {},
                  label.style.team.fontSize
                    ? {
                        fontSize:
                          label.style.team.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {label.labelTeam}
              </Text>
            )}
            {label.style.comAddr && (
              <Text
                style={[
                  {position: 'absolute'},
                  label.style.comAddr || {},
                  label.style.comAddr.fontSize
                    ? {
                        fontSize:
                          label.style.comAddr.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {label.labelComAddr}
              </Text>
            )}
            {label.style.comNum && (
              <Text
                style={[
                  {position: 'absolute'},
                  label.style.comNum || {},
                  label.style.comNum.fontSize
                    ? {
                        fontSize:
                          label.style.comNum.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {label.labelComNum}
              </Text>
            )}

            {/* VALUE */}
            {valueStyle.name && (
              <Text
                style={[
                  valueStyle.name,
                  {position: 'absolute'},
                  valueStyle.name.fontSize
                    ? {fontSize: valueStyle.name.fontSize * (screenWidth / 100)}
                    : {},
                ]}>
                {valueName}
              </Text>
            )}
            {valueStyle.company && (
              <Text
                style={[
                  valueStyle.company,
                  {position: 'absolute'},
                  // {fontSize: 15, color: "orange", left: "15%", top: "15%"},
                  valueStyle.company.fontSize
                    ? {
                        fontSize:
                          valueStyle.company.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {valueCompany}
              </Text>
            )}
            {valueStyle.team && (
              <Text
                style={[
                  valueStyle.team,
                  {position: 'absolute'},
                  valueStyle.team.fontSize
                    ? {fontSize: valueStyle.team.fontSize * (screenWidth / 100)}
                    : {},
                ]}>
                {valueTeam}
              </Text>
            )}
            {valueStyle.position && (
              <Text
                style={[
                  valueStyle.position,
                  {position: 'absolute'},
                  valueStyle.position.fontSize
                    ? {
                        fontSize:
                          valueStyle.position.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {valuePosition}
              </Text>
            )}
            {valueStyle.email && (
              <Text
                style={[
                  valueStyle.email,
                  {position: 'absolute'},
                  valueStyle.email.fontSize
                    ? {
                        fontSize:
                          valueStyle.email.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {valueEmail}
              </Text>
            )}
            {valueStyle.phone && (
              <Text
                style={[
                  valueStyle.phone,
                  {position: 'absolute'},
                  valueStyle.phone.fontSize
                    ? {
                        fontSize:
                          valueStyle.phone.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {valuePhone}
              </Text>
            )}
            {valueStyle.comAddr && (
              <Text
                style={[
                  valueStyle.comAddr,
                  {position: 'absolute'},
                  valueStyle.comAddr.fontSize
                    ? {
                        fontSize:
                          valueStyle.comAddr.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {valueComAddr}
              </Text>
            )}
            {valueStyle.comNum && (
              <Text
                style={[
                  valueStyle.comNum,
                  {position: 'absolute'},
                  valueStyle.comNum.fontSize
                    ? {
                        fontSize:
                          valueStyle.comNum.fontSize * (screenWidth / 100),
                      }
                    : {},
                ]}>
                {valueComNum}
              </Text>
            )}
            {valueStyle.fax && (
              <Text
                style={[
                  valueStyle.fax,
                  {position: 'absolute'},
                  valueStyle.fax.fontSize
                    ? {fontSize: valueStyle.fax.fontSize * (screenWidth / 100)}
                    : {},
                ]}>
                {valueFax}
              </Text>
            )}
          </View>

          <ScrollView>
            <View style={styles.infoRow}>
              <Text style={styles.label}>이름</Text>
              <TextInput
                onChangeText={(text) => setValueName(text)}
                defaultValue={cardValue.valueName || ''}
                style={[
                  styles.inputName,
                  modeEdit ? {borderBottomWidth: 1} : {},
                ]}
              />
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>연락처</Text>
              <TextInput
                onChangeText={(text) => setValuePhone(text)}
                defaultValue={cardValue.valuePhone || ''}
                style={[
                  styles.inputName,
                  modeEdit ? {borderBottomWidth: 1} : {},
                ]}
              />
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>이메일</Text>
              <TextInput
                onChangeText={(text) => setValueEmail(text)}
                defaultValue={cardValue.valueEmail || ''}
                style={[
                  styles.inputName,
                  modeEdit ? {borderBottomWidth: 1} : {},
                ]}
              />
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>회사명</Text>
              <TextInput
                onChangeText={(text) => setValueCompany(text)}
                defaultValue={cardValue.valueCompany || ''}
                style={[
                  styles.inputName,
                  modeEdit ? {borderBottomWidth: 1} : {},
                ]}
              />
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>부서/직책</Text>

              {!modeEdit ? (
                <Text style={styles.inputName}>
                  {cardValue.valueTeam || ''} / {cardValue.valuePosiion || ''}
                </Text>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    onChangeText={(text) => setValueTeam(text)}
                    defaultValue={cardValue.valueTeam || ''}
                    style={[
                      styles.inputName,
                      {borderBottomWidth: 1, width: '40%'},
                    ]}
                  />
                  <Text style={styles.inputName}> / </Text>
                  <TextInput
                    onChangeText={(text) => setValuePosition(text)}
                    defaultValue={cardValue.valuePosition || ''}
                    style={[
                      styles.inputName,
                      {borderBottomWidth: 1, width: '40%'},
                    ]}
                  />
                </View>
              )}
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>회사번호</Text>
              <TextInput
                onChangeText={(text) => setValueComNum(text)}
                defaultValue={cardValue.valueComNum || ''}
                style={[
                  styles.inputName,
                  modeEdit ? {borderBottomWidth: 1} : {},
                ]}
              />
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>FAX</Text>
              <TextInput
                onChangeText={(text) => setValueFax(text)}
                defaultValue={cardValue.valueFax || ''}
                style={[
                  styles.inputName,
                  modeEdit ? {borderBottomWidth: 1} : {},
                ]}
              />
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>회사주소</Text>
              <TextInput
                onChangeText={(text) => setValueComAddr(text)}
                defaultValue={cardValue.valueComAddr || ''}
                style={[
                  styles.inputName,
                  modeEdit ? {borderBottomWidth: 1} : {},
                ]}
              />
            </View>
            <View style={styles.infoRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{...styles.label, fontSize: 20}}>메모</Text>
                <Image
                  source={imgPencil2}
                  style={{width: 18, height: 18, marginLeft: 5}}
                />
              </View>
              <TextInput
                onChangeText={(text) => setMemo(text)}
                editable={modeEdit}
                multiline
                scrollEnabled
                defaultValue={memo || ''}
                style={{
                  width: '100%',
                  height: 100,
                  backgroundColor: '#EEEEEE',
                  color: '#7D7D7D',
                  fontSize: 15,
                  fontFamily: 'sd_gothic_b',
                  borderRadius: 10,
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  header: {
    height: screenHeight * (1 / 14),
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSection1: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerSection2: {
    marginRight: 10,
    flexDirection: 'row',
  },
  title: {
    marginLeft: 5,
    fontSize: 17,
    fontFamily: 'sd_gothic_m',
  },
  textFinish: {
    fontSize: 17,
    fontFamily: 'sd_gothic_b',
    color: '#6270EA',
    marginLeft: 12,
  },
  content: {
    height: screenHeight * (10.8 / 14),
    // borderWidth: 3,
    width: screenWidth,
    left: deviceWidth * (5 / 100),
    // flexDirection: 'row',
    // justifyContent: 'flex-start'
  },
  cardConatiner: {
    height: cardHeight,
    // borderWidth: 1,
    marginVertical: 30,
    elevation: 5,
  },
  infoRow: {
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
  },
  inputName: {
    // borderBottomWidth: 1,
    padding: 0,
    color: '#7D7D7D',
    fontSize: 15,
    fontFamily: 'sd_gothic_b',
    borderColor: '#AEAEAE',
  },
});

export default EditSingleScreen;
