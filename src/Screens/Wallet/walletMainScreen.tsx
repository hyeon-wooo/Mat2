import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {imgArrowDown, imgPencil, imgFilter} from '~/Assets/Images';
import S from 'styled-components/native';

import WalletHeader from '~/components/WalletHeader';
import AccordionItem from '~/components/AccordionItem';

import SQLite from 'react-native-sqlite-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import data from '~/Assets/layoutCards';
import {useIsFocused} from '@react-navigation/native';

interface Props {
  navigation: any;
  route: any;
}

const getCards = (groupId: number, filter: string) =>
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

    // 인자로 넘어온 groupId에 따라 달라지는 sql
    const sql = !groupId
      ? `select * from cards ${
          filter === 'byName' ? 'order by nameGroup' : 'order by companyGroup'
        }`
      : `select * from cards where groupId=${groupId} ${
          filter === 'byName' ? 'order by nameGroup' : 'order by companyGroup'
        }`;

    let data = new Object();
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, result) => {
          console.log('#transaction success : walletMain# ', result.rows);
          for (let i = 0; i < result.rows.length; i++) {
            const item = result.rows.item(i);
            // temp.push(JSON.parse(item));
            // temp.push(result.rows.item(i))
            // console.log(item)

            const groupName = String(
              filter === 'byName' ? item.nameGroup : item.companyGroup,
            );
            data.hasOwnProperty(groupName)
              ? data[groupName].push(item)
              : (data[groupName] = [item]);
          }
          resolve(data);
        });
      },
      (err) => {
        console.log(err);
        reject(err);
      },
    );
  });

const WalletMainScreen = ({navigation, route}: Props) => {
  // groupId : 0(전체), 1(미지정그룹)
  const [groupId, setGroupId] = useState(0);
  const [currentGroup, setCurrentGroup] = useState('전체');
  // filter : 'byName'(이름순) 'byCompany'(회사명순)
  const [filter, setFilter] = useState('byName');
  const [cards, setCards] = useState(new Object());
  const [modalVisible, setModalVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const focused = useIsFocused();
  const [deletedGroupId, setDeletedGroupId] = useState(new Array());

  // useEffect(()=> {
  //   getCards(groupId, filter).then(res => {})
  // }, [groupId, filter])
  useEffect(() => {
    getCards(0, 'byName').then((res: any) => {
      setCards(res);
    });
  }, []);
  useEffect(() => {
    if (focused) {
      if (deletedGroupId.includes(groupId)) {
        setFilter('byName');
        setCurrentGroup('전체');
        getCards(0, 'byName').then((res: any) => {
          setCards(res);
        });
      } else {
        getCards(groupId, filter).then((res: any) => {
          setCards(res);
        });
      }
    }
  }, [groupId, filter, toggle, focused]);

  return (
    <View style={styles.wrap}>
      {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          >
            <ModalFilter setFilter={setFilter} setModalVisible={setModalVisible} modalVisible={modalVisible} />
          </Modal> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>명함 정렬 방식을 선택해주세요</Text>

            <TouchableHighlight
              style={{...styles.openButton, marginBottom: 10}}
              onPress={() => {
                setFilter('byName');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>이름순</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setFilter('byCompany');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>회사명순</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <WalletHeader onPressOut={() => navigation.push('WalletSearch')} />
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuGroup}
          onPressOut={() =>
            navigation.push('SelectGroup', {
              onGoBack1: setGroupId,
              onGoBack2: setCurrentGroup,
              setDeletedGroupId,
              currentGroupId: groupId,
            })
          }>
          <Text style={styles.txt}>{currentGroup}</Text>
          <Image source={imgArrowDown} style={[styles.menuIcon, {height: 8}]} />
        </TouchableOpacity>

        <View style={styles.menuExtra}>
          <TouchableOpacity
            style={styles.menuExtraItem}
            onPressOut={() => setModalVisible(true)}>
            <Text style={styles.txt}>
              {filter === 'byName' ? '이름순' : '회사명순'}
            </Text>
            <Image source={imgFilter} style={styles.menuIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuExtraItem}
            onPressOut={() => {
              const cards2 = Object.values(cards);
              const cardsData = new Array();
              cards2.forEach((arr) => {
                arr.forEach((card: any) => cardsData.push(card));
              });

              navigation.push('EditCard', {
                cards: cardsData,
                setMainToggle: setToggle,
                mainToggle: toggle,
              });
            }}>
            <Text style={styles.txt}>편집</Text>
            <Image source={imgPencil} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          {Object.entries(cards).map((entry) => (
            <AccordionItem key={entry[0]} title={entry[0]} cards={entry[1]} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
  menu: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  menuIcon: {
    width: 13,
    height: 13,
    marginLeft: 5,
  },
  menuGroup: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuExtra: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuExtraItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },
  content: {
    flex: 8.5,
    // width: '90%',
    // left: '5%',
  },
  scrollView: {},
  modalBtn: {
    backgroundColor: 'green',
    marginVertical: 20,
  },
  txt: {
    color: '#444444',
    fontFamily: 'sd_gothic_b',
    // fontSize: 15,
  },

  /** MODAL */
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '75%',
    height: '30%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    width: '50%',
    // backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'sd_gothic_m',
  },
});

export default WalletMainScreen;
