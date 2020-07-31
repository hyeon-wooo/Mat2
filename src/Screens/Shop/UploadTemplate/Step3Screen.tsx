import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView, Text } from 'react-native';
import Draggable from 'react-native-draggable';
import { TextInput } from 'react-native-gesture-handler';
import {imgChecked, templateHeader2} from '~/Assets/Images';
import styled from 'styled-components';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const cardWidth = deviceWidth * (8/10)
const cardHeight = cardWidth * (9/16)

interface Props {
    route: any;
    navigation: any;
}

const Step3Screen = ({route, navigation}: Props) => {
    const checkList = route.params;
    console.log(checkList)
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <Image source={templateHeader2} style={{width: deviceWidth, height: '70%', marginTop: '3%'}} />
            </View>

            <View style={styles.cardContainer} >
                <View style={styles.card}>

                </View>
            </View>

            <View style={styles.emptyView} >

                    {/* <Draggable x={75} y={100} 
                        renderSize={56} 
                        renderColor='black' 
                        renderText='A' 
                        isCircle 
                        shouldReverse 
                        onShortPressRelease={()=>{}}
                    /> */}

            {/* <Draggable 
                imageSource={imgChecked} 
                // renderSize={80} 
                x={100}
                y={200}
                onDragRelease={(event, gestueState, bounds)=>{console.log('드래그 종료', event.nativeEvent.pageX)}}
                onLongPress={()=>console.log('long press')}
                onShortPressRelease={()=>console.log('press drag')}
                onPressIn={()=>console.log('in press')}
                onPressOut={()=>console.log('out press')}
                /> */}

                    {/* <View style={styles.row}>
                        
                    </View> */}
            </View>
                    <Draggable x={0} y={0} z={100} minX={0} minY={0} >
                        <TextInput style={styles.test1} placeholder={'hihi'}/>
                    </Draggable>
        </View>
    )
}

const styles = StyleSheet.create({
    test1: {
        borderWidth: 1,
        // width: '100%',
        fontSize: 20,
        padding: 3,
        
    },
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        // justifyContent: 'center'
        // borderWidth:1
      },
    headerContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'yellow'
    },
    scrollContainer: {
        flex: 4,
        width: '100%',
        borderWidth: 1,
        borderColor: 'red'
    },
    scrollView: {
        backgroundColor: 'green',
        width:' 100%',
        // flex: 1
        height: '100%'
    },
    row: {
        width: '50%',
        height: 90,
        borderWidth: 2,
        // backgroundColor: 'red'
    },
    emptyView: {
        flex: 4
    },
    cardContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue'
    },
    card: {
        width: cardWidth,
        height: cardHeight,
        borderRadius: 4,
        backgroundColor: '#333333',
        elevation: 5,
    }
})

export default Step3Screen;