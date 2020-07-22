import React from 'react';
import S from 'styled-components';

const Container = S.ScrollView`
    background-color: #333;
`;
const Text = S.Text``;

interface Props {}

const SelectMatLayoutScreen = ({}: Props) => {
  return (
    <Container>
      <Text>This is createCode Screen.</Text>
    </Container>
  );
};

export default SelectMatLayoutScreen;
