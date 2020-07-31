import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {imgArrowBack} from '~/Assets/Images';

interface Props {
    navigation: any;
    route: any;
}

const deviceWidth = Dimensions.get('window').width;

const WalletSearch = ({navigation, route}: Props) => {
    const [focused, setFocused] = useState(false)
    return (
        <View style={styles.wrap}>
            <View style={styles.header}>
                <TouchableOpacity onPressOut={() => navigation.goBack()}>
                    <Image source={imgArrowBack} style={styles.btnBack} />
                </TouchableOpacity>
                <View>
                <TextInput style={[styles.inputSearch, focused? styles.focused : styles.notFocused]} 
                onFocus={() => setFocused(true)} 
                onBlur={() => setFocused(false)}
                autoFocus
                />

                </View>
            </View>
            <View style={styles.content} >
                <ScrollView>

                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnBack: {
        width: 23,
        height: 23,
        marginLeft: 10
    },
    inputSearch: {
        // backgroundColor:'green',
        width: deviceWidth * (8.5/10),
        marginRight: 15,
        fontSize: 17,
        borderBottomWidth: 2,
    },
    focused: {
        borderColor: '#6270EA'
    },
    notFocused: {
        borderColor: '#DDDDDD'
    },
    content: {
        flex: 9,
        borderWidth: 1
    },

})

export default WalletSearch;