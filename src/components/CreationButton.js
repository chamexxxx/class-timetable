import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default ({ onPress, label, isFloating }) => {
  return (
    <CreationButtonContainer
      onPress={onPress}
      activeOpacity={0.7}
      isBigPadding={!!label}
      isFloating={isFloating}>
      {label && <Text style={{ marginRight: 10 }}>{label}</Text>}
      <Icon name="add" size={25} color="#857cbd" />
    </CreationButtonContainer>
  );
};

const CreationButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isFloating &&
    `position: absolute;
     bottom: 25px;
     align-self: center;`}
  padding: ${(props) => (props.isBigPadding ? '12px 20px' : '12px 13px')};
  background: #ffffff;
  border-radius: 50px;
  elevation: 2;
`;
