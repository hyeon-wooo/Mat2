import React from 'react';
import S from 'styled-components/native';

const Container = S.ScrollView`
    background-color: #333;
`;
const Text = S.Text``;

interface Props {
  route: any;
  navigation: any;
}

const SelectMatLayoutScreen = ({route}: Props) => {
  console.log('## inputData ##', route.params);
  return (
    <Container>
      <Text>This is ChooseLayout Screen.</Text>
    </Container>
  );
};

export default SelectMatLayoutScreen;
