import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {imgChecked, imgUnchecked} from '~/Assets/Images'

interface Props {
    value:string;
    label:string;
    checkList:any
}

const CheckableLabel = ({value, label, checkList}: Props) => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.row} onTouchEnd={() => {
            setChecked(!checked);
            const idx = checkList.indexOf(value)
            idx === -1? checkList.push(value) : checkList.splice(idx, 1)    
        }}>
            <Image source={checked? imgChecked : imgUnchecked} style={styles.icon} />
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        // borderWidth: 1,
        // width: '40%'
    },
    icon: {
        width: 25,
        height: 25
    },
    label: {
        fontSize: 20,
        paddingLeft: 20
    }
})

export default CheckableLabel;