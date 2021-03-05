import React from 'react';
import styled from 'styled-components/native';

const defaultTitle = 'Button';

export default ({ title, style, onPress }) => (
  <ButtonContainer onPress={onPress} style={style}>
    <ButtonText>{title || defaultTitle}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  background: steelblue;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`;
