import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TemplateCard from '~/components/TemplateCard';

const deviceWidth = Dimensions.get('window').width;
const cardWidth = deviceWidth * (3 / 10);
const cardHeight = cardWidth * (9 / 16);

interface CardProps {
  cardData: any;
}
const WalletCardItem = ({cardData}: CardProps) => {
  const {name, position, team, company, fullData} = cardData;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItemContainer}
      onPress={() => navigation.navigate('ShowSingleCard', {card: cardData})}>
      <View style={styles.itemInfo}>
        <View style={styles.infoSection1}>
          <Text style={styles.infoName}>{name}</Text>
          <Text style={styles.infoPosition}>{position || ''}</Text>
        </View>
        <View style={styles.infoSection2}>
          <Text style={styles.infoTeam}>{team || ''}</Text>
          <Text style={styles.infoCompany}>{company || ''}</Text>
        </View>
      </View>
      <View style={styles.itemCardContainer}>
        <TemplateCard cardWidth={cardWidth} data={JSON.parse(fullData)} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#dddddd',
  },
  itemInfo: {},
  infoSection1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    // borderWidth: 1
  },
  infoSection2: {
    flex: 1,
    // borderWidth: 1
  },
  infoName: {
    fontSize: 18,
    fontFamily: 'sd_gothic_b',
    color: '#333333',
    marginRight: 7,
  },
  infoPosition: {
    fontSize: 13,
    fontFamily: 'sd_gothic_b',
    color: '#6270EA',
  },
  infoTeam: {
    fontSize: 12,
    fontFamily: 'sd_gothic_l',
  },
  infoCompany: {
    fontSize: 12,
    fontFamily: 'sd_gothic_l',
  },
  itemCard: {},
  itemCardContainer: {
    width: cardWidth,
    height: cardHeight,
    justifyContent: 'center',
  },
});

export default WalletCardItem;
