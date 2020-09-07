import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TemplateCard from '~/components/TemplateCard';
import {imgChecked, imgUnchecked, imgDelete, imgPeople} from '~/Assets/Images';
import AntDesign from 'react-native-vector-icons/AntDesign';

const deviceWidth = Dimensions.get('window').width;
const cardWidth = deviceWidth * (3 / 10);
const cardHeight = cardWidth * (9 / 16);

const updateGroupCnt = (idList: any) =>
  new Promise((resolve, reject) => {
    const db = SQLite.openDatabase(
      {
        name: 'mat.db',
        location: 'Library',
        createFromLocation: 1,
      },
      () => {
        console.log('open success');
      },
      (error) => {
        console.log('open fail', error);
      },
    );

    let sql = `update cardGroup set cnt = cnt-1 where id in (${idList})`;
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, result) => {
          console.log('#transaction success : selectGroup# ', result.rows);

          resolve(true);
        });
      },
      (err) => {
        console.log(err);
        reject(err);
      },
    );
  });

const deleteCards = (checkList: any) =>
  new Promise((resolve, reject) => {
    const db = SQLite.openDatabase(
      {
        name: 'mat.db',
        location: 'Library',
        createFromLocation: 1,
      },
      () => {
        console.log('open success');
      },
      (error) => {
        console.log('open fail', error);
      },
    );

    let sql = `delete from cards where id in (${checkList})`;
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, result) => {
          console.log('#transaction success : selectGroup# ', result.rows);

          resolve(true);
        });
      },
      (err) => {
        console.log(err);
        reject(err);
      },
    );
  });

const moveGroup = (checkList: any, newGroupId: number) =>
  new Promise((resolve, reject) => {
    const db = SQLite.openDatabase(
      {
        name: 'mat.db',
        location: 'Library',
        createFromLocation: 1,
      },
      () => {
        console.log('open success');
      },
      (error) => {
        console.log('open fail', error);
      },
    );

    // let sql = `update cardGroup set cnt = cnt-1 where id in (${idList})`
    let sql = ``;
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, result) => {
          console.log('#transaction success : selectGroup# ', result.rows);

          resolve(true);
        });
      },
      (err) => {
        console.log(err);
        reject(err);
      },
    );
  });

interface Props {
  navigation: any;
  route: any;
}

interface CardProps {
  card: any;
  setCheckList: any;
  checkList: any;
}

const CardItem = ({card, setCheckList, checkList}: CardProps) => {
  const {name, position, team, company, fullData, groupId} = card;
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.cardItemContainer}
      onPress={() => {
        if (checkList.includes(card.id)) {
          setChecked(false);
          const idx = checkList.indexOf(card.id);
          checkList.splice(idx, 1);
        } else {
          setChecked(true);
          checkList.push(card.id);
        }
        setCheckList(checkList);
      }}>
      <View style={styles.left}>
        <Image
          source={checked ? imgChecked : imgUnchecked}
          style={styles.imgChecked}
        />
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
      </View>
      <View style={styles.itemCardContainer}>
        <TemplateCard cardWidth={cardWidth} data={JSON.parse(fullData)} />
      </View>
    </TouchableOpacity>
  );
};

const EditCardScreen = ({navigation, route}: Props) => {
  const [cards, setCards] = useState(route.params.cards);
  const [checkList, setCheckList] = useState(new Array());
  const [thisToggle, setThisToggle] = useState(false);
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerSection1}>
          <AntDesign
            name="arrowleft"
            size={27}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>명함 편집</Text>
        </View>

        <View style={styles.headerSection2}>
          <TouchableOpacity onPressOut={() => navigation.goBack()}>
            <Text style={styles.textEdit}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <ScrollView>
          {cards.map((card: any) => (
            <CardItem
              key={card.id}
              card={card}
              setCheckList={setCheckList}
              checkList={checkList}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.footerMenu}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            navigation.push('MoveGroup', {
              checkList: checkList,
              parentToggle: thisToggle,
              setParentToggle: setThisToggle,
              setMainToggle: route.params.setMainToggle,
              mainToggle: route.params.mainToggle,
            });
          }}>
          <Image
            source={imgPeople}
            style={{width: 30, height: 17, marginHorizontal: 10}}
          />
          <Text>그룹 이동</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            const groupIds = cards
              .filter((card: any) => checkList.includes(card.id))
              .map((card: any) => card.groupId);
            updateGroupCnt(groupIds).then(() => console.log('updated!'));

            deleteCards(checkList).then(() => {
              setCards(
                cards.filter((card: any) => !checkList.includes(card.id)),
              );
              route.params.setMainToggle(!route.params.mainToggle);
            });
          }}>
          <Image source={imgDelete} style={styles.imgFooter} />
          <Text>명함 삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  /** HEADER */
  header: {
    // flex: 1,
    height: '10%',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSection1: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerSection2: {
    marginRight: 10,
  },
  title: {
    marginLeft: 5,
    fontSize: 17,
    fontFamily: 'sd_gothic_m',
  },
  textEdit: {
    fontSize: 17,
    fontFamily: 'sd_gothic_b',
    color: '#6270EA',
  },
  /** CONTENT */
  content: {
    // flex: 7,
    height: '70%',
    width: '90%',
    left: '5%',
  },
  row: {},
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
  left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgChecked: {
    width: 25,
    height: 25,
    marginRight: 13,
  },

  /** FOOTER MENU */
  footerMenu: {
    // flex: 2,
    height: '20%',
    // borderWidth: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 1,
  },
  footerItem: {
    paddingLeft: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // alignItems: 'stretch'
  },
  imgFooter: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  test1: {},
});

export default EditCardScreen;
