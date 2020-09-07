import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import PointShopHeader from '~/components/PointShopHeader';

import db from '~/DB';
import {Store} from 'redux';
import {ScrollView} from 'react-native-gesture-handler';
import {mega20000, imgArrowDown2, imgArrowRight} from '~/Assets/Images';

interface prop {
  navigation: any;
}

const StoreScreen = ({navigation}: prop) => {
  const [myItems, setMyItems] = useState(new Array());

  useEffect(() => {
    db.getPointItems().then((items: any) => setMyItems(items));
  }, []);

  return (
    <View style={s.wrap}>
      <PointShopHeader title="보관함" />
      <ScrollView style={{width: '100%', height: '100%'}}>
        {myItems.map((item: any) => (
          <TouchableOpacity
            key={item.id}
            style={s.itemContainer}
            onPress={() => navigation.push('StoreItem', {item})}>
            <View style={{flexDirection: 'row'}}>
              <View style={s.imgContainer}>
                <Image
                  source={mega20000}
                  style={{width: 90, height: 90 * 0.595}}
                />
              </View>
              <View style={s.infoContainer}>
                <Text style={s.textInfo}>[{item.shopName}]</Text>
                <Text style={s.textInfo}>{item.title}</Text>
              </View>
            </View>
            <Image
              source={imgArrowRight}
              style={{width: 10, height: 10 * (13.5 / 6.75), marginRight: 20}}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  itemContainer: {
    width: '100%',
    height: 150,
    borderWidth: 0.5,
    borderColor: '#CFCFCF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgContainer: {
    width: 110,
    height: 110,
    borderWidth: 0.5,
    borderColor: '#AEAEAE',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  infoContainer: {
    height: 100,
    justifyContent: 'center',
    marginLeft: 15,
  },
  textInfo: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
    marginVertical: 5,
  },
});

export default StoreScreen;
