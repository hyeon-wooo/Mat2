import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import db from '~/DB';
import { imgChecked, imgUnchecked } from '~/Assets/Images';

interface Props {
    navigation: any;
    route: any;
}


const MoveGroupScreen = ({navigation, route}: Props) => {
    const [groups, setGroups] = useState(new Array())
    const [selectedId, setSelectedId] = useState(1)
    const {checkList} = route.params
    useEffect(() => {
        db.getGroups().then((res:any) => setGroups(res))
    }, [])
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
              <View style={styles.headerSection1}>
                <AntDesign name='arrowleft' size={27} onPress={() => navigation.goBack()}/>
                <Text style={styles.title}>그룹 이동</Text>
              </View>

              <View style={styles.headerSection2}>
                <TouchableOpacity onPressOut={() => {
                    db.getGroupIdsByCardId(checkList).then((groupIdList:any) => {
                        groupIdList.forEach((groupId:any) => {
                            db.updateGroupCnt(groupId).then((res) => console.log(res))
                        })
                    } )
                    
                    db.moveGroups(checkList, selectedId).then(() => {
                        route.params.setMainToggle(!route.params.mainToggle)
                        route.params.setParentToggle(!route.params.parentToggle)
                        navigation.goBack()
                    })
                }}>
                  <Text style={styles.textEdit}>완료</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.content} >
            {groups.map( (group:any) => (
                <TouchableOpacity key={group.id} style={styles.itemContainer}
                onPress={() => {
                    console.log('Pressed id : ', group.id)
                    setSelectedId(group.id)
                }}>
                    <View style={styles.itemSection1}>
                      <Image source={selectedId===group.id? imgChecked : imgUnchecked} style={styles.imgChecked} />
                      <Text style={styles.textGroupName}>{group.groupName}</Text>
                    </View>          
                    <Text style={styles.textGroupCount}>{group.cnt}장</Text>
                </TouchableOpacity>
            ))
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {

    },
    header: {
        flex: 1,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      headerSection1: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      headerSection2: {
        marginRight: 10
      },
      title: {
        marginLeft: 5,
        fontSize: 17,
        fontFamily: 'sd_gothic_m'
      },
      textEdit: {
        fontSize: 17,
        fontFamily: 'sd_gothic_b',
        color: '#6270EA'
      },
      content: {
        flex: 13,
        // borderWidth: 3,
        width: '90%',
        left: '5%'
      },
    row: {
        borderWidth: 1
    },
    imgChecked: {
        width: 20,
        height: 20
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
        paddingVertical: 13
      },
      itemSection1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10
      },
      textGroupName: {
        fontSize: 20,
        fontFamily: 'sd_gothic_m',
        marginLeft: 20
      },
      textGroupCount: {
        fontSize: 15,
        fontFamily: 'sd_gothic_m',
        color: '#555555',
        marginRight: 10
      }
})

export default MoveGroupScreen;