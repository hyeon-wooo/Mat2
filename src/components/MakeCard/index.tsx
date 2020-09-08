import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {imgMakeCard} from '~/Assets/Images';

interface Props {
  parentWidth: number;
}

const Card = ({parentWidth}: Props) => {
  const navigation = useNavigation();

  const cardWidth = parentWidth * (9 / 10);
  const cardHeight = cardWidth * (9 / 16);

  return (
    <View
      style={[
        styles.back,
        {width: cardWidth, height: cardHeight, elevation: 5},
      ]}
      onTouchEnd={() => navigation.navigate('Make')}>
      {/* <Image
        source={require('~/Assets/Images/btnAdd.png')}
        style={{width: 30, height: 30}}
      /> */}
      <Image
        source={imgMakeCard}
        style={{width: cardWidth, height: cardHeight, borderRadius: 5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    // left: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
});

export default Card;
