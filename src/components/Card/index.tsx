import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Props {
  parentWidth: number;
  data?: object;
}

var base64Icon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';

const Card = ({parentWidth, data}: Props) => {
  const {label, value} = data;
  // const {background} = value;
  const cardWidth = parentWidth * (8 / 10);
  const cardHeight = cardWidth * (9 / 16);
  // console.log('#value#', value);
  return (
    <View
      style={[
        styles.back,
        {width: cardWidth, height: cardHeight, elevation: 5},
        // background.isImg? {} : {backgroundColor: background.color},
      ]}>
      <Image
        source={{uri: base64Icon}}
        style={{
          position: 'absolute',
          width: 100,
          height: 50,
        }}
      />
      {value.valueName && (
        <Text
          style={[
            styles.valueText,
            {fontSize: cardWidth / 15},
            value.style ? value.style.name : {},
          ]}>
          {value.valueName}
        </Text>
      )}
      {value.valueEmail && (
        <Text style={[styles.valueText, value.style ? value.style.name : {}]}>
          {value.valueEmail}
        </Text>
      )}
      {value.valuePhone && (
        <Text style={[styles.valueText, value.style ? value.style.name : {}]}>
          {value.valuePhone}
        </Text>
      )}
      {value.valueFax && (
        <Text style={[styles.valueText, value.style ? value.style.name : {}]}>
          {value.valueFax}
        </Text>
      )}
      {value.valueCompany && (
        <Text style={value.style ? value.style.company : {}}>
          {value.valueCompany}
        </Text>
      )}
      {value.valuePosition && (
        <Text style={value.style ? value.style.company : {}}>
          {value.valuePosition}
        </Text>
      )}
      {value.valueTeam && (
        <Text style={value.style ? value.style.company : {}}>
          {value.valueTeam}
        </Text>
      )}
      {value.valueComAddr && (
        <Text style={value.style ? value.style.company : {}}>
          {value.valueComAddr}
        </Text>
      )}
      {value.valueComNum && (
        <Text style={value.style ? value.style.company : {}}>
          {value.valueComNum}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    left: '10%',
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 5,
  },
  nameText: {
    position: 'relative',
    left: '30%',
    color: 'blue',
    fontSize: 30,
  },
  valueText: {
    position: 'absolute',
  },
});

export default Card;
