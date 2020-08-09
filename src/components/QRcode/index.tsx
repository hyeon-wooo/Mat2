import React from 'react';
import { View, Text } from 'react-native';
import QR from 'react-native-qrcode-svg';

interface Props {
    value:any;
}
const QRcode = ({value}: Props) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>{value.cardName || ''}</Text>
            <QR value={JSON.stringify(value.fullData)} size={150} />
        </View>
    )
}

export default QRcode;