import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Axios from 'axios';
import {imgArrowBack, imgArrowDown2} from '~/Assets/Images';
import {ScrollView} from 'react-native-gesture-handler';

interface NoticeProps {
  notice: any;
}

const tmpNotice = [
  {
    title: '공지사항1',
    content: 'this is a notice1 as sample',
    createdAt: '2020-08-21',
  },
  {
    title: '공지사항2',
    content: 'this is a notice2 as sample',
    createdAt: '2020-08-24',
  },
];

const Notice = ({notice}: NoticeProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapse style={s.container}>
      <CollapseHeader
        style={{
          //   borderBottomWidth: 1,
          // borderColor: '#cccccc',
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onTouchEnd={() => setOpen(!open)}>
        <View style={{marginLeft: 15, width: '80%'}}>
          <Text style={s.noticeCreated}>{notice.createdAt}</Text>
          <Text style={s.noticeTitle}>{notice.title}</Text>
        </View>
        <Image
          source={imgArrowDown2}
          style={[
            {width: 20, height: 20 * (6.75 / 13.5), marginRight: 15},
            open ? {transform: [{rotate: '180deg'}]} : {},
          ]}
        />
      </CollapseHeader>
      <CollapseBody style={{backgroundColor: '#EFEFEF'}}>
        <View style={{width: '90%', left: '5%'}}>
          <Text style={s.noticeContent}>{notice.content}</Text>
        </View>
      </CollapseBody>
    </Collapse>
  );
};

const NoticeScreen = () => {
  const [noties, setNoties] = useState(new Array());
  useEffect(() => {
    Axios.get(`http://mat-server-1.herokuapp.com/notice/getAll`).then(
      (res: any) => {
        if (res.data.code === 0) {
          setNoties(res.data.data);
        }
      },
    );
  }, []);
  return (
    <View style={s.wrap}>
      <ScrollView>
        {noties.map((noti: any) => (
          <Notice notice={noti} />
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  container: {
    borderColor: '#cccccc',
    borderBottomWidth: 1,
  },
  noticeTitle: {
    fontSize: 20,
    fontFamily: 'sd_gothic_b',
    color: '#444444',
  },
  noticeCreated: {
    color: '#AEAEAE',
  },
  noticeContent: {
    fontSize: 15,
    fontFamily: 'sd_gothic_m',
    color: '#444444',
    marginVertical: 20,
  },
});

export default NoticeScreen;
