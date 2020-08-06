import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Props {
  cardWidth: number;
  data?: any;
}


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

      {value.valueName.length > 0 && value.style.name && (
        <Text
          style={[
            styles.valueText,
            value.style.name || {},
            value.style.name.fontSize? {fontSize: value.style.name.fontSize * (cardWidth/100)} : {},
          ]}>
          {value.valueName}
        </Text>
      )}

      {value.valueEmail.length > 0 && value.style.email && (
        <Text style={[
          styles.valueText, 
          value.style.email || {},
          value.style.email.fontSize? {fontSize: value.style.email.fontSize * (cardWidth/100)} : {},]}>
          {value.valueEmail}
        </Text>
      )}
      {value.valuePhone.length > 0 && value.style.phone && (
        <Text style={[
          styles.valueText, 
          value.style.phone || {},
          value.style.phone.fontSize? {fontSize: value.style.phone.fontSize *(cardWidth/100)} : {},]}>
          {value.valuePhone}
        </Text>
      )}
      {value.valueFax.length > 0 && value.style.fax && (
        <Text style={[
          styles.valueText, 
          value.style.fax || {},
          value.style.fax.fontSize? {fontSize: value.style.fax.fontSize *(cardWidth/100)} : {}]}>
          {value.valueFax}
        </Text>
      )}
      {value.valueCompany.length > 0 && value.style.company && (
        <Text style={[styles.valueText,
          value.style.company || {},
          value.style.company.fontSize? {fontSize: value.style.company.fontSize *(cardWidth/100)} : {},]}>
          {value.valueCompany}
        </Text>
      )}
      {value.valuePosition.length > 0 && value.style.position && (
        <Text style={[styles.valueText, 
        value.style.position || {},
        value.style.position.fontSize? {fontSize: value.style.position.fontSize *(cardWidth/100)} : {},]}>
          {value.valuePosition}
        </Text>
      )}
      {value.valueTeam.length > 0 && value.style.team &&(
        <Text style={[styles.valueText, 
        value.style.team || {},
        value.style.team.fontSize? {fontSize: value.style.team.fontSize *(cardWidth/100)} : {},]}>
          {value.valueTeam}
        </Text>
      )}
      {value.valueComAddr.length > 0 && value.style.hasOwnProperty('comAddr') && (
        <Text style={[styles.valueText, 
        value.style.comAddr,
        value.style.comAddr.fontSize
        ? {fontSize: value.style.comAddr.fontSize *(cardWidth/100)} 
        : {}
        ]}>
          {value.valueComAddr}
        </Text>
      )}
      {value.valueComNum.lenght > 0 && value.style.comNum && (
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
    height: '100%',
    borderWidth: 3,
    borderColor: 'blue'
  },
  valueText: {
    position: 'absolute',
  },
  labelText: {
    position: 'absolute'
  }
});

export default Card;
