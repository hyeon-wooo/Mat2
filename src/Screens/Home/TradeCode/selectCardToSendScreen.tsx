import React, {useState, useEffect} from 'react';
import S from 'styled-components/native';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import LayoutCard from '~/components/LayoutCard';
import Header from '~/components/MakeHeader';
import {imgChecked, header2} from '~/Assets/Images';
import db from '~/DB';

const layoutData = require('~/Assets/layoutCards');
// console.log('## layoutData ##', layoutData)
const deviceWidth = Dimensions.get('window').width;

const Container = S.ScrollView`
    background-color: #333;
`;
const Text = S.Text``;

interface Props {
  route: any;
  navigation: any;
}

const parentWidth = Dimensions.get('window').width;
const cardWidth = parentWidth * (8 / 10);
const cardHeight = cardWidth * (9 / 16);

const SelectCardToSend = ({route, navigation}: Props) => {
  //   layoutData.map((data: any) => {
  //     for (const [key, value] of Object.entries(route.params)) {
  //       data.value[key] = value;
  //     }
  //   });

  const [selected, setSelected] = useState(0);
  const [myCards, setMyCards] = useState(new Array());
  useEffect(() => {
    db.getMyCards().then((cards: any) => {
      //   console.log('##cards## ', cards);
      setMyCards(cards);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{textAlign: 'center', fontSize: 25}}>
          공유할 명함을 선택해주세요
        </Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView>
          {myCards.map((card: any, idx: number) => (
            <View key={card.id}>
              <Text>{JSON.parse(card.fullData).value.cardName || ''}</Text>
              <View
                style={[
                  styles.cardContainer,
                  selected === card.id ? styles.selected : {},
                ]}
                onTouchEnd={() => setSelected(card.id)}>
                <LayoutCard
                  key={card.id}
                  cardWidth={cardWidth}
                  data={JSON.parse(card.fullData)}
                />
                <Image
                  key={100}
                  source={selected === card.id ? imgChecked : null}
                  style={styles.imgChecked}
                />
              </View>
            </View>
          ))}

          <View style={styles.btnConatiner}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => {
                if (selected !== -1)
                  navigation.navigate(
                    'CreateCode',
                    myCards.filter((data: any) => data.id === selected),
                  );
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
    flexDirection: 'row-reverse',
  },
  btnNext: {
    width: 70,
    height: 40,
    backgroundColor: '#6078EA',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'sd_gothic_m',
    fontSize: 20,
    color: 'white',
  },
});

export default SelectCardToSend;
