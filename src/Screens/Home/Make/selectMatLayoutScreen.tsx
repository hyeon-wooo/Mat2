import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';
// import LayoutCard from '~/components/LayoutCard';
// import Header from '~/components/MakeHeader';
import {imgChecked, header2} from '~/Assets/Images';
import TemplateCard from '~/components/TemplateCard';

const layoutData = require('~/Assets/layoutCards');
// console.log('## layoutData ##', layoutData)
const deviceWidth = Dimensions.get('window').width;

interface Props {
  route: any;
  navigation: any;
}

const parentWidth = Dimensions.get('window').width;
const cardWidth = parentWidth * (8 / 10);
const cardHeight = cardWidth * (9 / 16);

const SelectMatLayoutScreen = ({route, navigation}: Props) => {
  // const valueLogo = route.params.valueLogo
  // layoutData.valueLogo = valueLogo
  layoutData.map((data: any) => {
    for (const [key, value] of Object.entries(route.params)) {
      data.value[key] = value;
    }
  });
  // console.log('## layout ##', layoutData)
  // const [valueLogo, ...extra] = route.params
  // console.log('####', route.params)
  console.log('#hi#');
  // console.log(route.params)
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <Header current={2} finish={[1]} /> */}
        <Image
          source={header2}
          style={{width: deviceWidth, height: '70%', marginTop: '3%'}}
        />
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView>
          {layoutData.map((data: any) => (
            <View
              key={data.id}
              style={[
                styles.cardContainer,
                selected === data.id ? styles.selected : {},
              ]}
              onTouchEnd={() => setSelected(data.id)}>
              <TemplateCard key={data.id} cardWidth={cardWidth} data={data} />
              <Image
                key={100}
                source={selected === data.id ? imgChecked : null}
                style={styles.imgChecked}
              />
            </View>
          ))}

          <View style={styles.btnConatiner}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => {
                if (selected !== 0) {
                  navigation.navigate(
                    'SelectBackground',
                    layoutData.filter((data: any) => data.id === selected)[0],
                  );
                } else {
                  ToastAndroid.show(
                    '레이아웃을 선택해주세요',
                    ToastAndroid.SHORT,
                  );
                }
              }}>
              <Text style={styles.btnText}>다음</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  headerContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 8,
  },
  cardContainer: {
    width: cardWidth,
    height: cardHeight,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    // padding: 5,
    marginTop: 15,
    borderWidth: 0,
  },
  item1: {
    width: '50%',
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
  },
  selected: {
    borderWidth: 3,
    borderColor: '#6270EA',
  },
  imgChecked: {
    position: 'absolute',
    left: '3%',
    top: '5%',
    width: 7 * (cardWidth / 100),
    height: 9 * (cardHeight / 100),
  },
  btnConatiner: {
    marginVertical: 20,
    width: '90%',
    left: '5%',
    // flexDirection: 'row-reverse',
  },
  btnNext: {
    width: 70,
    height: 40,
    backgroundColor: '#6078EA',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  btnText: {
    fontFamily: 'sd_gothic_m',
    fontSize: 20,
    color: 'white',
  },
});

export default SelectMatLayoutScreen;
