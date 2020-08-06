import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Modal, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SQLite from 'react-native-sqlite-storage';
import TextInputForGroupEdit from '~/components/TextInputForGroupEdit';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import db from '~/DB';
import { modalText1 } from '~/Assets/Images';

const deviceWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('screen').height

interface Props {
    navigation:any;
    route:any;
}
const EditGroupScreen = ({navigation, route}: Props) => {
    const [groups, setGroups] = useState(new Array())
    const [deleteGroupId, setDeleteGroupId] = useState(0)
    const [modalVisible1, setModalVisible1] = useState(false)
    const [modalVisible2, setModalVisible2] = useState(false)
    const [modalVisible3, setModalVisible3] = useState(false)
    const [thisToggle, setThisToggle] = useState(false)
    // const focused = useIsFocused();
    useEffect(() => {
        db.getGroups().then((groups:any) => setGroups(groups))
    }, [thisToggle])
    return (
      <KeyboardAwareScrollView style={{width: '100%', height: '100%'}} keyboardShouldPersistTaps="always">
          <View>

      {/* MODAL 1 */}
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.modalText}>그룹 삭제하기</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontFamily: 'sd_gothic_b', color: '#7D7D7D'}}>전체삭제 선택 시 그룹 안의 </Text>
                <Text style={{fontFamily: 'sd_gothic_b',color: '#EA6060'}}>모든 명함들이 삭제</Text>
                <Text style={{fontFamily: 'sd_gothic_b',color: '#7D7D7D'}}>됩니다.</Text>
              </View>
            </View>

            <Image source={modalText1} style={{width: '80%', height: '20%'}} />

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{ ...styles.openButton, width: '25%', backgroundColor: '#7D7D7D'}}
              onPress={() => {
                setModalVisible1(!modalVisible1);
              }}
            >
              <Text style={styles.textStyle}>취소</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.openButton, width: '35%', backgroundColor: '#EA6060'}}
              onPress={() => {
                setModalVisible2(!modalVisible2);
                setModalVisible1(!modalVisible1);
              }}
            >
              <Text style={styles.textStyle}>전체 삭제</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.openButton, width: '35%', backgroundColor: '#6078EA'}}
              onPress={() => {
                setModalVisible3(!modalVisible3);
                setModalVisible1(!modalVisible1);
              }}
            >
              <Text style={styles.textStyle}>그룹 삭제</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL 2 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={{...styles.modalView, height: '28%'}}>
            <View>
              <Text style={styles.modalText}>전체 삭제하기</Text>
              <Text style={{fontSize: 12.5, color: '#7D7D7D', fontFamily: 'sd_gothic_b'}}>정말로 그룹과 그룹 안의 모든 명함을 삭제하시겠습니까?</Text>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: '#EEEEEE' }}
              onPress={() => {
                setModalVisible2(!modalVisible2);
              }}
            >
              <Text style={{...styles.textStyle, color: '#444444'}}>취소</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: '#6078EA' }}
              onPress={() => {
                db.deleteGroupAndCards(deleteGroupId).then(() => {
                  setThisToggle(!thisToggle)
                  setModalVisible2(!modalVisible2)
                })
              }}
            >
              <Text style={styles.textStyle}>확인</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL 3 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={{...styles.modalView, height: '28%'}}>
            <View>
              <Text style={styles.modalText}>그룹 삭제하기</Text>
              <Text style={{fontSize: 12.5, color: '#7D7D7D', fontFamily: 'sd_gothic_b'}}>그룹 안의 명함들은 미지정 그룹으로 이동합니다</Text>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: '#EEEEEE' }}
              onPress={() => {
                setModalVisible3(!modalVisible3);              
              }}
            >
              <Text style={{...styles.textStyle, color: '#444444'}}>취소</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: '#6078EA' }}
              onPress={() => {
                db.getCountByGroupId(deleteGroupId).then((cntForDelete:any) => {
                  db.deleteOnlyGroup(deleteGroupId, cntForDelete).then(() =>{
                    setThisToggle(!thisToggle);
                    setModalVisible3(!modalVisible3);
                  })
                })
              }}
            >
              <Text style={styles.textStyle}>확인</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


            <View style={styles.header}>
              <View style={styles.headerSection1}>
                <AntDesign name='arrowleft' size={27} onPress={() => navigation.goBack()}/>
                <Text style={styles.title}>그룹편집</Text>
              </View>

              <View style={styles.headerSection2}>
                <TouchableOpacity onPressOut={() => {
                    navigation.goBack()
                    // console.log('#toggle#', route.params.toggle)
                }}>
                  <Text style={styles.textFinish}>완료</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.content}>
                {/* {groups.map(group => <EditGroupItem key={group.id} item={group} visibleMainModal={false} />)} */}
                {groups.map((group:any) => <TextInputForGroupEdit setDeleteGroupId={setDeleteGroupId} onPressDeleteBtn={() => setModalVisible1(true)} groupId={group.id} initialValue={group.groupName} key={group.id} /> )}
                
            </View>
        </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1
    },
    header: {
        height: screenHeight * (1/14),
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
    textFinish: {
        fontSize: 17,
        fontFamily: 'sd_gothic_b',
        color: '#6270EA'
    },
    content: {
      height: screenHeight * (13/14),
        // borderWidth: 3,
        width: '90%',
        left: deviceWidth * (5/100),
        // flexDirection: 'row',
        // justifyContent: 'flex-start'
        
    },

    /** MODAL */
    modelContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 6
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      width: '90%',
      height: '35%',
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      // alignItems: 'stretc',
      justifyContent: 'space-between',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      width: '45%',
      height: 35,
      // backgroundColor: "#F194FF",
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      backgroundColor: "#2196F3",
      marginHorizontal: 8,
      justifyContent: 'center'
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",

      height: 20,
      // width: '40%'
    },
    modalText: {
      marginBottom: 15,
      // textAlign: "center",
      fontSize: 25,
      fontFamily: 'sd_gothic_b'
    }
})

export default EditGroupScreen;