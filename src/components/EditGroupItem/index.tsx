import React, {useState} from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import {imgDelete, imgPencil2} from '~/Assets/Images'

interface Props {
    item:any;
    visibleMainModal:any;
}
const EditGroupItem = ({item, visibleMainModal}: Props) => {
    const [modeEdit, setModeEdit] = useState(false)
    return (
        <View style={styles.container}>
            <TextInput autoFocus style={styles.groupName}>{item.groupName}</TextInput>
            <View style={styles.btnContainer}>
                {/* <Image source={imgPencil2} style={styles.imgEdit} /> */}
                <Image source={imgDelete} style={styles.imgEdit} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        paddingVertical: 8
    },
    groupName: {
        fontSize: 20,
        marginLeft: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgEdit :{
        width: 20,
        height: 20,
        marginRight: 10
    }
})

export default EditGroupItem;