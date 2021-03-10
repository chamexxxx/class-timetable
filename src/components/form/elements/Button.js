import React from 'react';
import styled from 'styled-components/native';

const defaultTitle = 'Button';

export default ({ title, onPress, disabled, style }) => (
  <ButtonContainer
    onPress={() => !disabled && onPress()}
    disabled={disabled}
    style={style}>
    <ButtonText>{title || defaultTitle}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  background: ${(props) => (props.disabled ? '#b3b3b3' : '#857cbd')};
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`;
