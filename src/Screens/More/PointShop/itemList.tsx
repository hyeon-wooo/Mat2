import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import db from '~/DB';
import PointShopHeader from '~/components/PointShopHeader';
import {mega20000} from '~/Assets/Images';

const screenWidth = Dimensions.get('screen').width;
const itemWidth = Math.round(screenWidth * 0.4);

interface prop {
  navigation: any;
  route: any;
}

const ItemList = ({navigation, route}: prop) => {
  // const [items, setItems] = useState(new Array());
  const [slicedItems, setSlicedItems] = useState(new Array());

  useEffect(() => {
    axios
      .get(
        `http://mat-server-1.herokuapp.com/pointshop/getItems?shopName=${route.params.shopName}`,
      )
      .then((res: any) => {
        if (res.data.code === 0) {
          console.log('# res #', res.data);
          let slicedArr = new Array();
          const items = res.data.resData;
          for (let i = 0; i < items.length; i += 2) {
            slicedArr.push(items.slice(i, i + 2));
          }
          setSlicedItems(slicedArr);
        }
      })
      .catch((err) => {
        console.log(err);
        ToastAndroid.show('알 수 없는 오류가 발생했습니다', ToastAndroid.SHORT);
      });
  }, []);

  return (
    <View style={s.wrap}>
      <PointShopHeader title={route.params?.shopName || '카페'} />
      <ScrollView style={{width: '100%'}}>
        {slicedItems.map((sliced: any, idx: number) => {
          return (
            <View key={idx} style={s.row}>
              {sliced.map((item: any, idx: number) => {
                let itemTitle = `[${item.shopName}] ${item.title}`;
                if (itemWidth / itemTitle.length < 9.5)
                  itemTitle = itemTitle.substring(0, 16) + '..';

                return (
                  <TouchableOpacity
                    key={idx}
                    style={s.itemConatiner}
                    onPress={() =>
                      navigation.push('ItemDetail', {itemData: item})
                    }>
                    <View style={s.imgContainer}>
                      <Image
                        source={mega20000}
                        style={{
                          width: itemWidth * 0.8,
                          height: itemWidth * 0.8 * 0.595,
                        }}
                      />
                    </View>
                    <Text style={s.itemTitle}>{itemTitle}</Text>
                    <Text style={s.neededPoint}>{item.neededPoint}pts</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 25,
    justifyContent: 'space-evenly',
  },
  itemConatiner: {
    width: itemWidth,
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  imgContainer: {
    width: itemWidth,
    height: itemWidth,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 15,
    fontFamily: 'sd_gothic_m',
    color: '#444444',
  },
  neededPoint: {
    alignSelf: 'flex-end',
    color: '#6078EA',
    fontSize: 15,
    fontFamily: 'sd_gothic_m',
  },
});

export default ItemList;
