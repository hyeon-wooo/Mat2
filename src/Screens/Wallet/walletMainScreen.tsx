import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import {imgArrowDown, imgPencil, imgFilter} from '~/Assets/Images'

import WalletHeader from '~/components/WalletHeader';
import AccordionItem from '~/components/AccordionItem';

import SQLite from 'react-native-sqlite-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from '~/Assets/layoutCards';

interface Props {
    navigation:any;
    route:any;
}

const getCards = (groupId:number, filter:string) => new Promise((resolve, reject)=>{
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
      ? `select * from cards` 
      : `select * from cards where groupId=${groupId}`

    let data = new Object()
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, result) => {
          console.log('#transaction success : walletMain# ', result.rows);
          for (let i = 0; i < result.rows.length; i++) {
            const item = result.rows.item(i);
            // temp.push(JSON.parse(item));
            // temp.push(result.rows.item(i))
            // console.log(item)
            
            const groupName = String(filter === 'byName'? item.nameGroup : item.companyGroup)
            data.hasOwnProperty(item.nameGroup)
            ? data[groupName].push(item)
            : data[groupName] = [item]
          }
          resolve(data)
        });
      },
      (err) => {console.log(err);reject(err)}
    );
  })


const WalletMainScreen = ({navigation, route}:Props) => {
    // groupId : 0(전체), 1(미지정그룹)
    const [groupId, setGroupId] = useState(0)
    // filter : 'byName'(이름순) 'byCompany'(회사명순)
    const [filter, setFilter] = useState('byName')
    const [cards, setCards] = useState(new Object())

    // useEffect(()=> {
    //   getCards(groupId, filter).then(res => {})
    // }, [groupId, filter])
    useEffect(() => {
      getCards(groupId, filter).then((res:any) => {setCards(res)})
    }, [groupId, filter])

   return (
       <View style={styles.wrap}>
           <WalletHeader onPressOut={() => navigation.navigate('WalletSearch')}/>
            <View style={styles.menu}>
              <TouchableOpacity style={styles.menuGroup} onPressOut={() => navigation.navigate('SelectGroup', {onGoBack: setGroupId})}>
                <Text>그룹선택</Text>
                <Image source={imgArrowDown} style={styles.menuIcon} />
              </TouchableOpacity>

              <View style={styles.menuExtra}>
                <TouchableOpacity style={styles.menuExtraItem}
                onPressOut={() => {/* 모달 생성 */}}>
                  <Text>{filter === 'byName'? '이름순' : '회사명순'}</Text>
                  <Image source={imgFilter} style={styles.menuIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuExtraItem}
                onPressOut={() => {/* 편집화면으로 이동 (cards를 params로 넘김) */}}>
                  <Text>편집</Text>
                  <Image source={imgPencil} style={styles.menuIcon} />
                </TouchableOpacity>        
              </View>
            </View>

            <View style={styles.content} >
              <ScrollView style={styles.scrollView}>
                <Text>{groupId}</Text>

                {Object.entries(cards).map(entry => 
                  <AccordionItem key={entry[0]} title={entry[0]} cards={entry[1]} />
                )}
                
              </ScrollView>
            </View>
       </View>
   )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'white'
    },
    menu: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuIcon: {
      width: 15,
      height: 13,
      marginLeft: 5
    },
    menuGroup: {
      marginLeft: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    menuExtra: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    menuExtraItem: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 13
    },
    content: {
        flex: 8.5,
        width: '90%',
        left: '5%'
    },
    scrollView: {

    },
})

export default WalletMainScreen;