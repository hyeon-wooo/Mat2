import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {LogBox} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  imgChecked,
  imgUnchecked,
  imgPencil2,
  imgPlusActive,
} from '~/Assets/Images';

// LogBox.ignoreWarnings([
//   'Non-serializable values were found in the navigation state',
// ]);
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const getGroups = () =>
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

    const sql = 'select * from cardGroup';

    let data = new Array();
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, result) => {
          console.log('#transaction success : selectGroup# ', result.rows);
          for (let i = 0; i < result.rows.length; i++) {
            const item = result.rows.item(i);
            // temp.push(JSON.parse(item));
            // temp.push(result.rows.item(i))
            // console.log(item)
            data.push(item);
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

const getCountOfAllCard = () =>
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

    const sql = 'select count(id) from cards';

    let data = new Array();
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, result) => {
          console.log('#transaction success : selectAlCnt# ', result.rows);
          for (let i = 0; i < result.rows.length; i++) {
            const item = result.rows.item(i);
            // temp.push(JSON.parse(item));
            // temp.push(result.rows.item(i))
            // console.log(item)
            data.push(item);
          }
          // console.log('#cnt#', typeof result.rows.item(0), result.rows.item(0)['count(id)'])
          resolve(result.rows.item(0)['count(id)']);
        });
      },
      (err) => {
        console.log(err);
        reject(err);
      },
    );
  });

const insertNewGroup = (text: string) =>
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

    const sql = 'insert into cardGroup(groupName, cnt) values(?,?)';

    let data = new Array();
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [text, 0], (tx, result) => {
          console.log('#transaction success : insertGroup# ', result.rows);
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
const SelectGroup = ({navigation, route}: Props) => {
  const {currentGroupId} = route.params;
  const [modeEdit, setModeEdit] = useState(false);
  const [text, setText] = useState('');
  const [groups, setGroups] = useState(new Array());
  const [cntAllCard, setCntAllCard] = useState(0);
  const [toggle, setToggle] = useState(true);
  const focused = useIsFocused();
  useEffect(() => {
    getCountOfAllCard().then((cnt: any) => setCntAllCard(cnt));
    getGroups().then((res: any) => setGroups(res));
  }, [toggle, focused]);

  return (
    <View style={styles.wrap}>
      {/* <FlatList data={groups} renderItem={Item} key={(group:any) => group.id} /> */}
      {/* {groups.map(group => <GroupItem item={group} isEditting={modeEdit} goBack={navigation.goBack} />)} */}
      {/* {groups.map(group => console.log(group))} */}
      {/* <Button title='1' onPress={() => {
                route.params.onGoBack(1);
                navigation.goBack();
            }} />
            <Button title='2' onPress={() => {
                route.params.onGoBack(2);
                navigation.goBack();
            }} /> */}

      <View style={styles.header}>
        <View style={styles.headerSection1}>
          <AntDesign
            name="arrowleft"
            size={27}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>그룹선택</Text>
        </View>

        <View style={styles.headerSection2}>
          <TouchableOpacity
            onPressOut={() =>
              navigation.push('EditGroup', {
                setToggle,
                toggle,
                setDeletedGroupId: route.params.setDeletedGroupId,
              })
            }>
            <Text style={styles.textEdit}>편집</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <ScrollView>
          <TouchableOpacity
            style={styles.itemContainer}
            onPressOut={() => {
              route.params.onGoBack1(0);
              route.params.onGoBack2('전체');
              navigation.goBack();
            }}>
            <View style={styles.itemSection1}>
              <Image
                source={currentGroupId === 0 ? imgChecked : imgUnchecked}
                style={styles.imgChecked}
              />
              <Text style={styles.textGroupName}>전체</Text>
            </View>
            <Text style={styles.textGroupCount}>{cntAllCard}장</Text>
          </TouchableOpacity>

          {groups.map((group) => {
            return (
              <TouchableOpacity
                key={group.id}
                style={styles.itemContainer}
                onPressOut={() => {
                  route.params.onGoBack1(group.id);
                  route.params.onGoBack2(group.groupName);
                  navigation.goBack();
                }}>
                <View style={styles.itemSection1}>
                  <Image
                    source={
                      currentGroupId === group.id ? imgChecked : imgUnchecked
                    }
                    style={styles.imgChecked}
                  />
                  <Text style={styles.textGroupName}>{group.groupName}</Text>
                </View>
                <Text style={styles.textGroupCount}>{group.cnt}장</Text>
              </TouchableOpacity>
            );
          })}

          {!modeEdit ? (
            <TouchableOpacity
              style={styles.itemContainer}
              onPressOut={() => {
                setModeEdit(true);
              }}>
              <View style={styles.itemSection1}>
                <Image source={imgPlusActive} style={styles.imgChecked} />
                <Text style={styles.textGroupName}>그룹 추가</Text>
              </View>
              {/* <Text style={styles.textGroupCount}></Text> */}
            </TouchableOpacity>
          ) : (
            <View style={styles.itemContainer}>
              <View style={styles.itemSection1}>
                <Image source={imgPlusActive} style={styles.imgChecked} />
                {/* <Text style={styles.textGroupName}>그룹추가</Text> */}
                <TextInput
                  onChangeText={(text: any) => setText(text)}
                  style={styles.textGroupName}
                  autoFocus
                />
              </View>
              <TouchableOpacity
                onPressOut={() => {
                  insertNewGroup(text).then(() => {
                    setToggle(!toggle);
                    setModeEdit(false);
                  });
                }}>
                <Text style={styles.btnCreateGroup}>생성</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  itemContainer: {
    // flex: 1,
    // height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 3,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    paddingVertical: 13,
  },
  itemSection1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
  },
  textGroupName: {
    fontSize: 20,
    fontFamily: 'sd_gothic_m',
    marginLeft: 20,
  },
  textGroupCount: {
    fontSize: 15,
    fontFamily: 'sd_gothic_m',
    color: '#555555',
    marginRight: 10,
  },
  header: {
    flex: 1,
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
  content: {
    flex: 13,
    // borderWidth: 3,
    width: '90%',
    left: '5%',
  },
  groupText: {
    fontSize: 15,
    borderWidth: 1,
  },
  imgChecked: {
    width: 20,
    height: 20,
  },
  btnCreateGroup: {
    backgroundColor: '#6270EA',
    fontSize: 20,
    color: 'white',
    padding: 5,
    borderRadius: 5,
    fontFamily: 'sd_gothic_m',
  },
});

export default SelectGroup;
