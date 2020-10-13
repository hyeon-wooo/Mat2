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
import LayoutCard from '~/components/LayoutCard';
// import TemplateCard from '~/components/TemplateCard';
import {imgChecked, header3} from '~/Assets/Images';

const backgroundSet = [
  {
    back: {
      isColor: true,
      color: '#fbfbfb',
    },
    labelColor: '#6078EA',
    valueColor: '#444444',
  },
  {
    back: {
      isColor: true,
      color: '#cdcdcd',
    },
    labelColor: '#F09A18',
    valueColor: '#222222',
  },
  {
    back: {
      isColor: true,
      color: '#555555',
    },
    labelColor: '#F0E927',
    valueColor: '#000000',
  },
  {
    back: {
      isColor: true,
      color: '#222222',
    },
    labelColor: '#6078EA',
    valueColor: '#fbfbfb',
  },
  {
    back: {
      isColor: true,
      color: '#222222',
    },
    labelColor: '#DC13F0',
    valueColor: '#fbfbfb',
  },
];

const deviceWidth = Dimensions.get('window').width;

interface Props {
  route: any;
  navigation: any;
}

const parentWidth = Dimensions.get('window').width;
const cardWidth = parentWidth * (8 / 10);
const cardHeight = cardWidth * (9 / 16);

const SelectBackgroundScreen = ({route, navigation}: Props) => {
  const [selected, setSelected] = useState(null);

  const backgroundData = backgroundSet.map((v, i) => {
    let result = JSON.parse(JSON.stringify(route.params));
    result.value.background = v.back;
    result.id = i;

    result.value.style.position.color = v.labelColor;
    result.value.style.team.color = v.labelColor;
    result.label.style.phone.color = v.labelColor;
    result.label.style.email.color = v.labelColor;
    result.label.style.comNum.color = v.labelColor;
    result.label.style.fax.color = v.labelColor;

    result.value.style.name.color = v.valueColor;
    result.value.style.email.color = v.valueColor;
    result.value.style.phone.color = v.valueColor;
    result.value.style.fax.color = v.valueColor;
    result.value.style.company.color = v.valueColor;
    result.value.style.comAddr.color = v.valueColor;
    result.value.style.comNum.color = v.valueColor;

    return result;
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={header3}
          style={{width: deviceWidth, height: '70%', marginTop: '3%'}}
        />
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView>
          {backgroundData.map((data: any) => (
            <View
              key={data.id}
              style={[
                styles.cardContainer,
                selected === data.id ? styles.selected : {},
              ]}
              onTouchEnd={() => setSelected(data.id)}>
              <LayoutCard key={data.id} cardWidth={cardWidth} data={data} />
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
                if (selected !== null) {
                  navigation.navigate(
                    'Detail',
                    backgroundData.filter((v) => v.id === selected)[0],
                  );
                } else {
                  ToastAndroid.show('배경을 선택해주세요', ToastAndroid.SHORT);
                }
              }}>
              <Text style={styles.btnText}>다음</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* <View style={[styles.item1, selected===1? styles.selected: {}]} onTouchStart={() => setSelected(1)}></View>
      <View style={[styles.item1, selected===2? styles.selected: {}]} onTouchStart={() => setSelected(2)}></View>
      <View style={[styles.item1, selected===3? styles.selected: {}]} onTouchStart={() => setSelected(3)}></View> */}
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

export default SelectBackgroundScreen;
