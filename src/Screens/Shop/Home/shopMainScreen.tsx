import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import {btnOk, imgChecked} from '~/Assets/Images';
import {useIsFocused} from '@react-navigation/native';
import TemplateCard from '~/components/TemplateCard';

const screenWidth = Dimensions.get('screen').width;
const temWidth = (screenWidth / 2) * (9 / 10);
const temHeight = temWidth * (9 / 16);

interface Props {
  navigation: any;
  route: any;
}
const ShopMain = ({navigation, route}: Props) => {
  const focused = useIsFocused();
  const [cntTemLength, setTemLength] = useState(0);
  const [filterType, setFilterType] = useState('new');
  const [temArr, setTemArr] = useState(new Array());
  const [temData, setTemData] = useState(new Array());
  const [currentPageM, setCurrentPage] = useState(1);
  const [totalPageM, setTotalPage] = useState(1);
  const [totalDataM, setTotalData] = useState(1);
  const [pageArr, setPageArr] = useState(new Array());
  const [isFirstGroup, setIsFirstGroup] = useState(true);
  const [isLastGroup, setIsLastGroup] = useState(false);
  const [firstPageOfCurrentGroup, setFirstPageOfCurrentGroup] = useState(1);
  const groupSize = 5;

  useEffect(() => {
    let sortedArr = new Array();
    switch (filterType) {
      case 'new':
        sortedArr = temData.sort((a: any, b: any) => b.id - a.id);
        break;
      case 'hit':
        sortedArr = temData.sort((a: any, b: any) => b.cntBut - a.cntBuy);
        break;
      case 'expensive':
        sortedArr = temData.sort((a: any, b: any) => b.Price - a.Price);
        break;
      case 'cheep':
        sortedArr = temData.sort((a: any, b: any) => a.Price - b.Price);
        break;
    }

    let slicedArr = new Array();

    const cntRow = Math.ceil(sortedArr.length / 2);
    for (let i = 0; i < cntRow; i++) {
      let arr2 = sortedArr.slice(i * 2, i * 2 + 2);
      slicedArr.push(arr2);
    }
    setTemArr(slicedArr);
  }, [temData]);
  useEffect(() => {
    if (focused) {
      axios
        .get(
          `https://mat-server-1.herokuapp.com/tem/resData?page=${currentPageM}&filterName=최신순`,
        )
        .then((res: any) => {
          // console.log('## res data ## ', res.data);
          const {totalPage, totalData, currentPage, resData} = res.data;
          setTemData(resData);
          // let slicedArr = new Array();
          // const cntRow = Math.ceil(resData.length / 2);
          // for (let i = 0; i < cntRow; i++) {
          //   let arr2 = resData.slice(i * 2, i * 2 + 2);
          //   slicedArr.push(arr2);
          // }
          // setTemArr(slicedArr);

          setTotalPage(totalPage);
          setTotalData(totalData);
          setCurrentPage(currentPage);

          const totalPageGroup = Math.ceil(totalPage / 5);
          const currentPageGroup = Math.ceil(currentPage / 5);
          setIsFirstGroup(currentPageGroup === 1);
          setIsLastGroup(currentPageGroup === totalPageGroup);

          const pageLength =
            currentPageGroup === totalPageGroup
              ? totalPage - (currentPageGroup - 1) * groupSize
              : groupSize;
          setFirstPageOfCurrentGroup((currentPageGroup - 1) * groupSize + 1);
          const pages = Array.from(
            {length: pageLength},
            (x, i) => i + firstPageOfCurrentGroup,
          );
          setPageArr(pages);
        });
    }
  }, [currentPageM, filterType, focused]);
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FBFBFB'}}>
      <View style={s.ads}></View>
      <View style={s.filterBox}>
        <TouchableOpacity
          style={[
            s.filterBtn,
            filterType === 'new'
              ? {borderBottomWidth: 2}
              : {borderBottomWidth: 0},
          ]}
          onPress={() => setFilterType('new')}>
          <Text
            style={[
              s.filterText,
              filterType === 'new'
                ? {fontFamily: 'sd_gothic_b', color: '#444444'}
                : {fontFamily: 'sd_gothic_m', color: '#7D7D7D'},
            ]}>
            최신순
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            s.filterBtn,
            filterType === 'hit'
              ? {borderBottomWidth: 2}
              : {borderBottomWidth: 0},
          ]}
          onPress={() => setFilterType('hit')}>
          <Text
            style={[
              s.filterText,
              filterType === 'hit'
                ? {fontFamily: 'sd_gothic_b', color: '#444444'}
                : {fontFamily: 'sd_gothic_m', color: '#7D7D7D'},
            ]}>
            인기순
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            s.filterBtn,
            filterType === 'expensive'
              ? {borderBottomWidth: 2}
              : {borderBottomWidth: 0},
          ]}
          onPress={() => setFilterType('expensive')}>
          <Text
            style={[
              s.filterText,
              filterType === 'expensive'
                ? {fontFamily: 'sd_gothic_b', color: '#444444'}
                : {fontFamily: 'sd_gothic_m', color: '#7D7D7D'},
            ]}>
            최고가
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            s.filterBtn,
            filterType === 'cheep'
              ? {borderBottomWidth: 2}
              : {borderBottomWidth: 0},
          ]}
          onPress={() => setFilterType('cheep')}>
          <Text
            style={[
              s.filterText,
              filterType === 'cheep'
                ? {fontFamily: 'sd_gothic_b', color: '#444444'}
                : {fontFamily: 'sd_gothic_m', color: '#7D7D7D'},
            ]}>
            최저가
          </Text>
        </TouchableOpacity>
      </View>
      <View style={s.content}>
        <ScrollView>
          <View style={s.itemContainer}>
            {temArr.map((innerArr: any, idx: number) => (
              <View key={idx} style={s.row}>
                {innerArr.map((tem: any) => {
                  return (
                    <TouchableOpacity
                      style={s.item}
                      key={tem.id}
                      onPress={() => {
                        navigation.push('TemplateDetail', {
                          data: tem.fullData,
                          temId: tem.id,
                          price: tem.Price,
                        });
                      }}>
                      <TemplateCard
                        data={JSON.parse(tem.fullData)}
                        cardWidth={temWidth}
                        borderRadius
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
          <View style={s.pageContainer}>
            {!isFirstGroup && (
              <TouchableOpacity
                onPress={() => setCurrentPage(firstPageOfCurrentGroup - 5)}>
                <Image source={imgChecked} style={s.btnPrePage} />
              </TouchableOpacity>
            )}
            {pageArr.map((page: number) => (
              <TouchableOpacity key={page} onPress={() => setCurrentPage(page)}>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 5,
                    fontFamily:
                      currentPageM === page ? 'sd_gothic_b' : 'sd_gothic_m',
                  }}>
                  {page}
                </Text>
              </TouchableOpacity>
            ))}
            {!isLastGroup && (
              <TouchableOpacity
                onPress={() => setCurrentPage(firstPageOfCurrentGroup + 5)}>
                <Image source={imgChecked} style={s.btnPrePage} />
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  ads: {
    width: '100%',
    flex: 3,
  },
  filterBox: {
    width: '100%',
    flexDirection: 'row',
    flex: 0.75,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#7D7D7D',
    justifyContent: 'space-evenly',
  },
  content: {
    width: '100%',
    flex: 10,
  },
  pageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemContainer: {},
  item: {
    width: temWidth,
    height: temHeight,
    borderRadius: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  btnPrePage: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#444444',
  },
  filterText: {
    fontSize: 18,
    fontFamily: 'sd_gothic_m',
    marginHorizontal: 15,
  },
});

export default ShopMain;
