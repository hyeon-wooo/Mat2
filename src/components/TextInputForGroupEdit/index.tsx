    import React, {useState} from 'react';
import {View, TextInput, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { imgDelete, imgPencil2 } from '~/Assets/Images';
import db from '~/DB';


interface Props {
    groupId:number;
    initialValue: string;
    onPressDeleteBtn?: any;
    setDeleteGroupId: any;
}
const TextInputForGroupEdit = ({groupId, initialValue, onPressDeleteBtn, setDeleteGroupId}: Props) => {
    const [modeEdit, setModeEdit] = useState(false)
    const [text, setText] = useState(initialValue)
    return (
        <View style={{...styles.wrap, borderColor: modeEdit? '#6270EA' : '#cccccc'}}>
        <View style={styles.section1}>
        <TouchableOpacity onPress={() => {
            setDeleteGroupId(groupId)
            onPressDeleteBtn()
            }}>
            <Image source={imgDelete} style={styles.imgDelete} />
        </TouchableOpacity>
            {!modeEdit
            ? (
                <Text style={styles.text}>{text}</Text>
            )
            : (
                <TextInput defaultValue={text} autoFocus={modeEdit} style={styles.textinput} onChangeText={(text) => setText(text)} />
            )
            }
        </View>
        <TouchableOpacity onPress={() => {
            db.updateGroupName(groupId, text).then(() => setModeEdit(!modeEdit))
            
        }}>
            <Image source={imgPencil2} style={styles.imgDelete} />
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        // borderColor: '#cccccc'
    },
    imgDelete: {
        width: 20,
        height: 20,
        // marginRight: 15
    },
    imgEdit: {

    },
    btnFinish: {

    },
    section1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    textinput: {
        width: '80%',
        borderWidth: 1,
        padding: 0,
        // height: 30,
        fontSize: 20,
        fontFamily: 'sd_gothic_m',
        marginLeft: 20
    },
    text: {
        width: '80%',
        // height: 30,
        fontSize: 20,
        fontFamily: 'sd_gothic_m',
        marginLeft: 20
    }
})

export default TextInputForGroupEdit;