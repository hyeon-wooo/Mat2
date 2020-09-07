import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  imgChecked,
  simple,
  emotion,
  flower,
  character,
  moreBlack,
} from '~/Assets/Images';

interface Props {
  navigation: any;
}

const SelectCategory = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
      <TouchableOpacity
        style={s.categoryRow}
        onPress={() => {
          navigation.push('ShowByCategory', {category: '심플'});
        }}>
        <Image source={simple} style={s.categoryImg} />
        <Text style={s.categoryText}>심플</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.categoryRow}
        onPress={() => {
          navigation.push('ShowByCategory', {category: '감성'});
        }}>
        <Image source={emotion} style={s.categoryImg} />
        <Text style={s.categoryText}>감성</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.categoryRow}
        onPress={() => {
          navigation.push('ShowByCategory', {category: '화려함'});
        }}>
        <Image source={flower} style={s.categoryImg} />
        <Text style={s.categoryText}>화려함</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.categoryRow}
        onPress={() => {
          navigation.push('ShowByCategory', {category: '캐릭터'});
        }}>
        <Image source={character} style={s.categoryImg} />
        <Text style={s.categoryText}>캐릭터</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.categoryRow}
        onPress={() => {
          navigation.push('ShowByCategory', {category: '기타'});
        }}>
        <Image
          source={moreBlack}
          style={[s.categoryImg, {height: 20 * (2.9 / 14.66)}]}
        />
        <Text style={s.categoryText}>기타</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
    paddingVertical: 15,
    alignItems: 'center',
  },
  categoryImg: {
    marginLeft: 25,
    marginRight: 15,
    width: 20,
    height: 20,
  },
  categoryText: {
    fontFamily: 'sd_gothic_b',
    fontSize: 20,
    color: '#444444',
  },
});

export default SelectCategory;
