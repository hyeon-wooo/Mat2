import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Collapse, CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

interface Props {
    title:string;
    cards:any;
}
interface CardProps {
    name: string;
    company: string;
    team?: string;
    position?: string;
    fullData?: string;
}
const CardItem = ({name, company, team, position, fullData}: CardProps) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{company}</Text>
        </View>
    )
}

const AccordionItem = ({title, cards}: Props) => {
    return (
        <Collapse style={styles.row}>
            <CollapseHeader>
    <Text style={{height: 30, fontSize: 25}}>{title}</Text>
            </CollapseHeader>
            <CollapseBody>
                {cards.map((card:any) => {
                    return <CardItem name={card.name} company={card.company} />
                })}
            </CollapseBody>
        </Collapse>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    row: {

    }
})

export default AccordionItem;