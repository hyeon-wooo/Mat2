import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {imgArrowBack} from '~/Assets/Images';
import SQLite from 'react-native-sqlite-storage';
import WalletCardItem from '~/components/WalletCardItem';

const getSearchResult = (text:string) => new Promise((resolve, reject) => {
    console.log('### text ###', text)
    if (text==='') {
        resolve(new Array())
    }
    else {

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
            
        const sql = `select * from cards where name like '${text}%' or company like '${text}%' order by name, company`
        let data = new Array()
        db.transaction(
            (tx) => {
                tx.executeSql(sql, [], (tx, result) => {
                    console.log('#transaction success : selectSearchCard# ', result.rows);
                    for (let i = 0; i < result.rows.length; i++) {
                        const item = result.rows.item(i);
                        data.push(item)
                    }
                    resolve(data)
                });
            },
            (err) => {console.log(err);reject(err)}
        );
    }
})
            
interface Props {
    navigation: any;
    route: any;
}

const deviceWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('screen').height;

const WalletSearchScreen = ({navigation, route}: Props) => {
    const [focused, setFocused] = useState(false)
    const [inputText, setInputText] = useState('')
    const [result, setResult] = useState(new Array())
    useEffect(() => {
        getSearchResult(inputText).then((result:any) => setResult(result))
    }, [inputText])
    return (
        <KeyboardAwareScrollView style={{width: '100%', height: '100%'}} keyboardShouldPersistTaps="always">
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPressOut={() => navigation.goBack()}>
                        <Image source={imgArrowBack} style={styles.btnBack} />
                    </TouchableOpacity>
                        <TextInput style={[styles.inputSearch, focused? styles.focused : styles.notFocused]} 
                        onFocus={() => setFocused(true)} 
                        onBlur={() => setFocused(false)}
                        autoFocus
                        onChangeText={(text) => {
                            setInputText(text)
                        }}
                        />
                </View>
                <View style={styles.content} >
                    <ScrollView>
                        {result.map(card => (
                            <WalletCardItem key={card.id} cardData={card} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        // flex: 1,
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
        width: '90%',
        left: '5%'
    },

})

export default WalletSearchScreen;