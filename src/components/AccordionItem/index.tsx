import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import WalletCardItem from '~/components/WalletCardItem';

const deviceWidth = Dimensions.get('window').width;
const cardWidth = deviceWidth * (3 / 10);
const cardHeight = cardWidth * (9 / 16);

interface Props {
  title: string;
  cards: any;
}

const AccordionItem = ({title, cards}: Props) => {
  return (
    <Collapse style={styles.row}>
      <CollapseHeader
        style={{
          borderBottomWidth: 1,
          borderColor: '#cccccc',
          paddingVertical: 3,
        }}>
        <Text style={styles.headerText}>{title}</Text>
      </CollapseHeader>
      <CollapseBody style={{width: '90%', left: '5%'}}>
        {cards.map((card: any, idx: number) => {
          return <WalletCardItem key={idx} cardData={card} />;
        })}
      </CollapseBody>
    </Collapse>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    marginVertical: 10,
  },

  headerText: {
    fontSize: 18,
    fontFamily: 'sd_gothic_m',
    marginLeft: 10,
    paddingBottom: 5,
  },
});

export default AccordionItem;
