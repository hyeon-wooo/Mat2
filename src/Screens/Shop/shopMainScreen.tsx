import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {btnOk, imgChecked} from '~/Assets/Images';

interface Props {
  navigation: any;
  route: any;
}
const ShopMain = ({navigation, route}: Props) => {
  const [cntTemLength, setTemLength] = useState(0);
  const [temArr, setTemArr] = useState(new Array());
  const [currentPageM, setCurrentPage] = useState(1);
  const [totalPageM, setTotalPage] = useState(1);
  const [totalDataM, setTotalData] = useState(1);
  const [pageArr, setPageArr] = useState(new Array());
  const [isFirstGroup, setIsFirstGroup] = useState(true);
  const [isLastGroup, setIsLastGroup] = useState(false);
  const [firstPageOfCurrentGroup, setFirstPageOfCurrentGroup] = useState(1);
  const groupSize = 5;
  useEffect(() => {
    axios
      .get(`testmat2.herokuapp.com/template/currentPage?page=${currentPageM}`)
      .then((res: any) => {
        //
        const {totalPage, totalData, currentPage, resData} = res.data;
        let slicedArr = new Array();
        let arr1 = resData.map((temData: any) => {
          temData.fullData = JSON.parse(temData.fullData);
        });
        const cntRow = Math.ceil(arr1.length / 2);
        for (let i = 0; i < cntRow; i++) {
          let arr2 = arr1.slice(i * 2, i * 2 + 2);
          slicedArr.push(arr2);
        }
        setTemArr(slicedArr);
        setTemLength(resData.length);

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
  }, [currentPageM]);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={s.ads}></View>
      <View style={s.filterBox}></View>
      <ScrollView style={s.content}>
        <View style={s.itemContainer}>
          {temArr.map((innerArr: any) => (
            <View style={s.row}>
              {innerArr.map((tem: any) => (
                <TouchableOpacity>{/* tem */}</TouchableOpacity>
              ))}
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
                  fontSize: 14,
                  marginHorizontal: 5,
                  fontFamily: 'sd_gothic_b',
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
  );
};

const s = StyleSheet.create({
  ads: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 3,
  },
  filterBox: {
    flexDirection: 'row',
    flex: 1,
  },
  content: {
    borderWidth: 10,
    borderColor: 'blue',
  },
  pageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'yellow',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'purple',
  },
  row: {
    borderWidth: 3,
    borderColor: 'green',
  },
  btnPrePage: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
});

export default ShopMain;
