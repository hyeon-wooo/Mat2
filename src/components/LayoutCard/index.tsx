import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Props {
  cardWidth: number;
  data?: any;
}

// var base64Icon =
//   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';

const Card = ({cardWidth, data}: Props) => {
  const {label, value} = data;
  const background = value.background;
  // console.log(background)
  // console.log('## cardWidth ##', value.style.name.fontSize*(cardWidth/100))
//   console.log('#value#', data);
  return (
    <View
      style={[
        styles.back,
        background.isColor? {backgroundColor: background.color} : {},
      ]}>

      {value.valueLogo && (
        <Image
        source={{uri: `data:image/png;base64,${value.valueLogo}`}}
        style={[
          value.style.logo || {},
          {
          position: 'absolute',
          width: value.style.logo.width * (cardWidth/100),
          height: value.style.logo.height * (cardWidth/100)
          },
        ]}
        />
      )}
      
      
      {label.labelName && (
        <Text
          style={[
            styles.labelText,
            label.style.name || {},
            label.style.name.fontSize? {fontSize: label.style.name.fontSize * (cardWidth/100)} : {},
          ]}>
          {label.labelName}
        </Text>
      )}

      {label.labelEmail && (
        <Text style={[
          styles.labelText, 
          label.style.email || {},
          label.style.email.fontSize? {fontSize: label.style.email.fontSize *(cardWidth/100)} : {},]}>
          {label.labelEmail}
        </Text>
      )}
      {label.labelPhone && (
        <Text style={[
          styles.labelText, 
          label.style.phone || {},
          label.style.phone.fontSize? {fontSize: label.style.phone.fontSize *(cardWidth/100)} : {},]}>
          {label.labelPhone}
        </Text>
      )}
      {label.labelFax && (
        <Text style={[
          styles.labelText, 
          label.style.fax || {},
          label.style.fax.fontSize? {fontSize: label.style.fax.fontSize *(cardWidth/100)} : {}]}>
          {label.labelFax}
        </Text>
      )}
      {label.labelCompany && (
        <Text style={[styles.labelText,
          label.style.company || {},
          label.style.company.fontSize? {fontSize: label.style.company.fontSize *(cardWidth/100)} : {},]}>
          {label.labelCompany}
        </Text>
      )}
      {label.labelPosition && (
        <Text style={[styles.labelText, 
        label.style.position || {},
        label.style.position.fontSize? {fontSize: label.style.position.fontSize *(cardWidth/100)} : {},]}>
          {label.labelPosition}
        </Text>
      )}
      {label.labelTeam && (
        <Text style={[styles.labelText, 
        label.style.team || {},
        label.style.team.fontSize? {fontSize: label.style.team.fontSize *(cardWidth/100)} : {},]}>
          {label.labelTeam}
        </Text>
      )}
      {label.labelComAddr && (
        <Text style={[styles.labelText, 
        label.style.comAddr || {},
        label.style.comAddr.fontSize? {fontSize: label.style.comAddr.fontSize *(cardWidth/100)} : {},]}>
          {label.labelComAddr}
        </Text>
      )}
      {label.labelComNum && (
        <Text style={[styles.labelText, 
        label.style.comNum || {},
        label.style.comNum.fontSize? {fontSize: label.style.comNum.fontSize *(cardWidth/100)} : {},]}>
          {label.labelComNum}
        </Text>
      )}

      {value.valueName && (
        <Text
          style={[
            styles.valueText,
            value.style.name || {},
            value.style.name.fontSize? {fontSize: value.style.name.fontSize * (cardWidth/100)} : {},
          ]}>
          {value.valueName}
        </Text>
      )}

      {value.valueEmail && (
        <Text style={[
          styles.valueText, 
          value.style.email || {},
          value.style.email.fontSize? {fontSize: value.style.email.fontSize * (cardWidth/100)} : {},]}>
          {value.valueEmail}
        </Text>
      )}
      {value.valuePhone && (
        <Text style={[
          styles.valueText, 
          value.style.phone || {},
          value.style.phone.fontSize? {fontSize: value.style.phone.fontSize *(cardWidth/100)} : {},]}>
          {value.valuePhone}
        </Text>
      )}
      {value.valueFax && (
        <Text style={[
          styles.valueText, 
          value.style.fax || {},
          value.style.fax.fontSize? {fontSize: value.style.fax.fontSize *(cardWidth/100)} : {}]}>
          {value.valueFax}
        </Text>
      )}
      {value.valueCompany && (
        <Text style={[styles.valueText,
          value.style.company || {},
          value.style.company.fontSize? {fontSize: value.style.company.fontSize *(cardWidth/100)} : {},]}>
          {value.valueCompany}
        </Text>
      )}
      {value.valuePosition && (
        <Text style={[styles.valueText, 
        value.style.position || {},
        value.style.position.fontSize? {fontSize: value.style.position.fontSize *(cardWidth/100)} : {},]}>
          {value.valuePosition}
        </Text>
      )}
      {value.valueTeam && (
        <Text style={[styles.valueText, 
        value.style.team || {},
        value.style.team.fontSize? {fontSize: value.style.team.fontSize *(cardWidth/100)} : {},]}>
          {value.valueTeam}
        </Text>
      )}
      {value.valueComAddr && (
        <Text style={[styles.valueText, 
        value.style.comAddr || {},
        value.style.comAddr.fontSize? {fontSize: value.style.comAddr.fontSize *(cardWidth/100)} : {},]}>
          {value.valueComAddr}
        </Text>
      )}
      {value.valueComNum && (
        <Text style={[styles.valueText, 
        value.style.comNum || {},
        value.style.comNum.fontSize? {fontSize: value.style.comNum.fontSize *(cardWidth/100)} : {},]}>
          {value.valueComNum}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    height: '100%'
  },
  valueText: {
    position: 'absolute',
  },
  labelText: {
    position: 'absolute'
  }
});

export default Card;
